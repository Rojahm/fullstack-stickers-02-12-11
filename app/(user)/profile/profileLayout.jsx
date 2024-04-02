import Footer from "@/app/(front)/ui/Footer";
import Header from "@/app/(front)/ui/Header";
import UserNav from "@/app/(user)/profile/profileUi/userNav";
import "@/app/globals.css";

export const metadata = {
  title: "Profile | ChopStick",
  description: "ChopSticke User Profile page",
};

export default function ProfileLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <h2>Profile</h2>
        <div className="flex gap-5 my-5 p-5 bg-blue-400">
          <div className="bg-sky-200 p-5 rounded-lg">
            <UserNav />
          </div>
          <div className="w-full bg-sky-200 p-5 rounded-lg">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
