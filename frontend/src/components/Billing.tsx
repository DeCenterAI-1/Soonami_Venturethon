// Display Dummy data, unused in Venturethon Demo

"use client";

export default function Billing() {
  const creditTransactions = [
    { id: 1, credits: 1000, date: "Aug 18, 2023 at 04:12 pm" },
    { id: 2, credits: 1000, date: "Aug 18, 2023 at 04:12 pm" },
    { id: 3, credits: 1000, date: "Aug 18, 2023 at 04:12 pm" },
    { id: 4, credits: 1000, date: "Aug 18, 2023 at 04:12 pm" },
    { id: 5, credits: 1000, date: "Aug 18, 2023 at 04:12 pm" },
    { id: 6, credits: 1000, date: "Aug 18, 2023 at 04:12 pm" },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "Text generation",
      user: "Mohammed",
      action: 'Assigned you a task on "Speech therapy TXT" team',
      time: "12 Minutes ago",
      avatar: "M",
    },
    {
      id: 2,
      type: "Speech therapy",
      user: "Mohammed",
      action: 'Assigned you a task on "Speech therapy TXT" team',
      time: "12 Minutes ago",
      avatar: "M",
    },
    {
      id: 3,
      type: "Voice recognition",
      user: "Mohammed",
      action: 'Assigned you a task on "Speech therapy TXT" team',
      time: "12 Minutes ago",
      avatar: "M",
    },
    {
      id: 4,
      type: "ChatGPT9",
      user: "Mohammed",
      action: 'Assigned you a task on "Speech therapy TXT" team',
      time: "12 Minutes ago",
      avatar: "M",
    },
    {
      id: 5,
      type: "Crankshaft",
      user: "Mohammed",
      action: 'Assigned you a task on "Speech therapy TXT" team',
      time: "12 Minutes ago",
      avatar: "M",
    },
  ];

  return (
    <div className="flex-1 bg-[#050505] min-h-screen">
      <div className="flex gap-6 p-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-4 bg-[#050505] border border-[#232323] rounded-t-[20px]">
              <h1 className="text-[#F5F5F5] text-2xl font-normal leading-8">
                Billing and Credits
              </h1>
              <button className="flex items-center gap-2 px-6 py-2 bg-transparent border border-[#303030] text-[#C1C1C1] rounded-lg hover:bg-[#191919] transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5307 10.72L12.5307 1.71997C12.4611 1.65023 12.3784 1.59491 12.2873 1.55717C12.1963 1.51943 12.0987 1.5 12.0001 1.5C11.9015 1.5 11.8039 1.51943 11.7129 1.55717C11.6218 1.59491 11.5391 1.65023 11.4695 1.71997L2.46948 10.72C2.36447 10.8249 2.29294 10.9585 2.26396 11.1041C2.23497 11.2497 2.24982 11.4006 2.30664 11.5377C2.36345 11.6748 2.45967 11.792 2.58312 11.8744C2.70656 11.9568 2.85168 12.0007 3.0001 12.0006H6.7501V14.2506C6.7501 14.4495 6.82912 14.6403 6.96977 14.7809C7.11043 14.9216 7.30119 15.0006 7.5001 15.0006H16.5001C16.699 15.0006 16.8898 14.9216 17.0304 14.7809C17.1711 14.6403 17.2501 14.4495 17.2501 14.2506V12.0006H21.0001C21.1485 12.0007 21.2936 11.9568 21.4171 11.8744C21.5405 11.792 21.6368 11.6748 21.6936 11.5377C21.7504 11.4006 21.7652 11.2497 21.7363 11.1041C21.7073 10.9585 21.6357 10.8249 21.5307 10.72Z"
                    fill="#5D5D5D"
                  />
                </svg>
                Top up
              </button>
            </div>

            <div className="px-4 py-2 bg-[#050505] border-x border-b border-[#232323] rounded-b-[20px]">
              <p className="text-[#C1C1C1] text-base font-medium leading-6">
                Credit balance 2453
              </p>
            </div>
          </div>

          {/* Credit Transactions */}
          <div className="space-y-3">
            {creditTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-6 bg-[#050505] border border-[#2B2B2B] rounded-[20px] hover:bg-[#191919]/20 transition-colors"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#F0F0F0] text-base font-normal leading-6">
                    Credit Purchase
                  </h3>
                  <p className="text-[#8F8F8F] text-xs font-medium leading-[18px]">
                    + {transaction.credits} credits
                  </p>
                </div>

                <div className="text-[#5D5D5D] text-sm font-normal leading-5">
                  {transaction.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities Sidebar */}
        <div className="w-[369px] bg-[#191919] rounded-[20px] p-6 h-fit">
          <div className="mb-4">
            <h2 className="text-[#F5F5F5] text-base font-semibold leading-6 mb-4">
              Recent activities
            </h2>
            <div className="w-full h-[1px] bg-[#070707] mb-3"></div>
          </div>

          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={activity.id}>
                <div className="flex items-start gap-3 py-1">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-sm font-medium border border-[#5D5D5D]">
                    {activity.avatar}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="inline-flex items-center px-2 py-1 bg-[#2B2B2B] rounded-[20px] mb-2">
                          <span className="text-[#8F8F8F] text-xs font-medium leading-[18px]">
                            {activity.type}
                          </span>
                        </div>
                        <p className="text-[#F0F0F0] text-sm font-medium leading-5 mb-1">
                          {activity.user}
                        </p>
                        <p className="text-[#8F8F8F] text-xs font-normal leading-[18px] line-clamp-1">
                          {activity.action}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <button className="w-6 h-6 flex items-center justify-center text-[#5D5D5D] hover:text-[#8F8F8F] transition-colors">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.125 12C13.125 12.2225 13.059 12.44 12.9354 12.625C12.8118 12.81 12.6361 12.9542 12.4305 13.0394C12.225 13.1245 11.9988 13.1468 11.7805 13.1034C11.5623 13.06 11.3618 12.9528 11.2045 12.7955C11.0472 12.6382 10.94 12.4377 10.8966 12.2195C10.8532 12.0012 10.8755 11.775 10.9606 11.5695C11.0458 11.3639 11.19 11.1882 11.375 11.0646C11.56 10.941 11.7775 10.875 12 10.875C12.2984 10.875 12.5845 10.9935 12.7955 11.2045C13.0065 11.4155 13.125 11.7016 13.125 12ZM12 6.75C12.2225 6.75 12.44 6.68402 12.625 6.5604C12.81 6.43679 12.9542 6.26109 13.0394 6.05552C13.1245 5.84995 13.1468 5.62375 13.1034 5.40552C13.06 5.1873 12.9528 4.98684 12.7955 4.82951C12.6382 4.67217 12.4377 4.56503 12.2195 4.52162C12.0012 4.47821 11.775 4.50049 11.5695 4.58564C11.3639 4.67078 11.1882 4.81498 11.0646 4.99998C10.941 5.18499 10.875 5.4025 10.875 5.625C10.875 5.92337 10.9935 6.20952 11.2045 6.4205C11.4155 6.63147 11.7016 6.75 12 6.75ZM12 17.25C11.7775 17.25 11.56 17.316 11.375 17.4396C11.19 17.5632 11.0458 17.7389 10.9606 17.9445C10.8755 18.15 10.8532 18.3762 10.8966 18.5945C10.94 18.8127 11.0472 19.0132 11.2045 19.1705C11.3618 19.3278 11.5623 19.435 11.7805 19.4784C11.9988 19.5218 12.225 19.4995 12.4305 19.4144C12.6361 19.3292 12.8118 19.185 12.9354 19C13.059 18.815 13.125 18.5975 13.125 18.375C13.125 18.0766 13.0065 17.7905 12.7955 17.5795C12.5845 17.3685 12.2984 17.25 12 17.25Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                        <span className="text-[#8F8F8F] text-[10px] font-normal leading-[18px]">
                          {activity.time}
                        </span>
                      </div>
                    </div>
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
  );
}
