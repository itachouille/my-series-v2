import SwitchTab from "@/components/SwitchTab";

interface SearchLayoutProps {
  children: React.ReactNode;
}

export default function SearchLayout({ children }: SearchLayoutProps) {
  return (
    <main className="flex flex-col items-center px-6">
      <SwitchTab />
      {children}
    </main>
  );
}
