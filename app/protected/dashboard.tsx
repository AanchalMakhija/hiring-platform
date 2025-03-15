"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") {
    router.push("/signin"); // Redirect if not authenticated
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome, {session?.user?.name}!</h1>
      <p className="text-lg">This is your dashboard.</p>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
}
