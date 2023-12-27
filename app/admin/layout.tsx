export const metadata = {
  title: "E-shop",
  description: "E-shop admin dashboard",
};
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="">Nav</div>
      {children}
    </div>
  );
};

export default AdminLayout;
