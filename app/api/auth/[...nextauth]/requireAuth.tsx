

"use client";


import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin"); // Redirect to login
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return <>{session ? children : null}</>;
}
