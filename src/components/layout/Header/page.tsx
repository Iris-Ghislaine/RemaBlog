'use client';

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/Button";

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-5xl">
        <Link href="/" className="text-2xl font-bold text-green-600">
          RemaⒷlog
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/write" className="text-sm hidden sm:block">
            Write
          </Link>

          {user ? (
            <>
              <Link href="/profile" className="text-sm">
                Profile
              </Link>
              <Button variant="ghost" size="sm" onClick={signOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" >
                <Link href="/login">Sign In</Link>
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700" >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}