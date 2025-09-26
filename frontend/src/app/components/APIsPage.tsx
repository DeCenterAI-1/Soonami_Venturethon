"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";
import {
  createUnrealApiKey,
  deleteApiKey,
  getAllUnrealApiKeys,
} from "@/actions/unreal/api";
import { useActiveAccount } from "thirdweb/react";
import { useEffect, useState } from "react";
import { getUserByWallet } from "@/actions/supabase/users";
import {
  getApiKeysByUser,
  syncApiKeysWithUnreal,
} from "@/actions/supabase/api_keys";
import { toast } from "react-toastify";
import { ApiKey } from "@/utils/types";

export default function APIsPage() {
  const userAccount = useActiveAccount();
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [filter, setFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiName, setApiName] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAndSyncApiKeys = async () => {
    if (!userAccount?.address) return;

    setLoading(true);

    try {
      // Get user from Supabase to get userId
      const userRes = await getUserByWallet(userAccount.address);
      if (!userRes.success || !userRes.data.id) {
        throw new Error("Failed to retrieve user ID");
      }
      const userId = userRes.data.id;

      // Fetch Unreal API keys
      const unrealKeysRes = await getAllUnrealApiKeys(userAccount.address);
      if (!unrealKeysRes.success) {
        throw new Error("Failed to fetch Unreal API keys");
      }

      console.log("Unreal Api keys", unrealKeysRes);

      if (unrealKeysRes.data) {
        // Sync with Supabase
        const syncRes = await syncApiKeysWithUnreal(userId, unrealKeysRes.data);
        if (!syncRes.success) {
          throw new Error("Failed to sync API keys with Supabase");
        }

        // Fetch updated API keys from Supabase
        const apiKeysRes = await getApiKeysByUser(userId);
        if (!apiKeysRes.success) {
          throw new Error("Failed to fetch API keys from Supabase");
        }

        setApiKeys(apiKeysRes.data || []);
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "An error occurred while syncing API keys"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateApi = async () => {
    if (!userAccount?.address) {
      toast.error("Please connect your wallet");
      return;
    }

    if (!apiName.trim()) {
      toast.error("API name cannot be blank");
      return;
    }

    try {
      const res = await createUnrealApiKey(userAccount.address, apiName);
      if (res.success) {
        toast.success("API key generated successfully");
        setIsModalOpen(false); // Close modal on success
        setApiName(""); // Reset input

        await new Promise((resolve) => setTimeout(resolve, 2000));
        await fetchAndSyncApiKeys(); // Re-sync to update the table
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to generate API key"
      );
    }
  };

  const handleCopyApiKey = (apiKey: string) => {
    navigator.clipboard.writeText(apiKey);
    toast.success("API key copied to clipboard!");
  };

  const handleRevokeApiKey = async (apiKey: string) => {
    if (!userAccount?.address) {
      toast.error("Please connect your wallet");
      return;
    }

    try {
      const res = await deleteApiKey(apiKey, userAccount.address);
      if (res.success) {
        toast.success("API key revoked successfully");
        // Wait for 3 seconds before refreshing
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await fetchAndSyncApiKeys();
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to revoke API key"
      );
    }
  };

  const filteredApiKeys = apiKeys.filter((key) =>
    key.api_name?.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    fetchAndSyncApiKeys();
  }, [userAccount]);

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
                <h1 className="text-2xl font-normal text-[#F5F5F5]">APIs</h1>

                <div className="flex items-center gap-4">
                  {/* Search Bar */}
                  <div className="flex items-center gap-2 bg-[#191919] rounded-[28px] px-4 py-3 w-80">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.75 17.25C21.75 17.4489 21.671 17.6397 21.5303 17.7803C21.3897 17.921 21.1989 18 21 18H15.0881C14.8094 18.0009 14.5361 17.9237 14.299 17.7773C14.0619 17.6308 13.8705 17.4209 13.7466 17.1713L8.91187 7.50001H3C2.80109 7.50001 2.61032 7.42099 2.46967 7.28034C2.32902 7.13969 2.25 6.94892 2.25 6.75001C2.25 6.5511 2.32902 6.36033 2.46967 6.21968C2.61032 6.07903 2.80109 6.00001 3 6.00001H8.91187C9.19057 5.99912 9.46394 6.07627 9.70104 6.22274C9.93814 6.36921 10.1295 6.57914 10.2534 6.82876L15.0881 16.5H21C21.1989 16.5 21.3897 16.579 21.5303 16.7197C21.671 16.8603 21.75 17.0511 21.75 17.25ZM14.25 7.50001H21C21.1989 7.50001 21.3897 7.42099 21.5303 7.28034C21.671 7.13969 21.75 6.94892 21.75 6.75001C21.75 6.5511 21.671 6.36033 21.5303 6.21968C21.3897 6.07903 21.1989 6.00001 21 6.00001H14.25C14.0511 6.00001 13.8603 6.07903 13.7197 6.21968C13.579 6.36033 13.5 6.5511 13.5 6.75001C13.5 6.94892 13.579 7.13969 13.7197 7.28034C13.8603 7.42099 14.0511 7.50001 14.25 7.50001Z"
                        fill="#5D5D5D"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Filter by name"
                      className="flex-1 bg-transparent text-[#5D5D5D] text-sm placeholder-[#5D5D5D] outline-none"
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                    />
                  </div>

                  {/* Generate API Button */}
                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                    className="bg-[#232323] text-[#F5F5F5] px-6 py-3 rounded-[20px] font-semibold text-base hover:bg-[#2B2B2B] transition-colors"
                  >
                    Generate API
                  </button>

                  {/* Sort Button */}
                  <div className="flex items-center gap-2 py-2 px-6">
                    <button disabled className="cursor-not-allowed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 12C12 12.1989 11.921 12.3897 11.7803 12.5303C11.6397 12.671 11.4489 12.75 11.25 12.75H4.5C4.30109 12.75 4.11032 12.671 3.96967 12.5303C3.82902 12.3897 3.75 12.1989 3.75 12C3.75 11.8011 3.82902 11.6103 3.96967 11.4697C4.11032 11.329 4.30109 11.25 4.5 11.25H11.25C11.4489 11.25 11.6397 11.329 11.7803 11.4697C11.921 11.6103 12 11.8011 12 12ZM4.5 6.75H17.25C17.4489 6.75 17.6397 6.67098 17.7803 6.53033C17.921 6.38968 18 6.19891 18 6C18 5.80109 17.921 5.61032 17.7803 5.46967C17.6397 5.32902 17.4489 5.25 17.25 5.25H4.5C4.30109 5.25 4.11032 5.32902 3.96967 5.46967C3.82902 5.61032 3.75 5.80109 3.75 6C3.75 6.19891 3.82902 6.38968 3.96967 6.53033C4.11032 6.67098 4.30109 6.75 4.5 6.75ZM9.75 17.25H4.5C4.30109 17.25 4.11032 17.329 3.96967 17.4697C3.82902 17.6103 3.75 17.8011 3.75 18C3.75 18.1989 3.82902 18.3897 3.96967 18.5303C4.11032 18.671 4.30109 18.75 4.5 18.75H9.75C9.94891 18.75 10.1397 18.671 10.2803 18.5303C10.421 18.3897 10.5 18.1989 10.5 18C10.5 17.8011 10.421 17.6103 10.2803 17.4697C10.1397 17.329 9.94891 17.25 9.75 17.25ZM21.5306 15.2194C21.461 15.1496 21.3783 15.0943 21.2872 15.0566C21.1962 15.0188 21.0986 14.9994 21 14.9994C20.9014 14.9994 20.8038 15.0188 20.7128 15.0566C20.6217 15.0943 20.539 15.1496 20.4694 15.2194L18 17.6897V10.5C18 10.3011 17.921 10.1103 17.7803 9.96967C17.6397 9.82902 17.4489 9.75 17.25 9.75C17.0511 9.75 16.8603 9.82902 16.7197 9.96967C16.579 10.1103 16.5 10.3011 16.5 10.5V17.6897L14.0306 15.2194C13.8899 15.0786 13.699 14.9996 13.5 14.9996C13.301 14.9996 13.1101 15.0786 12.9694 15.2194C12.8286 15.3601 12.7496 15.551 12.7496 15.75C12.7496 15.949 12.8286 16.1399 12.9694 16.2806L16.7194 20.0306C16.789 20.1004 16.8717 20.1557 16.9628 20.1934C17.0538 20.2312 17.1514 20.2506 17.25 20.2506C17.3486 20.2506 17.4462 20.2312 17.5372 20.1934C17.6283 20.1557 17.711 20.1004 17.7806 20.0306L21.5306 16.2806C21.6004 16.211 21.6557 16.1283 21.6934 16.0372C21.7312 15.9462 21.7506 15.8486 21.7506 15.75C21.7506 15.6514 21.7312 15.5538 21.6934 15.4628C21.6557 15.3717 21.6004 15.289 21.5306 15.2194Z"
                          fill="#5D5D5D"
                        />
                      </svg>
                    </button>
                    <span className="text-[#C1C1C1] text-base">Sort</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub Header */}
            <div className="bg-[#050505] border border-[#232323] border-t-0 border-b-0 px-6 py-2">
              <span className="text-[#C1C1C1] text-base font-medium">
                Total APIs {apiKeys.length}
              </span>
            </div>

            {/* APIs List Container */}
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              <div className="bg-[#080808] border border-[#191919] rounded-b-[20px] p-6">
                <div className="space-y-4">
                  {filteredApiKeys.map((key) => (
                    <div
                      key={key.id}
                      className="bg-transparent border border-[#232323] rounded-[20px] p-4"
                    >
                      <div className="flex items-center justify-between">
                        {/* API Info */}
                        <div className="flex items-center gap-12">
                          <div className="w-44">
                            <span className="text-[#C1C1C1] text-sm font-medium line-clamp-1">
                              {key.api_name}
                            </span>
                          </div>

                          <div className="w-56">
                            <span className="text-[#8F8F8F] text-xs font-medium">
                              Created:{" "}
                              {key.created_at
                                ? new Date(key.created_at).toLocaleDateString()
                                : ""}
                            </span>
                          </div>

                          <div className="w-28">
                            <span className="text-[#8F8F8F] text-xs font-medium">
                              Chain Id: {key.chain_id}
                            </span>
                          </div>

                          <div className="w-28 text-center">
                            <span className="text-[#8F8F8F] text-xs font-medium">
                              Calls: {key.calls}
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3">
                          {/* Copy Button */}
                          <button
                            onClick={() => handleCopyApiKey(key.api_key)}
                            className="flex items-center gap-2 bg-[#232323] px-4 py-2 rounded-[20px] hover:bg-[#2B2B2B] transition-colors"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 17 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.5 4.5V13.5C12.5 13.6326 12.4473 13.7598 12.3536 13.8536C12.2598 13.9473 12.1326 14 12 14H3C2.86739 14 2.74021 13.9473 2.64645 13.8536C2.55268 13.7598 2.5 13.6326 2.5 13.5V4.5C2.5 4.36739 2.55268 4.24021 2.64645 4.14645C2.74021 4.05268 2.86739 4 3 4H12C12.1326 4 12.2598 4.05268 12.3536 4.14645C12.4473 4.24021 12.5 4.36739 12.5 4.5ZM14 2H5C4.86739 2 4.74021 2.05268 4.64645 2.14645C4.55268 2.24021 4.5 2.36739 4.5 2.5C4.5 2.63261 4.55268 2.75979 4.64645 2.85355C4.74021 2.94732 4.86739 3 5 3H13.5V11.5C13.5 11.6326 13.5527 11.7598 13.6464 11.8536C13.7402 11.9473 13.8674 12 14 12C14.1326 12 14.2598 11.9473 14.3536 11.8536C14.4473 11.7598 14.5 11.6326 14.5 11.5V2.5C14.5 2.36739 14.4473 2.24021 14.3536 2.14645C14.2598 2.05268 14.1326 2 14 2Z"
                                fill="#5D5D5D"
                              />
                            </svg>
                            <span className="text-[#F5F5F5] text-sm font-semibold">
                              Copy
                            </span>
                          </button>

                          {/* Revoke Button */}
                          <button
                            onClick={() => handleRevokeApiKey(key.api_key)}
                            className="flex items-center gap-2 bg-[#232323] px-4 py-2 rounded-[20px] hover:bg-[#2B2B2B] transition-colors"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.5 4.5H8.16625L6.4325 3.2C6.25975 3.07043 6.04969 3.00027 5.83375 3H2.5C2.23478 3 1.98043 3.10536 1.79289 3.29289C1.60536 3.48043 1.5 3.73478 1.5 4V12.5C1.5 12.7652 1.60536 13.0196 1.79289 13.2071C1.98043 13.3946 2.23478 13.5 2.5 13.5H13.5C13.7652 13.5 14.0196 13.3946 14.2071 13.2071C14.3946 13.0196 14.5 12.7652 14.5 12.5V5.5C14.5 5.23478 14.3946 4.98043 14.2071 4.79289C14.0196 4.60536 13.7652 4.5 13.5 4.5ZM2.5 6V4H5.83375L7.16687 5L5.83313 6H2.5ZM9.5 10H6.5C6.36739 10 6.24021 9.94732 6.14645 9.85355C6.05268 9.75979 6 9.63261 6 9.5C6 9.36739 6.05268 9.24021 6.14645 9.14645C6.24021 9.05268 6.36739 9 6.5 9H9.5C9.63261 9 9.75979 9.05268 9.85355 9.14645C9.94732 9.24021 10 9.36739 10 9.5C10 9.63261 9.94732 9.75979 9.85355 9.85355C9.75979 9.94732 9.63261 10 9.5 10Z"
                                fill="#5D5D5D"
                              />
                            </svg>
                            <span className="text-[#F5F5F5] text-sm font-semibold">
                              Revoke
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scrollbar - Optional visual element */}
                <div className="flex justify-end mt-6">
                  <div className="w-4 bg-[#191919] rounded-[20px] p-1">
                    <div className="w-2 h-16 bg-[#494949] rounded-lg"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal for Generating API Key */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#080808] border border-[#232323] rounded-[20px] p-6 w-96">
              <h2 className="text-xl font-normal text-[#F5F5F5] mb-4">
                Generate API Key
              </h2>
              <input
                type="text"
                value={apiName}
                onChange={(e) => setApiName(e.target.value)}
                placeholder="Enter API name"
                className="w-full bg-[#191919] text-[#5D5D5D] px-4 py-2 rounded-[20px] mb-4 outline-none"
              />
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setApiName("");
                  }}
                  className="bg-[#232323] text-[#F5F5F5] px-6 py-2 rounded-[20px] hover:bg-[#2B2B2B] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleGenerateApi}
                  className="bg-[#232323] text-[#F5F5F5] px-6 py-2 rounded-[20px] font-semibold hover:bg-[#2B2B2B] transition-colors"
                >
                  Generate API Key
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
