import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-5 bg-indigo-800">
       <Link href="/" className="px-2 py-1 text-teal-300 text-uppercase">
        Home
      </Link>
      <Link href="/notes" className="px-2 py-1 text-teal-300 text-uppercase">
        Notes
      </Link>
    </header>
  );
}
