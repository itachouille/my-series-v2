import Searchbar from "./_components/Searchbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="h-full">
      <div className="flex h-full">
        <div className="h-full flex-1">
          <Searchbar />
          {children}
        </div>
      </div>
    </main>
  );
}
