import Footer from "@/app/(front)/ui/Footer";
import Header from "@/app/(front)/ui/Header";
import UserNav from "@/app/(user)/ui/userNav";
import "@/app/globals.css";

export const metadata = {
  title: "Profile | ChopStick",
  description: "ChopSticke User Profile page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex gap-5 my-5 p-5">
          <div>
            <UserNav />
          </div>
          <div className="">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
