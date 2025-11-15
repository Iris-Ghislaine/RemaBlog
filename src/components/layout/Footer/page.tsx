export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-8 text-center text-sm text-gray-600 max-w-5xl">
        © {new Date().getFullYear()} RemaⒷlog
      </div>
    </footer>
  );
}