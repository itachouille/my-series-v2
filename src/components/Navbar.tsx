import UserNav from "./UserNav";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between container mx-auto p-2">
        <div className="flex items-center">
          <span className="font-bold text-3xl">My Series</span>
        </div>
        <UserNav />
      </div>
    </nav>
  );
}
