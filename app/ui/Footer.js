import Link from "next/link";
// UI
import { GoDotFill } from "react-icons/go";

function Footer() {
  return (
    <div className="relative bottom-0 w-full bg-[#0B1D2C] text-white font-bold flex flex-col justify-center items-center gap-2 pt-5 pb-10">
      <p>Copyright 2024 © Sticker Mania</p>
      <div className="flex justify-center items-center gap-1">
        <Link href={"/"}>Sticker Mania for Chrome</Link>
        <GoDotFill color="#333B40" size={12} />
        <Link href={"/"}>Sticker Mania for Microsoft Edge</Link>
        <GoDotFill color="#333B40" size={12} />
        <Link href={"/"}>FAQ</Link>
        <GoDotFill color="#333B40" size={12} />
        <Link href={"/"}> Privacy Policy</Link>
        <GoDotFill color="#333B40" size={12} />
        <Link href={"/"}>Terms</Link>
        <GoDotFill color="#333B40" size={12} />
        <Link href={"/"}>DMCA</Link>
      </div>
    </div>
  );
}

export default Footer;
