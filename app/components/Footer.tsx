"use client";

import Link from "next/link";
import Logo from "./Logo";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineGithub,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="w-full bg-secondary text-neutral py-10 px-6 flex flex-col gap-10">
      <Logo />
      {/* Links */}
      <div className="flex w-full justify-between items-center">
        <ul className="flex flex-col gap-6 tracking-wide font-normal">
          <li>Products</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
        {/* Social media */}
        <div className="flex flex-col gap-6">
          <Link href={"https://instagram.com/aryan.gholamii"}>
            <AiOutlineInstagram className="w-6 h-6" />
          </Link>
          <Link href={"https://github.com/AryanGh11"}>
            <AiOutlineGithub className="w-6 h-6" />
          </Link>
          <Link href={"https://wa.me/+989030360886"}>
            <AiOutlineWhatsApp className="w-6 h-6" />
          </Link>
        </div>
      </div>
      {/* Line */}
      <div className="w-full h-[.5px] bg-neutral opacity-40"></div>
      {/* Copyright */}
      <div className="flex flex-col gap-4 text-sm font-normal opacity-70">
        <h1>2023 Arex. All right reserved.</h1>
        <h1>Design Made By TeamUp Agency.</h1>
        <h1>Developed by AryanGh.</h1>
      </div>
    </div>
  );
}
