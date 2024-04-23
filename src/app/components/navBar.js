// components/NavBar.js
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <a className="text-white font-bold text-xl">Your Logo</a>
          </Link>
        </div>
        <div className="links">
          <Link href="/about">
            <a className="ml-4">About</a>
          </Link>
          <Link href="/contact">
            <a className="ml-4">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
