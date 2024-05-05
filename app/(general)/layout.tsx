import { Navbar } from "@/components/nav-bar/NavBar";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
} 