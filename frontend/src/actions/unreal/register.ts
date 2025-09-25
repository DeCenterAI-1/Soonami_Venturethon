"use server";

export const registerUnrealApiAccess = async (
  messagePayload: string,
  walletAddress: string,
  signature: string
) => {
  try {
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
      console.log(
        "Unreal registration error",
        errorData?.error,
        errorData?.detail
      );
      throw new Error(errorData.error || "Registration failed");
    }

    const data = await response.json();

    console.log("Unreal registration data", data);

    if (data.error) throw new Error(data.error);

    const unrealToken = data.token;
    return {
      success: true,
      unrealToken,
    };
  } catch (error) {
    console.log(
      "Error register Unreal API",
      error instanceof Error ? error.message : "Something went wrong"
    );
    return {
      success: false,
      error,
    };
  }
};
