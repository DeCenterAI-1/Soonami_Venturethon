import { registerUnrealApiAccess } from "@/actions/unreal/auth";
import { getUserByWallet, updateUser } from "@/actions/supabase/users";
import { Account } from "thirdweb/wallets";
import { toast } from "react-toastify";
import { UNREAL_REG_PAYLOAD_CONFIG } from "@/utils/config";
import { UnrealRegistrationPayload } from "@/utils/types";
import { getPaymentTokenAddress } from "./payment-token";

export async function signAndRegisterAccount(
  account: Account,
  chainId: number | undefined
): Promise<boolean> {
  if (!account || !chainId) {
    toast.error("Please connect your wallet");
    return false; // Indicate failure
  }

  try {
    // Create or Get User from Supabase
    const userRes = await getUserByWallet(account.address);
    if (!userRes.success) throw new Error("Get user by wallet failed.");

    const unrealPaymentToken = getPaymentTokenAddress(chainId);

    if (!userRes.data.unreal_token) {
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

      // Register Unreal API Accress Token
      const unrealRegisterRes = await registerUnrealApiAccess(
        jsonPayload,
        account.address,
        signature
      );

      // Allow user to the API dashboard but notice that Unreal access token was not generated.
      if (!unrealRegisterRes.success) {
        toast.error(
          "Unreal API registration failed. Unreal access token was not generated."
        );
      }

      if (unrealRegisterRes.unrealToken) {
        await updateUser(account.address, {
          unreal_token: unrealRegisterRes.unrealToken,
        });
      }
    }
    return true; // Indicate success
  } catch (error) {
    console.error("Error in Sign-in And Register Account:", error);

    toast.error(
      error instanceof Error ? error.message : "An error occurred during login."
    );
    return false;
  }
}
