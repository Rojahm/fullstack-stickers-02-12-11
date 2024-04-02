import Footer from "@/app/(front)/ui/Footer";
import Nav from "@/app/(front)/ui/Nav";

export const metadata = {
  title: "Profile | ChopStick",
  description: "ChopSticke User Profile page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Nav color="000" /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
