interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <main className="flex flex-col items-center px-6">{children}</main>;
}
