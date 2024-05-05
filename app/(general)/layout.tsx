
export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello MainLayout </h1>
      {children}
    </div>
  );
} 