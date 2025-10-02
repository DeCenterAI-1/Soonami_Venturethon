import { registerUnrealApiAccess } from "@/actions/unreal/auth";
import {
  deleteUnrealTokenByWallet,
  getUserByWallet,
  updateUserUnrealToken,
} from "@/actions/supabase/users";
import { Account } from "thirdweb/wallets";
import { toast } from "react-toastify";
import { UNREAL_REG_PAYLOAD_CONFIG } from "@/utils/config";
import { UnrealRegistrationPayload } from "@/utils/types";
import { getPaymentTokenAddress } from "./payment-token";
import { preparePermitPayload, signPermitPayload } from "./permit";
import { defineChain, ThirdwebClient } from "thirdweb";
import { fetchTokenBalance } from "./thirdweb";
import { client } from "@/lib/thirdweb";
import { getChainById, getChainConfigById } from "@/utils/chains";
import { GetBalanceResult } from "thirdweb/extensions/erc20";

const checkUnrealBalance = async (
  account: Account,
  chainId: number,
  client: ThirdwebClient
): Promise<{
  sufficient: boolean;
  balance?: GetBalanceResult;
  message?: string;
}> => {
  const chain = getChainById(chainId);
  const chainConfig = getChainConfigById(chainId);
  const unrealTokenAddress = chainConfig?.custom?.tokens?.UnrealToken?.address;

  if (!chain || !unrealTokenAddress)
    throw new Error("Invalid chain configuration");

  const balance = await fetchTokenBalance(
    account.address,
    chain,
    client,
    unrealTokenAddress
  );

  const required =
    BigInt(UNREAL_REG_PAYLOAD_CONFIG.CALLS_INITIAL) * BigInt(10 ** 18);

  if (!balance || balance.value <= 0 || balance.value < required) {
    return {
      sufficient: false,
      balance,
      message: `You have ${balance.displayValue} Unreal, please top up at least ${UNREAL_REG_PAYLOAD_CONFIG.CALLS_INITIAL} Unreal Token.`,
    };
  }

  return { sufficient: true, balance };
};

// Sign registration payload and register to Unreal API
export async function signAndRegisterAccount(
  account: Account,
  chainId: number | undefined
): Promise<{ success: boolean; error?: string }> {
  if (!account || !chainId) {
    toast.error("Please connect your wallet");
    return { success: false, error: "Wallet not connected" }; // Indicate failure
  }

  try {
    // Create or Get User from Supabase by wallet address
    const userRes = await getUserByWallet(account.address);
    if (!userRes.success) throw new Error("Get user by wallet failed.");

    const unrealPaymentToken = getPaymentTokenAddress(chainId);

    // If user does not have Unreal access token, register to Unreal API and get access token
    if (!userRes.data.unreal_token) {
      // Send permit payload and permit signature with registration payload

      // Get Token balance from Thirdweb
      const { sufficient, balance, message } = await checkUnrealBalance(
        account,
        chainId,
        client
      );

      if (!sufficient) {
        toast.error(message);
        // return { success: true }; // Allow dashboard access with warning
      }

      // Step 1. Prepare permit payload
      const amount =
        balance!.value ||
        BigInt(UNREAL_REG_PAYLOAD_CONFIG.CALLS_INITIAL) * BigInt(10 ** 18); // 18 decimals

      const deadline =
        Math.floor(Date.now() / 1000) +
        UNREAL_REG_PAYLOAD_CONFIG.EXPIRY_SECONDS;

      const { domain, permitTypes, permitMessage } = await preparePermitPayload(
        account,
        defineChain(chainId),
        unrealPaymentToken,
        UNREAL_REG_PAYLOAD_CONFIG.UNREAL_OPENAI_ADDRESS,
        amount,
        deadline
      );

      // Step 2. Sign permit payload and get permit signature
      const permitSignature = await signPermitPayload(
        account,
        domain,
        permitTypes,
        permitMessage
      );

      // Step 3. Build and send Unreal registration payload with permit
      // Unreal registration payload
      const payload: UnrealRegistrationPayload = {
        iss: account.address,
        iat: Math.floor(Date.now() / 1000), // Current timestamp in seconds
        exp:
          Math.floor(Date.now() / 1000) +
          UNREAL_REG_PAYLOAD_CONFIG.EXPIRY_SECONDS, // Expires in EXPIRY_SECONDS
        calls: UNREAL_REG_PAYLOAD_CONFIG.CALLS_INITIAL, // Initial calls (per API schema)
        paymentToken: unrealPaymentToken,
        sub: UNREAL_REG_PAYLOAD_CONFIG.UNREAL_OPENAI_ADDRESS,
      };

      const jsonPayload = JSON.stringify(payload);
      const signature = await account.signMessage({ message: jsonPayload });

      const jsonPermitMessage = JSON.stringify(permitMessage);

      // Step 4. Register Unreal API Accress Token
      const unrealRegisterRes = await registerUnrealApiAccess(
        jsonPayload,
        account.address,
        signature,
        jsonPermitMessage,
        permitSignature
      );

      // Allow user to the API dashboard but notice that Unreal access token was not generated.
      if (!unrealRegisterRes.success) {
        toast.error(
          "Unreal API registration failed. Unreal access token was not generated."
        );
      }

      if (unrealRegisterRes.unrealToken) {
        // Update access token in Supabase users table
        await updateUserUnrealToken(account.address, {
          unreal_token: unrealRegisterRes.unrealToken,
        });
      }
    }
    return { success: true }; // Indicate success
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An error occurred during login";
    console.error("Error in Sign-in And Register Account:", error);
    toast.error(errorMessage);
    return { success: false, error: errorMessage };
  }
}

// Refresh Unreal access token
export async function refreshUnrealAccessToken(
  account: Account,
  chainId: number | undefined
): Promise<{ success: boolean; error?: string }> {
  if (!account || !chainId) {
    toast.error("Please connect your wallet");
    return { success: false, error: "Wallet not connected" }; // Indicate failure
  }

  try {
    // Delete existing Unreal access token
    await deleteUnrealTokenByWallet(account.address);

    // Re-register Unreal account and retrieve new access token
    return await signAndRegisterAccount(account, chainId);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to refresh Unreal access token";
    console.error("Error in refresh Unreal access token:", error);
    toast.error(errorMessage);
    return { success: false, error: errorMessage };
  }
}
