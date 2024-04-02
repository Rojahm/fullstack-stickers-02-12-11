import Footer from "@/app/(front)/ui/Footer";
import Header from "@/app/(front)/ui/Header";
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
