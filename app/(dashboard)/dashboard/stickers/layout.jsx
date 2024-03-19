import DashBPacksNav from "./Nav";

function DashBPacksLayout({ children }) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <DashBPacksNav />
      {children}
    </div>
  );
}

export default DashBPacksLayout;
