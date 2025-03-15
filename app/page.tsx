"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return; // Wait for session to load
    if (!session) {
      router.replace("/signin"); // Redirect to Sign-In if not logged in
    } else {
      router.replace("/protected/dashboard"); // Redirect to Dashboard if logged in
    }
  }, [session, status, router]);

  return <p className="text-center text-xl">Redirecting...</p>; // Temporary UI
}
