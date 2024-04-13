import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// import StoreProvider from "./StoreProvider";
import dynamic from "next/dynamic";

const StoreProvider = dynamic(() => import("@/app/StoreProvider"), {
  ssr: false,
});

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "ChopStick | Sticker Shop",
  description: "A WebApp to Browse and Buy Cool Stickers",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${nunito.className} antialiased`}>
          <StoreProvider>{children}</StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
