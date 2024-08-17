import { getSession } from "next-auth/react";

export default async function ProtectedPage() {
  const session = await getSession();
  
  if (!session) {
    return <div>You are not authenticated.</div>;
  }

  return <div>Welcome, {session.user?.name}!</div>;
}