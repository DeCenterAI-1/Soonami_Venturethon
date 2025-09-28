"use server";

import { unrealApiUrl } from "@/utils/config";
import { ChatCompletionResponse } from "@/utils/types";

// Create a completion for a chat message via Unreal chat API
export const getChatCompletion = async (
  token: string,
  model: string,
  message: string
): Promise<ChatCompletionResponse> => {
  try {
    const response = await fetch(`${unrealApiUrl}/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        model: `unreal::${model}`,
        messages: [{ role: "user", content: message }],
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to get chat completion");
    }

    const data = await response.json();
    console.log("Chat completion response data", data);
    return data;
  } catch (error) {
    console.error("Error getting chat completion:", error);
    throw new Error(
      error instanceof Error ? error.message : "Chat completion failed"
    );
  }
};
