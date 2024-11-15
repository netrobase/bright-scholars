"use client"
import { useState } from "react";
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop-blur">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <Link href="#" className="text-white/70 hover:text-white transition">
                Home
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition">
                About
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition">
                Gallery
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex gap-4 items-center">
            <Button>School Portal</Button>
            <MenuIcon className="md:hidden cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden mt-4 space-y-4 text-left px-5">
            <Link href="#" className="text-white/70 hover:text-white transition block">
              Home
            </Link>
            <Link href="#" className="text-white/70 hover:text-white transition block">
              About
            </Link>
            <Link href="#" className="text-white/70 hover:text-white transition block">
              Gallery
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
