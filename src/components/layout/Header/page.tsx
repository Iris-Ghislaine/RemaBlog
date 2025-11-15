import { Button } from "@/components/ui/Button";
import Link from "next/link";


export default function Header() {
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
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Sign Up
          </Button>
        </nav>
      </div>
    </header>
  );
}