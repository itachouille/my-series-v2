import Image from "next/image";
import UserNav from "./UserNav";
import Logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto p-2">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={80} height={50} />
          <span className="text-zinc-200xl font-bold">My Series</span>
        </div>
        <UserNav />
      </div>
    </nav>
  );
}
