"use client";

import { getUserByWallet } from "@/actions/supabase/users";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useActiveAccount } from "thirdweb/react";

interface ChatMessage {
  id: number;
  user_message: string;
  ai_response: string;
  created_at: string;
}

export default function Playground() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);
  const [unrealToken, setUnrealToken] = useState<string | null>(null);

  const userAccount = useActiveAccount();

  // Fetch user ID and unreal_token
  useEffect(() => {
    const fetchUser = async () => {
      if (!userAccount?.address) return;
      const userRes = await getUserByWallet(userAccount.address);
      if (userRes.success && userRes.data) {
        setUserId(userRes.data.id);
        setUnrealToken(userRes.data.unreal_token);
        await fetchChatHistory(userRes.data.id);
      } else {
        toast.error("Failed to fetch user data");
      }
    };
    fetchUser();
  }, [userAccount]);

  // Fetch last 5 chats from Supabase
  const fetchChatHistory = async (userId: number) => {
    try {
      const { data, error } = await supabase
        .from("chat_history")
        .select("*")
        .eq("user", userId)
        .order("created_at", { ascending: false })
        .limit(5);

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      toast.error("Failed to fetch chat history");
    }
  };

  // Save message to Supabase
  const saveMessageToDb = async (userMessage: string, aiResponse: string) => {
    if (!userId) return;
    try {
      const { error } = await supabase.from("chat_history").insert({
        user: userId,
        user_message: userMessage,
        ai_response: aiResponse,
      });
      if (error) throw error;
      await fetchChatHistory(userId); // Refresh history
    } catch (error) {
      toast.error("Failed to save chat history");
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || !unrealToken) {
      toast.error("Invalid input or token");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://openai.unreal.art/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${unrealToken}`,
          },
          body: JSON.stringify({
            model: "unreal::mixtral-8x22b-instruct",
            messages: [{ role: "user", content: input }],
            stream: false,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get response");
      }

      const data = await response.json();
      const aiContent = data.choices[0]?.message?.content || "No response";

      await saveMessageToDb(input, aiContent);
      setInput("");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-[#050505] min-h-screen">
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
                "Send"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
