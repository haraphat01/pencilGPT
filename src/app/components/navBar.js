// components/NavBar.js
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                    <Link href="/" target="_blank" className="text-white font-bold text-xl">
                          Pencil AI
                       
                    </Link>
                </div>
                <div className="links">
                <Link href="https://t.me/TajiriBot" target="_blank" className="text-white font-bold text-xl">
                       
                        <button> Try our AI telegram Bot</button>
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
