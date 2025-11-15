import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Human<br />stories & ideas
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        A place to read, write, and deepen your understanding.
      </p>
      <Button className="lg">
        <Link href="/write">Start writing</Link>
      </Button>
    </div>
  );
}