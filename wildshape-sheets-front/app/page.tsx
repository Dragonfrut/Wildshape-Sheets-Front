import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const metadata = {
  title: "Home"
}

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
    </main>
  )
}
