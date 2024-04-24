// components/NavBar.js
import React from "react";
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


export default function NavBars() {
    return (
        <Navbar className="mt-5 " position="static">
            <NavbarBrand>
                <Link href="/#" aria-current="page">
                    <Image src="/pencil.jpg" alt="Pencil" width={50} height={50} />
                    <p className="font-bold text-inherit">Pencil AI</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href="https://t.me/TajiriBot" color="foreground" target="_blank" className="text-white font-bold text-xl">
                        <button> Try our AI telegram Bot</button>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="/" variant="flat">
                        Log in
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="https://pencil-ai.gitbook.io/pencilai-lite-paper/">Read litepaper</Link>
                </NavbarItem>

                <NavbarItem>
                    <Link color="foreground" href="/">
                        Blog
                    </Link>

                </NavbarItem>

            </NavbarContent>
        </Navbar>
    );
}