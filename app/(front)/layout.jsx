import "../globals.css";
import Footer from "./ui/Footer";

export const metadata = {
  title: "ChopStick | Sticker Shop",
  description: "A WebApp to Browse and Buy Cool Stickers",
};

export default function FrontLayout({ children }) {
  return (
    <section>
      {children}
      <Footer />
    </section>
  );
}
