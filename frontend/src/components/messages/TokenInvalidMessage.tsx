import { deleteUnrealTokenByWallet } from "@/actions/supabase/users";
import { signAndRegisterAccount } from "@/services/auth";
import { toast } from "react-toastify";
import { Account } from "thirdweb/wallets";

interface TokenInvalidMessageProps {
  account: Account | undefined;
  chainId: number | undefined;
  onRefreshSuccess?: () => void; // Callback to notify parent on successful refresh
}

export default function TokenInvalidMessage({
  account,
  chainId,
  onRefreshSuccess,
}: TokenInvalidMessageProps) {
  async function refreshAccessToken() {
    if (!account || !chainId) {
      toast.error("Wallet not connected");
      return { success: false };
    }

    try {
      await deleteUnrealTokenByWallet(account.address);
      await signAndRegisterAccount(account, chainId);

      toast.success("Access token refreshed successfully");
      if (onRefreshSuccess) onRefreshSuccess(); // Trigger callback on success

      return { success: true };
    } catch (error) {
      console.error("Error refresh access token", error);
      toast.error(
        error instanceof Error ? error.message : "Refresh access token failed"
      );
      return { success: false };
    }
  }
  return (
    <div className="w-full p-4 bg-red-600 text-white text-center rounded-[20px] mb-4">
      You do not have a valid Unreal API access token. Please{" "}
      <span
        onClick={refreshAccessToken}
        className="font-semibold underline cursor-pointer"
      >
        refresh access token
      </span>{" "}
      or contact us.
    </div>
  );
}
