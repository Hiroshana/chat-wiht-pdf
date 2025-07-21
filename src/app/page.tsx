import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="w-screen min-h-screen bg-linear-to-r bg-linear-to-r bg-linear-to-r bg-linear-to-r from-purple-100 via-purple-200 to-purple-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with PDF Hiro</h1>
            <UserButton />
          </div>
          <div className="flex mt-2">
            {isAuth && <Button>Go to chat</Button>}
          </div>
          <p className="max-w-2xl mt-1 text-lg text-slate-600">
            Join millions of students, researchers, and professionals who use AI
            to get instant answers and deepen their understanding of complex
            topics and research.
          </p>
          <div className="w-full mt-4">
            {isAuth ? (
              <h1>fileupload</h1>
            ) : (
              <Link href="/sign-in">
                <Button>
                  Start your journey - sign in!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
