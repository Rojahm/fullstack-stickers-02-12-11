import Link from "next/link";
// UI
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav({ color }) {
  return (
    <>
      <div className="hidden md:w-[400px] md:h-[50px] md:flex md:justify-evenly md:items-center">
        <Link
          href={"/"}
          style={{ color: `${color}` }}
          className="font-semi bold text-[19px] flex justify-center items-center h-full border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          Home
        </Link>
        <Link
          href={"/sticker-packs"}
          style={{ color: `${color}` }}
          className="font-semi bold text-[19px] flex justify-center items-center h-full border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          Sticker Packs
        </Link>
        <Link
          href={"/stickers"}
          style={{ color: `${color}` }}
          className="font-semi bold text-[19px] flex justify-center items-center h-full border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          Stickers
        </Link>
        <Link
          href={"/"}
          style={{ color: `${color}` }}
          className="font-semi bold text-[19px] flex justify-center items-center h-full border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          FAQ
        </Link>
        <Link
          href={"/"}
          style={{ color: `${color}` }}
          className="font-semi bold text-[19px] flex justify-center items-center h-full border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          <FaSearch />
        </Link>
      </div>
      <div className="flex flex-col md:hidden text-white">
        <GiHamburgerMenu size={28} />
      </div>
    </>
  );
}

export default Nav;
