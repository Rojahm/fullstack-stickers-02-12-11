import { Nunito } from "next/font/google";
import Footer from "@/app/(front)/ui/Footer";
import Header from "@/app/(front)/ui/Header";
import "@/app/globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Profile | ChopStick",
  description: "ChopSticke User Profile page",
};

export default function ProfileLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.className} antialiased`}>
      <body>
        <Header color={"black"} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
