import Image from "next/image";
import UserNav from "./UserNav";
import Logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-5 py-5">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={100} height={50} />
          <span className="text-zinc-200xl font-bold hidden lg:block">
            My Series V2
          </span>
        </div>

        <div className="rounded-full border px-5 py-2">
          <p>this is a Searchbar</p>
        </div>
        <UserNav />
      </div>
    </nav>
  );
}
