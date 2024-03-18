import DashBPacksNav from "./Nav";

function DashBPacksLayout({ children }) {
  return (
    <>
      <DashBPacksNav />
      {children}
    </>
  );
}

export default DashBPacksLayout;
