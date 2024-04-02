export const metadata = {
  title: "Profile | ChopStick",
  description: "ChopSticke User Profile page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
