import { Sidebar } from "../../components";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
        <Sidebar />
        { children }
    </>
  );
} 