"use client";

import { registerUnrealApiAccess } from "@/actions/unreal/register";
import { getCurrentUserFromSupabase } from "@/actions/users";
import { client } from "@/lib/thirdweb";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { defineChain } from "thirdweb";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { Account } from "thirdweb/wallets";

const unRealPaymentToken = process.env.NEXT_PUBLIC_UNREAL_PAYMENT_TOKEN!;
const unRealOpenaiAddress = process.env.NEXT_PUBLIC_UNREAL_OPENAI_ADDRESS!;

export default function Login() {
  const account = useActiveAccount();
  const router = useRouter();

  async function signAndRegisterAccount(account: Account) {
    if (!account) {
      return alert("Please connect your wallet");
    }

    // Create or Get User from Supabase
    const userRes = await getCurrentUserFromSupabase(account.address);
    console.log("User response", userRes);

    if (!userRes.data.unrealToken) {
      const payload = {
        iss: account.address,
        iat: Math.floor(Date.now() / 1000), // Current timestamp in seconds
        exp: Math.floor(Date.now() / 1000) + 3600, // Expires in 1 hour (adjust)
        calls: 0, // Initial calls (per API schema)
        paymentToken: unRealPaymentToken,
        sub: unRealOpenaiAddress,
      };

      const jsonPayload = JSON.stringify(payload);

      const signature = await account.signMessage({
        message: JSON.stringify(payload),
      });

      console.log("Sign Message Signature", signature);

      // Register Unreal API Accress
      const unrealRegisterRes = await registerUnrealApiAccess(
        jsonPayload,
        account.address,
        signature
      );
      const unrealToken = unrealRegisterRes.unrealToken || undefined;

      await getCurrentUserFromSupabase(account.address, unrealToken);
    }
  }

  useEffect(() => {
    if (account) {
      console.log(account);
      signAndRegisterAccount(account);
      router.push("/dashboard");
    }
  }, [account]);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative"
      style={{
        background:
          "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxYTFhMWEiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+Cjwvc3ZnPg==) repeat, linear-gradient(64deg, #050505 49.13%, #191919 100%)",
      }}
    >
      {/* Header with Logo */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-start p-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <span className="text-black font-bold text-lg">D</span>
          </div>
          <span className="text-white text-lg font-bold">DECENTER AI</span>
        </div>
      </div>

      {/* Main Login Card */}
      <div className="w-full max-w-lg mx-4 p-9 flex flex-col items-center gap-6 rounded-[20px] border border-[#232323] bg-black/80 backdrop-blur-[7.5px]">
        {/* Title */}
        <h1 className="text-white text-5xl font-bold leading-[50px] tracking-[-0.96px] text-center">
          Log In
        </h1>

        {/* Form Fields */}
        <div className="w-full flex flex-col gap-8">
          {/* Login Buttons */}
          <div className="flex flex-col gap-3">
            {/* Wallet Login */}
            <div className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-[20px] border border-[#2B2B2B] shadow-[0_3px_2px_-2px_rgba(0,0,0,0.06),0_5px_3px_-2px_rgba(0,0,0,0.02)]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5611_60250)">
                  <path
                    d="M4.09419 6.26547C7.35669 3.07297 12.6442 3.07297 15.9059 6.26547L16.2984 6.64964C16.3371 6.68716 16.3679 6.7321 16.389 6.78178C16.41 6.83145 16.4209 6.88485 16.4209 6.9388C16.4209 6.99275 16.41 7.04615 16.389 7.09583C16.3679 7.1455 16.3371 7.19044 16.2984 7.22797L14.9559 8.54214C14.9166 8.58091 14.8636 8.60266 14.8084 8.60266C14.7531 8.60266 14.7002 8.58091 14.6609 8.54214L14.12 8.0138C11.845 5.7863 8.15585 5.7863 5.88085 8.0138L5.30252 8.58047C5.26287 8.61891 5.20982 8.6404 5.1546 8.6404C5.09938 8.6404 5.04633 8.61891 5.00669 8.58047L3.66419 7.26547C3.62545 7.22801 3.59465 7.18315 3.57361 7.13354C3.55257 7.08393 3.54173 7.0306 3.54173 6.97672C3.54173 6.92284 3.55257 6.8695 3.57361 6.8199C3.59465 6.77029 3.62545 6.72542 3.66419 6.68797L4.09419 6.26547ZM18.6825 8.98464L19.8775 10.1546C19.9163 10.1922 19.9471 10.2371 19.9681 10.2868C19.9892 10.3365 20 10.3899 20 10.4438C20 10.4978 19.9892 10.5512 19.9681 10.6008C19.9471 10.6505 19.9163 10.6954 19.8775 10.733L14.4892 16.0088C14.4101 16.0858 14.3041 16.1289 14.1938 16.1289C14.0834 16.1289 13.9774 16.0858 13.8984 16.0088L10.075 12.2646C10.0553 12.245 10.0287 12.234 10.0009 12.234C9.97304 12.234 9.94637 12.245 9.92669 12.2646L6.10252 16.0088C6.02347 16.0858 5.91747 16.1289 5.8071 16.1289C5.69674 16.1289 5.59074 16.0858 5.51169 16.0088L0.12252 10.733C0.0837604 10.6954 0.0529411 10.6505 0.0318936 10.6008C0.0108461 10.5512 0 10.4978 0 10.4438C0 10.3899 0.0108461 10.3365 0.0318936 10.2868C0.0529411 10.2371 0.0837604 10.1922 0.12252 10.1546L1.31752 8.98464C1.39657 8.90762 1.50257 8.86452 1.61294 8.86452C1.7233 8.86452 1.8293 8.90762 1.90835 8.98464L5.73252 12.7288C5.77419 12.7688 5.84002 12.7688 5.88085 12.7288L9.70502 8.98464C9.78407 8.90762 9.89007 8.86452 10.0004 8.86452C10.1108 8.86452 10.2168 8.90762 10.2959 8.98464L14.12 12.7288C14.1617 12.7688 14.2267 12.7688 14.2684 12.7288L18.0925 8.98464C18.1714 8.90767 18.2773 8.86459 18.3875 8.86459C18.4977 8.86459 18.6036 8.90767 18.6825 8.98464Z"
                    fill="#5D5D5D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5611_60250">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {/* Connect Button */}
              <ConnectButton
                accountAbstraction={{
                  chain: defineChain(1020352220),
                  sponsorGas: true,
                }}
                client={client}
                connectButton={{
                  label: "Sign in with Wallet",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
