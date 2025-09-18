import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function BillingPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* APIs Content */}
        <div className="flex-1 p-8 bg-[#191919]/15">
          <div className="max-w-7xl mx-auto space-y-0">
            {/* Page Header */}
            <div className="bg-[#050505] border border-[#232323] rounded-t-[20px] border-b-0 p-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-normal text-[#F5F5F5]">Billing</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
