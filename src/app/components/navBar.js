// components/NavBar.js
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


export default function NavBars() {
    return (
        <Navbar className="mt-5 fixed w-full  top-0 ">
            <NavbarBrand>
                <p className="font-bold text-inherit">Pencil AI</p>
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
                    <Link color="foreground" href="">
                        Connect wallet
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="https://pencil-ai.gitbook.io/pencilai-lite-paper/">Read our litepaper</Link>
                </NavbarItem>

                <NavbarItem>
                    <Button as={Link} color="primary" href="https://t.me/TajiriBot" variant="flat">
                        Try our AI telegram Bot
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}