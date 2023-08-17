"use client";

import { Session } from "next-auth";
import { IoMenuOutline } from "react-icons/io5";
import { CgShoppingBag } from "react-icons/cg";
import Logo from "@/app/components/Logo";
import { signIn, signOut } from "next-auth/react";

export default function Nav({ user }: Session) {
  return (
    <nav className="w-full py-3 px-6 flex justify-between items-center">
      {/* Menu icon */}
      <div className="w-6 h-6 flex justify-center items-center dropdown dropdown-right">
        <IoMenuOutline className="w-full h-full cursor-pointer" tabIndex={0} />
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            {user && <h1>{user.name}</h1>}
            {!user && <h1 onClick={() => signIn()}>Sign in</h1>}
          </li>
          {user && (
            <li>
              <h1 onClick={() => signOut()}>Sign out</h1>
            </li>
          )}
        </ul>
      </div>
      {/* Menu icon */}
      <div className="">
        <Logo />
      </div>
      {/* Cart icon */}
      <div className="w-6 h-6 flex justify-center items-center">
        <CgShoppingBag className="w-full h-full" />
      </div>
    </nav>
  );
}
