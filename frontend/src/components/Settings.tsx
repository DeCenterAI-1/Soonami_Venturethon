"use client";

import { getUserByWallet, updateUserProfile } from "@/actions/supabase/users";
import { imageFileToObjectUrl } from "@/utils/files";
import { validateEmail } from "@/utils/validation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useActiveAccount } from "thirdweb/react";

export default function Settings() {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [formData, setFormData] = useState({
    firstname: null as string | null,
    lastname: null as string | null,
    username: null as string | null,
    email: null as string | null,
    bio: null as string | null,
    profile_image: null as string | File | null,
  });
  const [initialFormData, setInitialFormData] = useState({
    firstname: null as string | null,
    lastname: null as string | null,
    username: null as string | null,
    email: null as string | null,
    bio: null as string | null,
    profile_image: null as string | File | null,
  });

  const userAccount = useActiveAccount();

  const settingsOptions = [
    {
      id: "profile",
      title: "Profile",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6484 19.8756C20.2206 17.4072 18.0203 15.6372 15.4525 14.7981C16.7226 14.042 17.7094 12.8898 18.2614 11.5185C18.8134 10.1473 18.8999 8.63272 18.5078 7.20749C18.1157 5.78226 17.2666 4.52515 16.0909 3.62921C14.9151 2.73327 13.4778 2.24805 11.9996 2.24805C10.5215 2.24805 9.08414 2.73327 7.90842 3.62921C6.73269 4.52515 5.88358 5.78226 5.49146 7.20749C5.09935 8.63272 5.18592 10.1473 5.73788 11.5185C6.28984 12.8898 7.27668 14.042 8.54683 14.7981C5.97902 15.6362 3.77871 17.4062 2.35089 19.8756C2.29853 19.961 2.2638 20.056 2.24875 20.155C2.2337 20.254 2.23863 20.355 2.26326 20.4521C2.28789 20.5492 2.33171 20.6404 2.39214 20.7202C2.45257 20.8001 2.52838 20.867 2.6151 20.9171C2.70183 20.9672 2.79771 20.9995 2.89709 21.0119C2.99647 21.0243 3.09733 21.0167 3.19373 20.9896C3.29012 20.9624 3.3801 20.9162 3.45835 20.8537C3.5366 20.7912 3.60154 20.7136 3.64933 20.6256C5.41558 17.5731 8.53746 15.7506 11.9996 15.7506C15.4618 15.7506 18.5837 17.5731 20.35 20.6256C20.3977 20.7136 20.4627 20.7912 20.5409 20.8537C20.6192 20.9162 20.7092 20.9624 20.8056 20.9896C20.902 21.0167 21.0028 21.0243 21.1022 21.0119C21.2016 20.9995 21.2975 20.9672 21.3842 20.9171C21.4709 20.867 21.5467 20.8001 21.6072 20.7202C21.6676 20.6404 21.7114 20.5492 21.736 20.4521C21.7607 20.355 21.7656 20.254 21.7505 20.155C21.7355 20.056 21.7008 19.961 21.6484 19.8756ZM6.74964 9.0006C6.74964 7.96225 7.05755 6.94721 7.63443 6.08385C8.21131 5.2205 9.03124 4.54759 9.99056 4.15023C10.9499 3.75287 12.0055 3.6489 13.0239 3.85147C14.0423 4.05405 14.9777 4.55406 15.712 5.28829C16.4462 6.02251 16.9462 6.95797 17.1488 7.97637C17.3513 8.99477 17.2474 10.0504 16.85 11.0097C16.4527 11.969 15.7797 12.7889 14.9164 13.3658C14.053 13.9427 13.038 14.2506 11.9996 14.2506C10.6077 14.2491 9.27322 13.6955 8.28898 12.7113C7.30473 11.727 6.75113 10.3925 6.74964 9.0006Z"
            fill="#5D5D5D"
          />
        </svg>
      ),
      onClick: () => setShowEditProfile(true),
    },
    {
      id: "security",
      title: "Security",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 7.5H16.5V5.25C16.5 4.05653 16.0259 2.91193 15.182 2.06802C14.3381 1.22411 13.1935 0.75 12 0.75C10.8065 0.75 9.66193 1.22411 8.81802 2.06802C7.97411 2.91193 7.5 4.05653 7.5 5.25V7.5H4.5C4.10218 7.5 3.72064 7.65804 3.43934 7.93934C3.15804 8.22064 3 8.60218 3 9V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V9C21 8.60218 20.842 8.22064 20.5607 7.93934C20.2794 7.65804 19.8978 7.5 19.5 7.5ZM9 5.25C9 4.45435 9.31607 3.69129 9.87868 3.12868C10.4413 2.56607 11.2044 2.25 12 2.25C12.7956 2.25 13.5587 2.56607 14.1213 3.12868C14.6839 3.69129 15 4.45435 15 5.25V7.5H9V5.25ZM19.5 19.5H4.5V9H19.5V19.5ZM13.125 14.25C13.125 14.4725 13.059 14.69 12.9354 14.875C12.8118 15.06 12.6361 15.2042 12.4305 15.2894C12.225 15.3745 11.9988 15.3968 11.7805 15.3534C11.5623 15.31 11.3618 15.2028 11.2045 15.0455C11.0472 14.8882 10.94 14.6877 10.8966 14.4695C10.8532 14.2512 10.8755 14.025 10.9606 13.8195C11.0458 13.6139 11.19 13.4382 11.375 13.3146C11.56 13.191 11.7775 13.125 12 13.125C12.2984 13.125 12.5845 13.2435 12.7955 13.4545C13.0065 13.6655 13.125 13.9516 13.125 14.25Z"
            fill="#5D5D5D"
          />
        </svg>
      ),
      onClick: () => {},
    },
    {
      id: "notification",
      title: "Notification",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.7936 16.4944C20.2733 15.5981 19.4999 13.0622 19.4999 9.75C19.4999 7.76088 18.7097 5.85322 17.3032 4.4467C15.8967 3.04018 13.989 2.25 11.9999 2.25C10.0108 2.25 8.10311 3.04018 6.69659 4.4467C5.29007 5.85322 4.49989 7.76088 4.49989 9.75C4.49989 13.0631 3.72551 15.5981 3.2052 16.4944C3.07233 16.7222 3.00189 16.9811 3.00099 17.2449C3.00008 17.5086 3.06874 17.768 3.20005 17.9967C3.33135 18.2255 3.52065 18.4156 3.74886 18.5478C3.97708 18.6801 4.23613 18.7498 4.49989 18.75H8.32583C8.49886 19.5967 8.95904 20.3577 9.62851 20.9042C10.298 21.4507 11.1357 21.7492 11.9999 21.7492C12.8641 21.7492 13.7018 21.4507 14.3713 20.9042C15.0407 20.3577 15.5009 19.5967 15.674 18.75H19.4999C19.7636 18.7496 20.0225 18.6798 20.2506 18.5475C20.4787 18.4151 20.6678 18.225 20.799 17.9963C20.9302 17.7676 20.9988 17.5083 20.9979 17.2446C20.9969 16.9809 20.9265 16.7222 20.7936 16.4944ZM11.9999 20.25C11.5347 20.2499 11.081 20.1055 10.7013 19.8369C10.3215 19.5683 10.0343 19.1886 9.87926 18.75H14.1205C13.9655 19.1886 13.6783 19.5683 13.2985 19.8369C12.9187 20.1055 12.4651 20.2499 11.9999 20.25ZM4.49989 17.25C5.22176 16.0087 5.99989 13.1325 5.99989 9.75C5.99989 8.1587 6.63203 6.63258 7.75725 5.50736C8.88247 4.38214 10.4086 3.75 11.9999 3.75C13.5912 3.75 15.1173 4.38214 16.2425 5.50736C17.3677 6.63258 17.9999 8.1587 17.9999 9.75C17.9999 13.1297 18.7761 16.0059 19.4999 17.25H4.49989Z"
            fill="#5D5D5D"
          />
        </svg>
      ),
      onClick: () => {},
    },
  ];

  // Submit user profile form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userAccount) return;

    if (formData.email && !validateEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const cleanedData = {
      firstname: formData.firstname || null,
      lastname: formData.lastname || null,
      username: formData.username || null,
      email: formData.email || null,
      bio: formData.bio || null,
      profile_image: formData.profile_image,
    };

    try {
      const result = await updateUserProfile(userAccount?.address, cleanedData);
      if (result.success) {
        toast.success("Profile updated successfully");
        setShowEditProfile(false);

        // Refetch to ensure latest data
        const userRes = await getUserByWallet(userAccount.address);
        if (userRes.success && userRes.data) {
          const { firstname, lastname, username, email, bio, profile_image } =
            userRes.data;
          setFormData({
            firstname,
            lastname,
            username,
            email,
            bio,
            profile_image,
          });
          setInitialFormData({
            firstname,
            lastname,
            username,
            email,
            bio,
            profile_image,
          });
        }
      } else {
        throw new Error(result.message || "Failed to update profile");
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "An error occurred while updating profile"
      );
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileExt = file.name.split(".").pop()?.toLowerCase() || "";
      const fileSizeMB = file.size / (1024 * 1024);
      const allowedTypes = ["jpg", "jpeg", "png", "gif"];

      if (!allowedTypes.includes(fileExt)) {
        toast.error("Only image files (jpg, jpeg, png, gif) are allowed");
        return;
      }

      if (fileSizeMB > 1) {
        toast.error("Image size must not exceed 1 MB");
        return;
      }

      setFormData({ ...formData, profile_image: file });
    }
  };

  const handleCancel = async () => {
    if (!userAccount) return;
    const userRes = await getUserByWallet(userAccount.address);
    if (userRes.success && userRes.data) {
      const { firstname, lastname, username, email, bio, profile_image } =
        userRes.data;
      setFormData({ firstname, lastname, username, email, bio, profile_image });
    }
    setShowEditProfile(false);
  };

  const fetchUserProfile = async () => {
    if (!userAccount) return;
    const userRes = await getUserByWallet(userAccount.address);
    if (userRes.success && userRes.data) {
      const { firstname, lastname, username, email, bio, profile_image } =
        userRes.data;
      setFormData({ firstname, lastname, username, email, bio, profile_image });
      setInitialFormData({
        firstname,
        lastname,
        username,
        email,
        bio,
        profile_image,
      });
    } else {
      toast.error(userRes.message || "Failed to fetch user profile");
    }
  };

  // Cleanup object URL on unmount or image change
  useEffect(() => {
    return () => {
      if (formData.profile_image instanceof File) {
        URL.revokeObjectURL(imageFileToObjectUrl(formData.profile_image));
      }
    };
  }, [formData.profile_image]);

  // Fetch initial form data from user_profiles
  useEffect(() => {
    fetchUserProfile();
  }, [userAccount]);

  return (
    <div className="flex-1 bg-[#050505] min-h-screen">
      {/* Main Content Area */}
      <div className="p-8 bg-[rgba(25,25,25,0.15)] min-h-full">
        <div className="flex justify-between items-start">
          {/* Settings Options */}
          <div className="flex flex-col gap-6 w-full">
            {settingsOptions.map((option) => (
              <div
                key={option.id}
                className="flex items-center gap-6 p-6 bg-[#050505] border border-[#232323] rounded-2xl cursor-pointer hover:bg-[#191919]/20 transition-colors"
                onClick={option.onClick}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {option.icon}
                </div>
                <h3 className="flex-1 text-[#DADADA] text-xl font-medium leading-6">
                  {option.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Log Out Button */}
          {/* <button className="flex items-center gap-2 px-6 py-3 bg-[#232323] rounded-2xl text-[#F5F5F5] text-base font-semibold leading-6 hover:bg-[#2B2B2B] transition-colors">
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 20.25C11 20.4489 10.921 20.6397 10.7803 20.7803C10.6397 20.921 10.4489 21 10.25 21H5C4.60218 21 4.22064 20.842 3.93934 20.5607C3.65804 20.2794 3.5 19.8978 3.5 19.5V4.5C3.5 4.10218 3.65804 3.72064 3.93934 3.43934C4.22064 3.15804 4.60218 3 5 3H10.25C10.4489 3 10.6397 3.07902 10.7803 3.21967C10.921 3.36032 11 3.55109 11 3.75C11 3.94891 10.921 4.13968 10.7803 4.28033C10.6397 4.42098 10.4489 4.5 10.25 4.5H5V19.5H10.25C10.4489 19.5 10.6397 19.579 10.7803 19.7197C10.921 19.8603 11 20.0511 11 20.25ZM21.2806 11.4694L17.5306 7.71937C17.3899 7.57864 17.199 7.49958 17 7.49958C16.801 7.49958 16.6101 7.57864 16.4694 7.71937C16.3286 7.86011 16.2496 8.05098 16.2496 8.25C16.2496 8.44902 16.3286 8.63989 16.4694 8.78063L18.9397 11.25H10.25C10.0511 11.25 9.86032 11.329 9.71967 11.4697C9.57902 11.6103 9.5 11.8011 9.5 12C9.5 12.1989 9.57902 12.3897 9.71967 12.5303C9.86032 12.671 10.0511 12.75 10.25 12.75H18.9397L16.4694 15.2194C16.3286 15.3601 16.2496 15.551 16.2496 15.75C16.2496 15.949 16.3286 16.1399 16.4694 16.2806C16.6101 16.4214 16.801 16.5004 17 16.5004C17.199 16.5004 17.3899 16.4214 17.5306 16.2806L21.2806 12.5306C21.3504 12.461 21.4057 12.3783 21.4434 12.2872C21.4812 12.1962 21.5006 12.0986 21.5006 12C21.5006 11.9014 21.4812 11.8038 21.4434 11.7128C21.4057 11.6217 21.3504 11.539 21.2806 11.4694Z" fill="#C1C1C1"/>
            </svg>
            Log Out
          </button> */}
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <div className="fixed inset-0 bg-[rgba(5,5,5,0.5)] backdrop-blur-sm flex items-center justify-center z-50 overflow-auto">
          <div className="w-full max-w-lg sm:mx-4 bg-[#191919] border border-[#232323] rounded-2xl p-6 sm:p-8 shadow-lg">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[#F5F5F5] text-xl sm:text-2xl font-bold">
                Edit Profile
              </h2>
              <button
                onClick={() => setShowEditProfile(false)}
                className="p-2.5 hover:bg-[#2B2B2B] rounded-lg transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.75 5.25L5.25 18.75M5.25 5.25L18.75 18.75"
                    stroke="#8F8F8F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Profile Form */}
            <div className="flex flex-col gap-9">
              {/* Profile Picture */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-[120px] h-[120px] rounded-full border-[1.5px] border-[#494949] bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-4xl font-medium">
                    {formData.profile_image ? (
                      <img
                        src={
                          formData.profile_image instanceof File
                            ? imageFileToObjectUrl(formData.profile_image)
                            : formData.profile_image
                        }
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-white text-4xl font-medium">?</span>
                    )}
                  </div>
                  <label className="absolute bottom-1 right-1 w-8 h-8 bg-[#2B2B2B] border border-[#191919] rounded-full flex items-center justify-center hover:bg-[#494949] transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/gif"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 4H11.2675L10.4156 2.7225C10.37 2.65409 10.3082 2.598 10.2357 2.55919C10.1632 2.52038 10.0822 2.50005 10 2.5H6C5.91777 2.50005 5.83682 2.52038 5.76432 2.55919C5.69182 2.598 5.63001 2.65409 5.58437 2.7225L4.73187 4H3C2.60218 4 2.22064 4.15804 1.93934 4.43934C1.65804 4.72064 1.5 5.10218 1.5 5.5V12.5C1.5 12.8978 1.65804 13.2794 1.93934 13.5607C2.22064 13.842 2.60218 14 3 14H13C13.3978 14 13.7794 13.842 14.0607 13.5607C14.342 13.2794 14.5 12.8978 14.5 12.5V5.5C14.5 5.10218 14.342 4.72064 14.0607 4.43934C13.7794 4.15804 13.3978 4 13 4Z"
                        fill="#8F8F8F"
                      />
                    </svg>
                  </label>
                </div>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-6">
                {/* Name Fields Row */}
                <div className="flex gap-6">
                  <div className="flex-1">
                    <label className="block text-[#5D5D5D] text-sm font-bold leading-5 mb-1">
                      First name
                    </label>
                    <input
                      type="text"
                      value={formData.firstname || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, firstname: e.target.value })
                      }
                      className="w-full h-14 px-4 bg-transparent border border-[#232323] rounded-2xl text-[#8F8F8F] text-sm leading-5 focus:border-[#2B2B2B] focus:outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[#5D5D5D] text-sm font-bold leading-5 mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      value={formData.lastname || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, lastname: e.target.value })
                      }
                      className="w-full h-14 px-4 bg-transparent border border-[#232323] rounded-2xl text-[#8F8F8F] text-sm leading-5 focus:border-[#2B2B2B] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Username Field */}
                <div>
                  <label className="block text-[#FDFDFD] text-sm font-medium leading-5 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    value={formData.username || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    placeholder="Username (optional)"
                    className="w-full h-14 px-4 bg-transparent border border-[#2B2B2B] rounded-2xl text-[#8F8F8F] text-sm leading-5 focus:border-[#494949] focus:outline-none"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-[#5D5D5D] text-sm font-bold leading-5 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={formData.email || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-14 px-4 bg-transparent border border-[#232323] rounded-2xl text-[#8F8F8F] text-sm leading-5 focus:border-[#2B2B2B] focus:outline-none"
                  />
                </div>

                {/* Bio Field */}
                <div>
                  <label className="block text-[#FDFDFD] text-sm font-medium leading-5 mb-1">
                    Bio
                  </label>
                  <textarea
                    value={formData.bio || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                    placeholder="About you (optional)"
                    rows={3}
                    className="w-full px-4 py-4 bg-transparent border border-[#2B2B2B] rounded-2xl text-[#8F8F8F] text-sm leading-5 resize-none focus:border-[#494949] focus:outline-none"
                  />
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="flex justify-end gap-6">
                <button
                  onClick={handleCancel}
                  className="w-[170px] px-6 py-3 bg-transparent border border-[#232323] rounded-2xl text-[#F5F5F5] text-base font-semibold leading-6 hover:bg-[#191919] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-[170px] px-6 py-3 bg-[#232323] rounded-2xl text-[#F5F5F5] text-base font-semibold leading-6 hover:bg-[#2B2B2B] transition-colors"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
