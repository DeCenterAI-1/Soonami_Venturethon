"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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
                  placeholder="example@email.com"
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
                  placeholder="Enter your password"
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
                      d="M17.8125 13.6717C17.7411 13.7124 17.6624 13.7386 17.5808 13.7489C17.4993 13.7591 17.4165 13.7532 17.3373 13.7314C17.258 13.7097 17.1839 13.6725 17.119 13.622C17.0542 13.5715 16.9999 13.5088 16.9593 13.4373L15.475 10.8436C14.612 11.4271 13.66 11.8666 12.6562 12.1451L13.1148 14.8967C13.1283 14.9777 13.1258 15.0606 13.1073 15.1406C13.0887 15.2206 13.0546 15.2962 13.0069 15.363C12.9592 15.4298 12.8987 15.4866 12.829 15.53C12.7593 15.5735 12.6818 15.6028 12.6007 15.6162C12.5674 15.6217 12.5337 15.6245 12.5 15.6248C12.3521 15.6246 12.2091 15.572 12.0964 15.4763C11.9837 15.3806 11.9085 15.248 11.8843 15.1022L11.4336 12.4006C10.4829 12.5329 9.51856 12.5329 8.56793 12.4006L8.11715 15.1022C8.09289 15.2483 8.01753 15.381 7.90449 15.4768C7.79145 15.5725 7.64809 15.625 7.49996 15.6248C7.46541 15.6247 7.43093 15.6218 7.39684 15.6162C7.31582 15.6028 7.23825 15.5735 7.16856 15.53C7.09887 15.4866 7.03843 15.4298 6.99068 15.363C6.94294 15.2962 6.90884 15.2206 6.89032 15.1406C6.87181 15.0606 6.86924 14.9777 6.88277 14.8967L7.34371 12.1451C6.3403 11.8657 5.38887 11.4254 4.52652 10.8412L3.04684 13.4373C2.96396 13.5817 2.8271 13.6873 2.66637 13.7308C2.50565 13.7743 2.33422 13.7522 2.1898 13.6693C2.04539 13.5865 1.93981 13.4496 1.89629 13.2889C1.85278 13.1282 1.87489 12.9567 1.95777 12.8123L3.52027 10.0779C2.97144 9.60378 2.46677 9.0808 2.01246 8.51544C1.9558 8.45218 1.91263 8.37803 1.88558 8.29754C1.85853 8.21704 1.84817 8.13187 1.85513 8.04723C1.86209 7.9626 1.88622 7.88027 1.92606 7.80527C1.9659 7.73027 2.0206 7.66418 2.08683 7.61102C2.15306 7.55787 2.22943 7.51877 2.31127 7.49611C2.39311 7.47345 2.47872 7.46771 2.56285 7.47924C2.64699 7.49076 2.72789 7.51932 2.80063 7.56315C2.87336 7.60698 2.9364 7.66518 2.9859 7.73419C4.28277 9.33887 6.55152 11.2498 9.99996 11.2498C13.4484 11.2498 15.7171 9.33653 17.014 7.73419C17.063 7.66377 17.1259 7.60417 17.1988 7.5591C17.2718 7.51403 17.3532 7.48446 17.4381 7.47222C17.5229 7.45998 17.6094 7.46534 17.6921 7.48795C17.7749 7.51057 17.852 7.54997 17.9189 7.6037C17.9857 7.65742 18.0408 7.72432 18.0806 7.80024C18.1205 7.87616 18.1443 7.95947 18.1506 8.04499C18.1569 8.13051 18.1455 8.21641 18.1172 8.29734C18.0888 8.37828 18.0442 8.45251 17.9859 8.51544C17.5316 9.0808 17.0269 9.60378 16.4781 10.0779L18.0406 12.8123C18.0825 12.8836 18.1099 12.9625 18.1211 13.0444C18.1324 13.1264 18.1272 13.2097 18.106 13.2896C18.0848 13.3696 18.0479 13.4445 17.9975 13.5101C17.9471 13.5757 17.8842 13.6306 17.8125 13.6717Z"
                      fill="#C1C1C1"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className="w-5 h-5 border-[1.5px] border-[#2B2B2B] rounded flex items-center justify-center"
              >
                {rememberMe && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3L4.5 8.5L2 6"
                      stroke="#C1C1C1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <span className="text-[#C1C1C1] text-sm font-medium">
                Remember me for 30 days
              </span>
            </div>
            <button className="text-[#5D5D5D] text-sm font-medium hover:text-[#8F8F8F] transition-colors">
              Forgot Password?
            </button>
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
            {/* Google Login */}
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-[20px] border border-[#2B2B2B] shadow-[0_3px_2px_-2px_rgba(0,0,0,0.06),0_5px_3px_-2px_rgba(0,0,0,0.02)]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8125 10.0004C17.8124 11.8399 17.1632 13.6204 15.9792 15.0283C14.7953 16.4362 13.1525 17.3811 11.3402 17.6967C9.52797 18.0123 7.66247 17.6782 6.07231 16.7534C4.48216 15.8286 3.26933 14.3723 2.64746 12.6411C2.02559 10.9099 2.03456 9.01473 2.67279 7.28946C3.31101 5.56419 4.53756 4.11947 6.1364 3.20975C7.73524 2.30002 9.60381 1.98365 11.413 2.31636C13.2222 2.64907 14.856 3.60951 16.0266 5.02853C16.1049 5.12348 16.1639 5.23294 16.1999 5.35066C16.236 5.46838 16.2486 5.59205 16.2368 5.71462C16.2251 5.83718 16.1894 5.95624 16.1317 6.065C16.0739 6.17375 15.9953 6.27007 15.9004 6.34845C15.8054 6.42683 15.696 6.48574 15.5783 6.52182C15.4605 6.5579 15.3369 6.57044 15.2143 6.55873C15.0917 6.54701 14.9727 6.51127 14.8639 6.45354C14.7552 6.39581 14.6589 6.31723 14.5805 6.22228C13.7165 5.17497 12.5198 4.45537 11.1896 4.18341C9.85952 3.91144 8.47635 4.10353 7.27067 4.72767C6.06498 5.3518 5.10961 6.37028 4.56376 7.61337C4.01791 8.85646 3.91457 10.2491 4.27095 11.5591C4.62732 12.8692 5.4219 14.0175 6.52225 14.8128C7.6226 15.608 8.96226 16.0022 10.318 15.9295C11.6737 15.8569 12.9635 15.3218 13.9726 14.4135C14.9817 13.5052 15.649 12.2785 15.8633 10.9379H10C9.75136 10.9379 9.5129 10.8391 9.33709 10.6633C9.16127 10.4875 9.0625 10.249 9.0625 10.0004C9.0625 9.75176 9.16127 9.5133 9.33709 9.33749C9.5129 9.16167 9.75136 9.0629 10 9.0629H16.875C17.1236 9.0629 17.3621 9.16167 17.5379 9.33749C17.7137 9.5133 17.8125 9.75176 17.8125 10.0004Z"
                  fill="#5D5D5D"
                />
              </svg>
              <span className="text-[#8F8F8F] text-base font-semibold">
                Log in with Google
              </span>
            </button>

            {/* Wallet Login */}
            <button className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-[20px] border border-[#2B2B2B] shadow-[0_3px_2px_-2px_rgba(0,0,0,0.06),0_5px_3px_-2px_rgba(0,0,0,0.02)]">
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
              <span className="text-[#8F8F8F] text-base font-semibold">
                Log in with Wallet
              </span>
            </button>
          </div>

          {/* Create Account Link */}
          <div className="flex items-center justify-center gap-1">
            <span className="text-[#5D5D5D] text-sm">Are you new here?</span>
            <Link
              href="/sign-up"
              className="text-white text-sm font-medium py-1 px-2 rounded hover:bg-white/5 transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
