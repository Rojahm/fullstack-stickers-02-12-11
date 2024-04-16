// import { Protect } from "@clerk/nextjs";
import "@/app/globals.css";
import Nav from "./Nav";
import Header from "@/app/(front)/ui/Header";
import NotFound from "@/app/not-found";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard | ChopStick",
  description: "Manage ChopStick Orders, Stickers ,...",
};

export default function DashboardLayout({ children }) {
  // const { has } = auth();
  // const role = has({ permission: "org:profile:admin" });
  // console.log(role);
  const { sessionClaims } = auth();

  // If the user does not have the admin role, redirect them to the home page
  if (sessionClaims?.metadata.role !== "admin") {
    redirect("/");
  }
  return (
    // <Protect role="org:admin" fallback={<NotFound />}>
    <section>
      <Header color={"black"} />
      <Nav />
      {children}
    </section>
    // </Protect>
  );
}
