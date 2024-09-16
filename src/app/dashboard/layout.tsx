import Link from "next/link";
import { Sidebar } from "./_components/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="h-full">
      <div className="flex h-full">
        {/*    <Sidebar /> */}
        <Link href="/search">Search</Link>
        <div className="h-full flex-1">
          {/*   <Navbar /> */}
          {children}
        </div>
      </div>
    </main>
  );
}
