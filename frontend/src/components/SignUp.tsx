// Unused in Venturethon Demo

"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

      {/* Main Sign Up Card */}
      <div className="w-full max-w-lg mx-4 p-9 flex flex-col items-center gap-8 rounded-[20px] border border-[#232323] bg-black/80 backdrop-blur-[7.5px]">
        {/* Title */}
        <h1 className="text-white text-5xl font-bold leading-[50px] tracking-[-0.96px] text-center">
          Sign Up
        </h1>

        {/* Form Fields */}
        <div className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium leading-5">
                Email address
              </label>
              <div className="flex h-14 px-4 items-center gap-3 border border-[#2B2B2B] rounded-2xl">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="JohnDoe@email.com"
                  className="flex-1 bg-transparent text-[#8F8F8F] text-sm placeholder-[#8F8F8F] outline-none"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium leading-5">
                Password
              </label>
              <div className="flex h-14 px-4 items-center gap-3 border border-[#2B2B2B] rounded-2xl">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your secure password here"
                  className="flex-1 bg-transparent text-[#8F8F8F] text-sm placeholder-[#8F8F8F] outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="w-5 h-5 flex items-center justify-center"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.3211 9.74688C19.2937 9.68516 18.632 8.21719 17.1609 6.74609C15.2008 4.78594 12.725 3.75 9.99999 3.75C7.27499 3.75 4.79921 4.78594 2.83905 6.74609C1.36796 8.21719 0.703118 9.6875 0.678899 9.74688C0.643362 9.82681 0.625 9.91331 0.625 10.0008C0.625 10.0883 0.643362 10.1748 0.678899 10.2547C0.706243 10.3164 1.36796 11.7836 2.83905 13.2547C4.79921 15.2141 7.27499 16.25 9.99999 16.25C12.725 16.25 15.2008 15.2141 17.1609 13.2547C18.632 11.7836 19.2937 10.3164 19.3211 10.2547C19.3566 10.1748 19.375 10.0883 19.375 10.0008C19.375 9.91331 19.3566 9.82681 19.3211 9.74688ZM9.99999 15C7.5953 15 5.49452 14.1258 3.75546 12.4023C3.0419 11.6927 2.43483 10.8836 1.95312 10C2.4347 9.11636 3.04179 8.30717 3.75546 7.59766C5.49452 5.87422 7.5953 5 9.99999 5C12.4047 5 14.5055 5.87422 16.2445 7.59766C16.9595 8.307 17.5679 9.11619 18.0508 10C17.4875 11.0516 15.0336 15 9.99999 15ZM9.99999 6.25C9.25831 6.25 8.53329 6.46993 7.9166 6.88199C7.29992 7.29404 6.81927 7.87971 6.53544 8.56494C6.25162 9.25016 6.17735 10.0042 6.32205 10.7316C6.46674 11.459 6.82389 12.1272 7.34834 12.6517C7.87279 13.1761 8.54097 13.5333 9.2684 13.6779C9.99583 13.8226 10.7498 13.7484 11.4351 13.4645C12.1203 13.1807 12.7059 12.7001 13.118 12.0834C13.5301 11.4667 13.75 10.7417 13.75 10C13.749 9.00576 13.3535 8.05253 12.6505 7.34949C11.9475 6.64645 10.9942 6.25103 9.99999 6.25ZM9.99999 12.5C9.50554 12.5 9.02219 12.3534 8.61107 12.0787C8.19994 11.804 7.87951 11.4135 7.69029 10.9567C7.50107 10.4999 7.45157 9.99723 7.54803 9.51227C7.64449 9.02732 7.88259 8.58186 8.23222 8.23223C8.58186 7.8826 9.02731 7.6445 9.51227 7.54804C9.99722 7.45157 10.4999 7.50108 10.9567 7.6903C11.4135 7.87952 11.804 8.19995 12.0787 8.61107C12.3534 9.0222 12.5 9.50555 12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 9.99999 12.5Z"
                      fill="#C1C1C1"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Proceed Button */}
          <button
            className="w-full py-3 px-6 rounded-[20px] bg-[#232323] opacity-40 text-[#F5F5F5] text-base font-semibold leading-6 disabled:cursor-not-allowed"
            disabled
          >
            Proceed
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-[1px] bg-[#2B2B2B]"></div>
            <span className="text-[#5D5D5D] text-sm font-medium">Or</span>
            <div className="flex-1 h-[1px] bg-[#2B2B2B]"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col gap-3">
            {/* Google Sign Up */}
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-[20px] border border-[#2B2B2B] shadow-[0_3px_2px_-2px_rgba(0,0,0,0.06),0_5px_3px_-2px_rgba(0,0,0,0.02)]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3125 10.0004C18.3124 11.8399 17.6632 13.6204 16.4792 15.0283C15.2953 16.4362 13.6525 17.3811 11.8402 17.6967C10.028 18.0123 8.16247 17.6782 6.57231 16.7534C4.98216 15.8286 3.76933 14.3723 3.14746 12.6411C2.52559 10.9099 2.53456 9.01473 3.17279 7.28946C3.81101 5.56419 5.03756 4.11947 6.6364 3.20975C8.23524 2.30002 10.1038 1.98365 11.913 2.31636C13.7222 2.64907 15.356 3.60951 16.5266 5.02853C16.6049 5.12348 16.6639 5.23294 16.6999 5.35066C16.736 5.46838 16.7486 5.59205 16.7368 5.71462C16.7251 5.83718 16.6894 5.95624 16.6317 6.065C16.5739 6.17375 16.4953 6.27007 16.4004 6.34845C16.3054 6.42683 16.196 6.48574 16.0783 6.52182C15.9605 6.5579 15.8369 6.57044 15.7143 6.55873C15.5917 6.54701 15.4727 6.51127 15.3639 6.45354C15.2552 6.39581 15.1589 6.31723 15.0805 6.22228C14.2165 5.17497 13.0198 4.45537 11.6896 4.18341C10.3595 3.91144 8.97635 4.10353 7.77067 4.72767C6.56498 5.3518 5.60961 6.37028 5.06376 7.61337C4.51791 8.85646 4.41457 10.2491 4.77095 11.5591C5.12732 12.8692 5.9219 14.0175 7.02225 14.8128C8.1226 15.608 9.46226 16.0022 10.818 15.9295C12.1737 15.8569 13.4635 15.3218 14.4726 14.4135C15.4817 13.5052 16.149 12.2785 16.3633 10.9379H10.5C10.2514 10.9379 10.0129 10.8391 9.83709 10.6633C9.66127 10.4875 9.5625 10.249 9.5625 10.0004C9.5625 9.75176 9.66127 9.5133 9.83709 9.33749C10.0129 9.16167 10.2514 9.0629 10.5 9.0629H17.375C17.6236 9.0629 17.8621 9.16167 18.0379 9.33749C18.2137 9.5133 18.3125 9.75176 18.3125 10.0004Z"
                  fill="#5D5D5D"
                />
              </svg>
              <span className="text-[#8F8F8F] text-base font-semibold">
                Sign up with Google
              </span>
            </button>

            {/* Wallet Sign Up */}
            <button className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-[20px] border border-[#2B2B2B] shadow-[0_3px_2px_-2px_rgba(0,0,0,0.06),0_5px_3px_-2px_rgba(0,0,0,0.02)]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5611_60040)">
                  <path
                    d="M4.09419 6.26547C7.35669 3.07297 12.6442 3.07297 15.9059 6.26547L16.2984 6.64964C16.3371 6.68716 16.3679 6.7321 16.389 6.78178C16.41 6.83145 16.4209 6.88485 16.4209 6.9388C16.4209 6.99275 16.41 7.04615 16.389 7.09583C16.3679 7.1455 16.3371 7.19044 16.2984 7.22797L14.9559 8.54214C14.9166 8.58091 14.8636 8.60266 14.8084 8.60266C14.7531 8.60266 14.7002 8.58091 14.6609 8.54214L14.12 8.0138C11.845 5.7863 8.15585 5.7863 5.88085 8.0138L5.30252 8.58047C5.26287 8.61891 5.20982 8.6404 5.1546 8.6404C5.09938 8.6404 5.04633 8.61891 5.00669 8.58047L3.66419 7.26547C3.62545 7.22801 3.59465 7.18315 3.57361 7.13354C3.55257 7.08393 3.54173 7.0306 3.54173 6.97672C3.54173 6.92284 3.55257 6.8695 3.57361 6.8199C3.59465 6.77029 3.62545 6.72542 3.66419 6.68797L4.09419 6.26547ZM18.6825 8.98464L19.8775 10.1546C19.9163 10.1922 19.9471 10.2371 19.9681 10.2868C19.9892 10.3365 20 10.3899 20 10.4438C20 10.4978 19.9892 10.5512 19.9681 10.6008C19.9471 10.6505 19.9163 10.6954 19.8775 10.733L14.4892 16.0088C14.4101 16.0858 14.3041 16.1289 14.1938 16.1289C14.0834 16.1289 13.9774 16.0858 13.8984 16.0088L10.075 12.2646C10.0553 12.245 10.0287 12.234 10.0009 12.234C9.97304 12.234 9.94637 12.245 9.92669 12.2646L6.10252 16.0088C6.02347 16.0858 5.91747 16.1289 5.8071 16.1289C5.69674 16.1289 5.59074 16.0858 5.51169 16.0088L0.12252 10.733C0.0837604 10.6954 0.0529411 10.6505 0.0318936 10.6008C0.0108461 10.5512 0 10.4978 0 10.4438C0 10.3899 0.0108461 10.3365 0.0318936 10.2868C0.0529411 10.2371 0.0837604 10.1922 0.12252 10.1546L1.31752 8.98464C1.39657 8.90762 1.50257 8.86452 1.61294 8.86452C1.7233 8.86452 1.8293 8.90762 1.90835 8.98464L5.73252 12.7288C5.77419 12.7688 5.84002 12.7688 5.88085 12.7288L9.70502 8.98464C9.78407 8.90762 9.89007 8.86452 10.0004 8.86452C10.1108 8.86452 10.2168 8.90762 10.2959 8.98464L14.12 12.7288C14.1617 12.7688 14.2267 12.7688 14.2684 12.7288L18.0925 8.98464C18.1714 8.90767 18.2773 8.86459 18.3875 8.86459C18.4977 8.86459 18.6036 8.90767 18.6825 8.98464Z"
                    fill="#5D5D5D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5611_60040">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[#8F8F8F] text-base font-semibold">
                Sign up with Wallet
              </span>
            </button>
          </div>

          {/* Login Link */}
          <div className="flex items-center justify-center gap-1">
            <span className="text-[#5D5D5D] text-sm">
              Already have an account?
            </span>
            <Link
              href="/login"
              className="text-white text-sm font-medium py-1 px-2 rounded hover:bg-white/5 transition-colors"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
