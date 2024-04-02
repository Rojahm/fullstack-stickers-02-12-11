import { Nunito } from "next/font/google";
import Footer from "@/app/(front)/ui/Footer";
import Header from "@/app/(front)/ui/Header";
import UserNav from "@/app/(user)/profile/profileUi/userNav";
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
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-center gap-5 p-5 w-full lg:w-[70%]">
            <div className="bg-sky-100/60 p-6 rounded-lg">
              <UserNav />
            </div>
            <div className="w-full bg-sky-100/60 p-5 rounded-lg">
              {children}
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
