// Display Dummy data, unused in Venturethon Demo

"use client";

const statsData = [
  {
    title: "24hr Inferences",
    value: "1457",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5 9H25.5V3C25.5 2.60218 25.342 2.22064 25.0607 1.93934C24.7794 1.65804 24.3978 1.5 24 1.5C23.6022 1.5 23.2206 1.65804 22.9393 1.93934C22.658 2.22064 22.5 2.60218 22.5 3V9H10.5C8.9087 9 7.38258 9.63214 6.25736 10.7574C5.13214 11.8826 4.5 13.4087 4.5 15V36C4.5 37.5913 5.13214 39.1174 6.25736 40.2426C7.38258 41.3679 8.9087 42 10.5 42H37.5C39.0913 42 40.6174 41.3679 41.7426 40.2426C42.8679 39.1174 43.5 37.5913 43.5 36V15C43.5 13.4087 42.8679 11.8826 41.7426 10.7574C40.6174 9.63214 39.0913 9 37.5 9ZM40.5 36C40.5 36.7957 40.1839 37.5587 39.6213 38.1213C39.0587 38.6839 38.2957 39 37.5 39H10.5C9.70435 39 8.94129 38.6839 8.37868 38.1213C7.81607 37.5587 7.5 36.7957 7.5 36V15C7.5 14.2044 7.81607 13.4413 8.37868 12.8787C8.94129 12.3161 9.70435 12 10.5 12H37.5C38.2957 12 39.0587 12.3161 39.6213 12.8787C40.1839 13.4413 40.5 14.2044 40.5 15V36ZM30.75 25.5H17.25C15.8576 25.5 14.5223 26.0531 13.5377 27.0377C12.5531 28.0223 12 29.3576 12 30.75C12 32.1424 12.5531 33.4777 13.5377 34.4623C14.5223 35.4469 15.8576 36 17.25 36H30.75C32.1424 36 33.4777 35.4469 34.4623 34.4623C35.4469 33.4777 36 32.1424 36 30.75C36 29.3576 35.4469 28.0223 34.4623 27.0377C33.4777 26.0531 32.1424 25.5 30.75 25.5ZM25.5 28.5V33H22.5V28.5H25.5ZM15 30.75C15 30.1533 15.2371 29.581 15.659 29.159C16.081 28.7371 16.6533 28.5 17.25 28.5H19.5V33H17.25C16.6533 33 16.081 32.7629 15.659 32.341C15.2371 31.919 15 31.3467 15 30.75ZM30.75 33H28.5V28.5H30.75C31.3467 28.5 31.919 28.7371 32.341 29.159C32.7629 29.581 33 30.1533 33 30.75C33 31.3467 32.7629 31.919 32.341 32.341C31.919 32.7629 31.3467 33 30.75 33ZM13.5 20.25C13.5 19.805 13.632 19.37 13.8792 19C14.1264 18.63 14.4778 18.3416 14.889 18.1713C15.3001 18.001 15.7525 17.9564 16.189 18.0432C16.6254 18.13 17.0263 18.3443 17.341 18.659C17.6557 18.9737 17.87 19.3746 17.9568 19.811C18.0436 20.2475 17.999 20.6999 17.8287 21.111C17.6584 21.5222 17.37 21.8736 17 22.1208C16.63 22.368 16.195 22.5 15.75 22.5C15.1533 22.5 14.581 22.2629 14.159 21.841C13.7371 21.419 13.5 20.8467 13.5 20.25ZM30 20.25C30 19.805 30.132 19.37 30.3792 19C30.6264 18.63 30.9778 18.3416 31.389 18.1713C31.8001 18.001 32.2525 17.9564 32.689 18.0432C33.1254 18.13 33.5263 18.3443 33.841 18.659C34.1557 18.9737 34.37 19.3746 34.4568 19.811C34.5436 20.2475 34.499 20.6999 34.3287 21.111C34.1584 21.5222 33.87 21.8736 33.5 22.1208C33.13 22.368 32.695 22.5 32.25 22.5C31.6533 22.5 31.081 22.2629 30.659 21.841C30.2371 21.419 30 20.8467 30 20.25Z"
          fill="#5D5D5D"
        />
      </svg>
    ),
    details: [
      { label: "Models", value: "741" },
      { label: "Agents", value: "705" },
    ],
  },
  {
    title: "Total Inferences",
    value: "15,420",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.5 24C31.5 24.3978 31.342 24.7794 31.0607 25.0607C30.7794 25.342 30.3978 25.5 30 25.5H18C17.6022 25.5 17.2206 25.342 16.9393 25.0607C16.658 24.7794 16.5 24.3978 16.5 24C16.5 23.6022 16.658 23.2206 16.9393 22.9393C17.2206 22.658 17.6022 22.5 18 22.5H30C30.3978 22.5 30.7794 22.658 31.0607 22.9393C31.342 23.2206 31.5 23.6022 31.5 24ZM30 28.5H18C17.6022 28.5 17.2206 28.658 16.9393 28.9393C16.658 29.2206 16.5 29.6022 16.5 30C16.5 30.3978 16.658 30.7794 16.9393 31.0607C17.2206 31.342 17.6022 31.5 18 31.5H30C30.3978 31.5 30.7794 31.342 31.0607 31.0607C31.342 30.7794 31.5 30.3978 31.5 30C31.5 29.6022 31.342 29.2206 31.0607 28.9393C30.7794 28.658 30.3978 28.5 30 28.5ZM40.5 9V37.5C40.5 39.0913 39.8679 40.6174 38.7426 41.7426C37.6174 42.8679 36.0913 43.5 34.5 43.5H13.5C11.9087 43.5 10.3826 42.8679 9.25736 41.7426C8.13214 40.6174 7.5 39.0913 7.5 37.5V9C7.5 8.20435 7.81607 7.44129 8.37868 6.87868C8.94129 6.31607 9.70435 6 10.5 6H13.5V4.5C13.5 4.10218 13.658 3.72064 13.9393 3.43934C14.2206 3.15804 14.6022 3 15 3C15.3978 3 15.7794 3.15804 16.0607 3.43934C16.342 3.72064 16.5 4.10218 16.5 4.5V6H22.5V4.5C22.5 4.10218 22.658 3.72064 22.9393 3.43934C23.2206 3.15804 23.6022 3 24 3C24.3978 3 24.7794 3.15804 25.0607 3.43934C25.342 3.72064 25.5 4.10218 25.5 4.5V6H31.5V4.5C31.5 4.10218 31.658 3.72064 31.9393 3.43934C32.2206 3.15804 32.6022 3 33 3C33.3978 3 33.7794 3.15804 34.0607 3.43934C34.342 3.72064 34.5 4.10218 34.5 4.5V6H37.5C38.2956 6 39.0587 6.31607 39.6213 6.87868C40.1839 7.44129 40.5 8.20435 40.5 9ZM37.5 9H34.5V10.5C34.5 10.8978 34.342 11.2794 34.0607 11.5607C33.7794 11.842 33.3978 12 33 12C32.6022 12 32.2206 11.842 31.9393 11.5607C31.658 11.2794 31.5 10.8978 31.5 10.5V9H25.5V10.5C25.5 10.8978 25.342 11.2794 25.0607 11.5607C24.7794 11.842 24.3978 12 24 12C23.6022 12 23.2206 11.842 22.9393 11.5607C22.658 11.2794 22.5 10.8978 22.5 10.5V9H16.5V10.5C16.5 10.8978 16.342 11.2794 16.0607 11.5607C15.7794 11.842 15.3978 12 15 12C14.6022 12 14.2206 11.842 13.9393 11.5607C13.658 11.2794 13.5 10.8978 13.5 10.5V9H10.5V37.5C10.5 38.2957 10.8161 39.0587 11.3787 39.6213C11.9413 40.1839 12.7044 40.5 13.5 40.5H34.5C35.2956 40.5 36.0587 40.1839 36.6213 39.6213C37.1839 39.0587 37.5 38.2957 37.5 37.5V9Z"
          fill="#5D5D5D"
        />
      </svg>
    ),
    details: [
      { label: "Created", value: "4508" },
      { label: "Automated", value: "10,237" },
    ],
  },
  {
    title: "Total tasks",
    value: "43",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5 5.99973H30.7013C29.8584 5.05609 28.8258 4.30109 27.671 3.78415C26.5162 3.26721 25.2652 3 24 3C22.7348 3 21.4838 3.26721 20.329 3.78415C19.1742 4.30109 18.1416 5.05609 17.2987 5.99973H10.5C9.70435 5.99973 8.94129 6.3158 8.37868 6.87841C7.81607 7.44102 7.5 8.20408 7.5 8.99973V40.4997C7.5 41.2954 7.81607 42.0584 8.37868 42.621C8.94129 43.1837 9.70435 43.4997 10.5 43.4997H37.5C38.2956 43.4997 39.0587 43.1837 39.6213 42.621C40.1839 42.0584 40.5 41.2954 40.5 40.4997V8.99973C40.5 8.20408 40.1839 7.44102 39.6213 6.87841C39.0587 6.3158 38.2956 5.99973 37.5 5.99973ZM24 5.99973C25.5913 5.99973 27.1174 6.63187 28.2426 7.75709C29.3679 8.88231 30 10.4084 30 11.9997H18C18 10.4084 18.6321 8.88231 19.7574 7.75709C20.8826 6.63187 22.4087 5.99973 24 5.99973ZM37.5 40.4997H10.5V8.99973H15.5156C15.1744 9.96313 15 10.9777 15 11.9997V13.4997C15 13.8976 15.158 14.2791 15.4393 14.5604C15.7206 14.8417 16.1022 14.9997 16.5 14.9997H31.5C31.8978 14.9997 32.2794 14.8417 32.5607 14.5604C32.842 14.2791 33 13.8976 33 13.4997V11.9997C33 10.9777 32.8256 9.96313 32.4844 8.99973H37.5V40.4997Z"
          fill="#5D5D5D"
        />
      </svg>
    ),
    details: [
      { label: "Completed", value: "33" },
      { label: "Pending", value: "10" },
    ],
  },
  {
    title: "Network health",
    value: "98%",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45 24.0004C45 24.3982 44.842 24.7797 44.5607 25.0611C44.2794 25.3424 43.8978 25.5004 43.5 25.5004H38.4263L31.3425 39.6716C31.2178 39.9209 31.0261 40.1304 30.789 40.2768C30.5519 40.4232 30.2787 40.5006 30 40.5004H29.925C29.634 40.486 29.3536 40.3872 29.1178 40.2161C28.8821 40.0449 28.7013 39.8088 28.5975 39.5366L17.8781 11.3929L11.865 24.621C11.7459 24.8831 11.5538 25.1054 11.3118 25.2614C11.0697 25.4173 10.7879 25.5003 10.5 25.5004H4.5C4.10218 25.5004 3.72064 25.3424 3.43934 25.0611C3.15804 24.7797 3 24.3982 3 24.0004C3 23.6026 3.15804 23.221 3.43934 22.9397C3.72064 22.6584 4.10218 22.5004 4.5 22.5004H9.53437L16.635 6.87977C16.7574 6.61021 16.9569 6.3829 17.2082 6.22648C17.4596 6.07005 17.7516 5.99151 18.0475 6.00073C18.3434 6.00995 18.63 6.10653 18.8711 6.2783C19.1122 6.45008 19.2971 6.68936 19.4025 6.96602L30.1856 35.2785L36.1575 23.3329C36.2817 23.083 36.4731 22.8727 36.7103 22.7256C36.9474 22.5785 37.2209 22.5005 37.5 22.5004H43.5C43.8978 22.5004 44.2794 22.6584 44.5607 22.9397C44.842 23.221 45 23.6026 45 24.0004Z"
          fill="#5D5D5D"
        />
      </svg>
    ),
    details: [
      { label: "Speed", value: "385ms" },
      { label: "Response time", value: "238ms" },
    ],
  },
];

