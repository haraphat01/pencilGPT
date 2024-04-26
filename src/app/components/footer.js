// components/Footer.js
import Link from "next/link";
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className=" py-4">
            <div className="container mx-auto ">
                <div className="w-full flex flex-col md:flex-row">
                    <div className="flex-1 text-black">
                        <Link href="#">
                            <button className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">

                                <Image src="/pencil.jpg" alt="Pencil" width={50} height={50} />
                                Pencil AI
                            </button>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <Link href="#">
                                    <button className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</button>
                                </Link>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <Link href="#">
                                    <button className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Social</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <button href="https://t.me/pencilai" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Telegram</button>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <Link href="https://twitter.com/pencilAitoken7">
                                Twitter
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
