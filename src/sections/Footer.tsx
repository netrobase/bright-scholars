import Logo from "@/assets/logo.svg";
import Xsocial from "@/assets/social-x.svg";
import Instagram from "@/assets/social-instagram.svg";
import Youtube from "@/assets/social-youtube.svg"
import Link from "next/link";
export const Footer = () => {
  return(
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8"> 
        <div className="flex gap-2 items-center lg:flex-1">
          <Logo className="h-6 w-6"/>
           <div className="font-medium">Bright Scholars Academy</div>
        </div>
          <nav className="flex flex-col lg:flex-row lg:gap-7 lg:flex-1  lg:justify-center gap-5">
            <Link href="#" className="text-white/70 text-xs hover:text-white md:text-sm transition">Home</Link>
            <Link href="#" className="text-white/70 text-xs hover:text-white md:text-sm transition">About</Link>
            <Link href="#" className="text-white/70 text-xs hover:text-white md:text-sm transition">Gallery</Link>
            <Link href="#" className="text-white/70 text-xs hover:text-white md:text-sm transition">Blog</Link>
          </nav>
        <div className="flex lg:flex-1 lg:justify-end gap-5">
          <Xsocial className="text-white/40 hover:text-white transition "/>
          <Instagram className="text-white/40 hover:text-white transition"/>
          <Youtube className="text-white/40 hover:text-white transition"/>
        </div>
        </div>
      </div>
    </footer>
  ) ;
};
