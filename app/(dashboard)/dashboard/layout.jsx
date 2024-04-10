import "@/app/globals.css";
import Nav from "./Nav";
import Header from "@/app/(front)/ui/Header";

export const metadata = {
  title: "Dashboard | ChopStick",
  description: "Manage ChopStick Orders, Stickers ,...",
};

export default function DashboardLayout({ children }) {
  return (
    <section>
      <Header color={"black"} />
      <Nav />
      {children}
    </section>
  );
}
