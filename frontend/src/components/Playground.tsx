"use client";

import { getUserByWallet } from "@/actions/supabase/users";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useActiveAccount } from "thirdweb/react";
import { models } from "@/utils/models";
import TokenInvalidMessage from "./messages/TokenInvalidMessage";
import { verifyUnrealAccessToken } from "@/actions/unreal/auth";
import Spinner from "./ui/Spinner";
import {
  deleteAllChatHistory,
  fetchChatHistory,
  saveChatMessage,
} from "@/actions/supabase/chat_history";
import { getChatCompletion } from "@/actions/unreal/chat";
import { getApiKeysByUser } from "@/actions/supabase/api_keys";
import BinIcon from "./ui/BinIcon";

interface ChatMessage {
  id: number;
  user_message: string;
  ai_response: string;
  created_at: string;
}

interface ApiKey {
  id: number;
  api_name: string;
  api_key: string;
}

export default function Playground() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);
  const [unrealToken, setUnrealToken] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState("mixtral-8x22b-instruct"); // Default model
  const [isUnrealTokenValid, setIsUnrealTokenValid] = useState(true);
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [selectedApiKey, setSelectedApiKey] = useState<string>("");

  const chatEndRef = useRef<HTMLDivElement>(null); // Ref for auto-scroll

  const userAccount = useActiveAccount();

  // Fetch user ID and unreal_token
  const fetchUser = async () => {
    if (!userAccount?.address) return;
    const userRes = await getUserByWallet(userAccount.address);
    if (userRes.success && userRes.data) {
      const unrealToken = userRes.data.unreal_token;

      if (unrealToken) {
        // Verify token
        const verifyRes = await verifyUnrealAccessToken(unrealToken);
        setIsUnrealTokenValid(verifyRes.success);
      } else {
        setIsUnrealTokenValid(false);
      }
      setUserId(userRes.data.id);
      setUnrealToken(userRes.data.unreal_token);

      // Fetch last 5 chat history
      await fetchChatHistory(userRes.data.id, 5).then((data) =>
        setMessages(data)
      );

      // Fetch API keys
      await fetchApiKeys(userRes.data.id);
    } else {
      toast.error("Failed to fetch user data");
    }
  };

  // Fetch user's API keys
  const fetchApiKeys = async (userId: number) => {
    try {
      const apiKeysRes = await getApiKeysByUser(userId);
      if (apiKeysRes.success) {
        if (apiKeysRes.data && apiKeysRes.data.length > 0) {
          setApiKeys(apiKeysRes.data);
          setSelectedApiKey(apiKeysRes.data[0].api_key); // Default to first API key
        } else {
          setSelectedApiKey(unrealToken || ""); // Fallback to unrealToken if no API keys
        }
      } else {
        throw new Error("Failed to fetch API keys");
      }
    } catch (error) {
      console.error("Error fetching API keys", error);
      toast.error("Failed to fetch API keys");
    }
  };

  // Send message to get completion from Unreal API
  const handleSendMessage = async () => {
    if (!input.trim() || !selectedApiKey) {
      toast.error("Invalid input or API key / access token");
      return;
    }

    setLoading(true);
    try {
      console.log(
        `Get chat completion with model: ${selectedModel}, input: ${input}`
      );

      const data = await getChatCompletion(
        selectedApiKey,
        selectedModel,
        input
      );

      const aiContent = data.choices[0]?.message?.content || "No response";
      const responseModel = data.model || selectedModel;
      const responseObject = data.object || "chat.completion";

      await saveChatMessage(
        userId!,
        input,
        aiContent,
        responseModel,
        responseObject
      );
      setInput("");

      // Fetch last 5 chat history
      await fetchChatHistory(userId!, 5).then((data) => setMessages(data));
    } catch (error) {
      console.error("Error chat completion", error);
      toast.error(
        error instanceof Error ? error.message : "Failed Chat Completion"
      );
    } finally {
      setLoading(false);
    }
  };

  // Delete all user's chat history
  const handleClear = async () => {
    setLoading(true);
    try {
      await deleteAllChatHistory(userId!);
    } catch (error) {
      console.error("Error clear chat history", error);
      toast.error(
        error instanceof Error ? error.message : "Failed Clear Chat History"
      );
    } finally {
      // Fetch last 5 chat history
      await fetchChatHistory(userId!, 5).then((data) => setMessages(data));
      setLoading(false);
    }
  };

  // Fetch user ID and unreal_token on page load
  useEffect(() => {
    fetchUser();
  }, [userAccount]);

  // Auto-scroll to the bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 bg-[#050505] min-h-screen">
      {!isUnrealTokenValid && <TokenInvalidMessage />}

      <div className="flex gap-6 p-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-4 bg-[#050505] border border-[#232323] rounded-t-[20px]">
              <h1 className="text-[#F5F5F5] text-2xl font-normal leading-8">
                Playground
              </h1>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              {/* Model Selection */}
              <div className="flex mb-4 gap-4">
                <p className="text-[#F5F5F5] my-auto">Model: </p>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="h-14 px-4 bg-transparent border border-[#232323] rounded-[20px] text-[#8F8F8F] text-sm focus:border-[#494949] focus:outline-none"
                >
                  {models.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.id}
                    </option>
                  ))}
                </select>
              </div>

              {/* API Key Selection */}
              <div className="flex mb-4 gap-4">
                <p className="text-[#F5F5F5] my-auto">API Key: </p>
                <select
                  value={selectedApiKey}
                  onChange={(e) => setSelectedApiKey(e.target.value)}
                  className="h-14 px-4 bg-transparent border border-[#232323] rounded-[20px] text-[#8F8F8F] text-sm focus:border-[#494949] focus:outline-none"
                >
                  {apiKeys.length === 0 ? (
                    <option value={unrealToken || ""}>Your access token</option>
                  ) : (
                    apiKeys.map((key) => (
                      <option key={key.id} value={key.api_key}>
                        {key.api_name}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>

            <div className="flex mb-4 gap-4">
              <button
                onClick={handleClear}
                className="flex p-2 bg-transparent border border-[#232323] rounded-[20px]"
              >
                <BinIcon />
                <span className="px-2 text-[#C1C1C1] text-base">Clear</span>
              </button>
            </div>
          </div>

          {/* Chat History */}
          <div className="flex flex-col gap-4 mb-6 p-4 bg-[#191919] border border-[#232323] rounded-[20px] h-96 overflow-y-auto">
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-2">
                <div className="p-3 bg-[#232323] rounded-[20px] text-[#F5F5F5]">
                  <strong>User:</strong> {msg.user_message}
                </div>
                <div className="p-3 bg-[#2B2B2B] rounded-[20px] text-[#F5F5F5]">
                  <strong>AI:</strong> {msg.ai_response}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input and Submit */}
          <div className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 h-14 px-4 bg-transparent border border-[#232323] rounded-[20px] text-[#8F8F8F] text-sm focus:border-[#494949] focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              disabled={loading}
              className="px-6 py-3 bg-[#232323] rounded-[20px] text-[#F5F5F5] text-base font-semibold hover:bg-[#2B2B2B] transition-colors disabled:opacity-50"
            >
              {loading ? <Spinner /> : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
