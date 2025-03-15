import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    role: "jobseeker" | "recruiter";
  }

  interface Session {
    user: {
      id: string;
      role: "jobseeker" | "recruiter";
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    role: "jobseeker" | "recruiter";
  }
}
