// components/NavBar.js
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                    <Link href="/" className="text-white font-bold text-xl">
                        Pencil AI
                    </Link>
                </div>
                <div className="links">
                    <Link href="/about" className="ml-4">
                        About
                    </Link>
                    <Link href="/contact" className="ml-4">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
