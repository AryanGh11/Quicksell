import { Session } from "next-auth";
import { IoMenuOutline } from "react-icons/io5";
import { CgShoppingBag } from "react-icons/cg";
import Logo from "@/app/components/Logo";

export default async function Nav({ user }: Session) {
  return (
    <nav className="w-full py-3 px-6 flex justify-between items-center">
      {/* Menu icon */}
      <div className="w-6 h-6 flex justify-center items-center">
        <IoMenuOutline className="w-full h-full" />
      </div>
      {/* Menu icon */}
      <div>
        <Logo />
      </div>
      {/* Cart icon */}
      <div className="w-6 h-6 flex justify-center items-center">
        <CgShoppingBag className="w-full h-full" />
      </div>
    </nav>
  );
}
