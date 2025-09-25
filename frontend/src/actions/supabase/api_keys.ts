"use server";

import { supabase } from "@/lib/supabase";
import { UnrealApiKey } from "@/utils/types";

export const syncApiKeysWithUnreal = async (
  userId: number,
  unrealApiKeys: UnrealApiKey[]
) => {
  try {
    console.log("syncApiKeysWithUnreal", userId, unrealApiKeys);

    if (!userId || !unrealApiKeys?.length) {
      throw new Error("User ID and Unreal API keys are required");
    }

    for (const keyData of unrealApiKeys) {
      const { hash, key, name, calls, paymentToken, chainId } = keyData;
      if (!hash) continue;

      const { data: existingKey, error: fetchError } = await supabase
        .from("api_keys")
        .select("id")
        .eq("api_hash", hash)
        .eq("user", userId)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") {
        throw fetchError;
      }

      if (existingKey) {
        // Update existing key
        const { error: updateError } = await supabase
          .from("api_keys")
          .update({
            calls,
            // api_key: key,
            // api_name: name,
            // payment_token: paymentToken,
            chain_id: chainId,
            last_used: new Date().toISOString(), // Update last_used on sync
          })
          .eq("id", existingKey.id);
        if (updateError) throw updateError;
      } else {
        // Insert new key
        const { error: insertError } = await supabase.from("api_keys").insert({
          user: userId,
          provider: "unreal",
          api_key: key,
          api_hash: hash,
          api_name: name,
          payment_token: paymentToken,
          calls,
          chain_id: chainId,
          last_used: new Date().toISOString(),
        });
        if (insertError) throw insertError;
      }
    }

    return { success: true };
  } catch (error) {
    console.error(
      "Error syncing API keys:",
      error instanceof Error ? error.message : error
    );
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to sync API keys",
    };
  }
};

export const getApiKeysByUser = async (userId: number) => {
  try {
    if (!userId) {
      throw new Error("User ID is required");
    }

    const { data, error } = await supabase
      .from("api_keys")
      .select("*")
      .eq("user", userId)
      .eq("provider", "unreal");

    if (error) throw error;

    return {
      success: true,
      data: data || [],
    };
  } catch (error) {
    console.error(
      "Error fetching API keys:",
      error instanceof Error ? error.message : error
    );
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to fetch API keys",
    };
  }
};
