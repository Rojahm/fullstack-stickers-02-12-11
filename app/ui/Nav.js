import Link from "next/link";
// UI
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  return (
    <>
      <div className="hidden md:w-[50vw] md:flex md:justify-evenly md:items-center">
        <Link href={"/"} className="title-secondary">
          Home
        </Link>
        <Link href={"/"} className="title-secondary">
          Sticker Packs
        </Link>
        <Link href={"/"} className="title-secondary">
          Stickers
        </Link>
        <Link href={"/"} className="title-secondary">
          FAQ
        </Link>
        <Link href={"/"} className="title-secondary">
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
