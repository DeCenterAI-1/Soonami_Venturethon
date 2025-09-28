"use server";

const unrealApiUrl = process.env.UNREAL_API_URL!;

export const registerUnrealApiAccess = async (
  messagePayload: string,
  walletAddress: string,
  signature: string
) => {
  try {
    // TODO Prepare permit payload
    // TODO get permit signature
    // TODO add permit and permit signature to Unreal registration payload

    // Prepare payload as per Unreal AI API (adapt types/values as needed)
    const payload = JSON.parse(messagePayload);

    // Prepare body
    const body = JSON.stringify({
      payload,
      signature,
      address: walletAddress,
    });

    console.log("Unreal registration body", body);

    // Send to Unreal AI API
    const response = await fetch("https://openai.unreal.art/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Unreal registration error", errorData);
      throw new Error(errorData.error || "Unreal Registration failed");
    }

    const data = await response.json();

    console.log("Unreal registration data", data);

    const unrealToken = data.token;
    return {
      success: true,
      unrealToken,
    };
  } catch (error) {
    console.log("Error register Unreal API", error);
    return {
      success: false,
      error,
    };
  }
};

export const verifyUnrealAccessToken = async (accessToken: string) => {
  try {
    const response = await fetch(
      `${unrealApiUrl}/v1/auth/verify?token=${accessToken}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, message: errorData.error || "Invalid token" };
    }

    const data = await response.json();

    console.log("Verify Access Token response", data);

    return { success: true, data };
  } catch (error) {
    console.error("Error verifying Unreal access token:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to verify token",
    };
  }
};
