import RequireAuth from "../auth/requireAuth";

export default function ProtectedPage() {
  return (
    <RequireAuth>
      <div>
        <h1>Protected Page</h1>
        <p>You can see this because you're logged in.</p>
      </div>
    </RequireAuth>
  );
}
