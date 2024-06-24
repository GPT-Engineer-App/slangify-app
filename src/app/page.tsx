import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Slang Term App</h1>
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/trending">
              <a className="text-blue-500 hover:underline">Trending Terms</a>
            </Link>
          </li>
          <li>
            <Link href="/search">
              <a className="text-blue-500 hover:underline">Search</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a className="text-blue-500 hover:underline">User Profile</a>
            </Link>
          </li>
        </ul>
      </nav>
      <p className="text-lg">Discover the latest slang terms, search for meanings, and contribute your own!</p>
    </div>
  );
}