const recentActivities = [
  {
    type: "Text generation",
    user: "Mohammed",
    action: 'Assigned you a task on "Speech therapy TXT" team',
    time: "12 Minutes ago",
  },
  {
    type: "Speech therapy",
    user: "Mohammed",
    action: 'Assigned you a task on "Speech therapy TXT" team',
    time: "12 Minutes ago",
  },
  {
    type: "Voice recognition",
    user: "Mohammed",
    action: 'Assigned you a task on "Speech therapy TXT" team',
    time: "12 Minutes ago",
  },
  {
    type: "ChatGPT9",
    user: "Mohammed",
    action: 'Assigned you a task on "Speech therapy TXT" team',
    time: "12 Minutes ago",
  },
];

export default function Dashboard() {
  return (
    <div>
      {/* Dashboard Content */}
      <div className="flex-1 p-8 bg-[#191919]/10">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="relative bg-[#050505] border border-[#232323] rounded-[20px] p-6 overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-4xl font-normal text-[#F5F5F5] leading-normal mb-4">
                Deploy AI Agents to your apps instantly.
              </h1>
              <p className="text-base text-[#C1C1C1] leading-6 max-w-xl">
                Launch your AI project into orbit with our instant training
                platform. We use the latest AI technology to help you train your
                model quickly and efficiently.
              </p>
            </div>

            {/* Rocket Image */}
            <div className="absolute -right-8 -top-20 w-96 h-96 opacity-60">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a7577eabdf9a761e11b09e16a53a4a2e20d15f87?width=925"
                alt="Rocket"
                className="w-full h-full object-contain transform rotate-[60deg] mix-blend-luminosity"
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-[#050505] border border-[#232323] rounded-[20px] p-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-semibold text-[#F5F5F5]">
                      {stat.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#F5F5F5]">
                      {stat.value}
                    </span>
                    <div className="w-12 h-12 flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-[#494949]"></div>

                  <div className="space-y-5">
                    {stat.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex justify-between items-center"
                      >
                        <span className="text-sm text-[#C1C1C1]">
                          {detail.label}
                        </span>
                        <span className="text-sm text-[#C1C1C1]">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart and Activities Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Section */}
            <div className="lg:col-span-2 bg-[#050505] border border-[#232323] rounded-[20px] p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold text-[#F5F5F5]">
                  Inference history
                </h3>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#F5F5F5]"></div>
                    <span className="text-sm text-[#92929D]">Online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#494949]"></div>
                    <span className="text-sm text-[#92929D]">Offline</span>
                  </div>
                </div>
              </div>

              {/* Simplified Chart Placeholder */}
              <div className="h-80 relative">
                {/* Y-axis labels */}
                <div className="absolute left-0 h-full flex flex-col justify-between py-4 text-sm text-[#8F8F8F]">
                  <span>1k</span>
                  <span>800</span>
                  <span>600</span>
                  <span>400</span>
                  <span>200</span>
                  <span>0</span>
                </div>

                {/* Chart area */}
                <div className="ml-8 h-full border-l border-b border-[#232323] relative">
                  {/* Mock chart lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 5 80 Q 15 60 25 70 Q 35 50 45 55 Q 55 40 65 45 Q 75 30 85 35 Q 95 25 100 30"
                      stroke="#F5F5F5"
                      strokeWidth="0.5"
                      fill="none"
                    />
                    <path
                      d="M 5 90 Q 15 85 25 88 Q 35 80 45 82 Q 55 75 65 78 Q 75 70 85 72 Q 95 65 100 68"
                      stroke="#494949"
                      strokeWidth="0.5"
                      fill="none"
                    />
                  </svg>

                  {/* Tooltip */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-[#050505] border border-[#8F8F8F] rounded-lg p-3">
                    <div className="text-base font-semibold text-[#F5F5F5]">
                      27632
                    </div>
                    <div className="text-sm text-[#8F8F8F]">August</div>
                  </div>
                </div>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-8 right-0 flex justify-between text-sm text-[#8F8F8F] mt-2">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-[#191919] rounded-[20px] py-6">
              <div className="px-6 mb-4">
                <h3 className="text-base font-semibold text-[#F5F5F5]">
                  Recent activities
                </h3>
              </div>

              <div className="w-full h-[1px] bg-[#070707] mb-3"></div>

              <div className="px-6 space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-3 py-1">
                      <div className="w-10 h-10 rounded-full bg-gray-500 flex-shrink-0 border border-[#5D5D5D]"></div>

                      <div className="flex-1 space-y-2">
                        <div className="inline-block px-2 py-0.5 bg-[#2B2B2B] rounded-[20px]">
                          <span className="text-xs text-[#8F8F8F]">
                            {activity.type}
                          </span>
                        </div>
                        <div className="text-sm text-[#F0F0F0]">
                          {activity.user}
                        </div>
                        <div className="text-xs text-[#8F8F8F] line-clamp-1">
                          {activity.action}
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-1 flex-shrink-0">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.125 12C13.125 12.2225 13.059 12.44 12.9354 12.625C12.8118 12.81 12.6361 12.9542 12.4305 13.0394C12.225 13.1245 11.9988 13.1468 11.7805 13.1034C11.5623 13.06 11.3618 12.9528 11.2045 12.7955C11.0472 12.6382 10.94 12.4377 10.8966 12.2195C10.8532 12.0012 10.8755 11.775 10.9606 11.5695C11.0458 11.3639 11.19 11.1882 11.375 11.0646C11.56 10.941 11.7775 10.875 12 10.875C12.2984 10.875 12.5845 10.9935 12.7955 11.2045C13.0065 11.4155 13.125 11.7016 13.125 12ZM12 6.75C12.2225 6.75 12.44 6.68402 12.625 6.5604C12.81 6.43679 12.9542 6.26109 13.0394 6.05552C13.1245 5.84995 13.1468 5.62375 13.1034 5.40552C13.06 5.1873 12.9528 4.98684 12.7955 4.82951C12.6382 4.67217 12.4377 4.56503 12.2195 4.52162C12.0012 4.47821 11.775 4.50049 11.5695 4.58564C11.3639 4.67078 11.1882 4.81498 11.0646 4.99998C10.941 5.18499 10.875 5.4025 10.875 5.625C10.875 5.92337 10.9935 6.20952 11.2045 6.4205C11.4155 6.63147 11.7016 6.75 12 6.75ZM12 17.25C11.7775 17.25 11.56 17.316 11.375 17.4396C11.19 17.5632 11.0458 17.7389 10.9606 17.9445C10.8755 18.15 10.8532 18.3762 10.8966 18.5945C10.94 18.8127 11.0472 19.0132 11.2045 19.1705C11.3618 19.3278 11.5623 19.435 11.7805 19.4784C11.9988 19.5218 12.225 19.4995 12.4305 19.4144C12.6361 19.3292 12.8118 19.185 12.9354 19C13.059 18.815 13.125 18.5975 13.125 18.375C13.125 18.0766 13.0065 17.7905 12.7955 17.5795C12.5845 17.3685 12.2984 17.25 12 17.25Z"
                            fill="#5D5D5D"
                          />
                        </svg>
                        <span className="text-xs text-[#8F8F8F]">
                          {activity.time}
                        </span>
                      </div>
                    </div>

                    {index < recentActivities.length - 1 && (
                      <div className="w-full h-[1px] bg-[#2B2B2B] my-3"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
