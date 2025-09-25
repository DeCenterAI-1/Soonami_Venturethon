"use server";

import { supabase } from "@/lib/supabase";
import { UserType } from "@/utils/types";

export const getUserByWallet = async (userWallet: string) => {
  try {
    // If the user wallet is present in the supabase database,
    // then return the user, else create a new user and return the user

    console.log("Get user from supabase", userWallet);

    if (!userWallet) throw new Error("No user wallet provided");

    const { data, error } = await supabase
      .from("user_profiles")
      .select("*")
      .eq("wallet", userWallet);

    if (error) throw error;

    if (data && data.length) {
      return {
        success: true,
        data: data[0],
      };
    }

    // Create a new user in the supabase DB
    const newUserObj = {
      wallet: userWallet,
      is_active: true,
      is_admin: false,
    };
    const { data: newUser, error: newUserError } = await supabase
      .from("user_profiles")
      .insert([newUserObj])
      .select("*");

    if (newUserError) throw newUserError;

    return {
      success: true,
      data: newUser[0],
    };
  } catch (error) {
    console.log("Error getting / creating user from Supabase.", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong.",
    };
  }
};

export const updateUser = async (userWallet: string, user: UserType) => {
  try {
    console.log("Update user in supabase", userWallet, user);

    if (!userWallet) throw new Error("No user wallet provided");

    const { data, error } = await supabase
      .from("user_profiles")
      .update(user)
      .eq("wallet", userWallet)
      .select("*");

    if (error) throw error;

    if (!data || !data.length) {
      throw new Error("User not found or update failed");
    }

    return {
      success: true,
      data: data[0],
    };
  } catch (error) {
    console.log("Error updating user in Supabase.", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong.",
    };
  }
};
