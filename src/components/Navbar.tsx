import UserNav from "./UserNav";

export default function Navbar() {
  return (
    <nav className="w-full border-b flex items-center justify-between p-4">
      <p>logo</p>
      <UserNav />
    </nav>
  );
}
