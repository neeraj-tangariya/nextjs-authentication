import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "./auth";
import Logout from "@/components/client/logout";

export default async function Home() {
  const session: any = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session?.user ? (
        <Logout />
      ) : (
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      )}
    </main>
  );
}
