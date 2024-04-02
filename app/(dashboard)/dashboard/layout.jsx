import { Nunito } from "next/font/google";
import "@/app/globals.css";
import Nav from "./Nav";
import Header from "@/app/(front)/ui/Header";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard | ChopStick",
  description: "Manage ChopStick Orders, Stickers ,...",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.className} antialiased`}>
      <body>
        <Header />
        <Nav />
        {children}
      </body>
    </html>
  );
}
