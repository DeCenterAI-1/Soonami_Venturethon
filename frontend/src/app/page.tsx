"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Perform the redirect immediately
    router.push("/dashboard");
  }, [router]); // Include router in dependency array to satisfy linting rules

  // Return null to prevent rendering anything (avoids flash)
  return null;
}
