export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-muted min-h-screen">
      {children}
    </div>
  );
}
