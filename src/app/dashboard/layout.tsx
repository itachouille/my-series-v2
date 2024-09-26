import Link from "next/link";
import SwitchTab from "@/components/SwitchTab";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main>
      <div className="flex items-center justify-around">
        <Link href="/search">Search</Link>
        <SwitchTab />
      </div>
      {children}
    </main>
  );
}
