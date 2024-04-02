import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";
function NavDrawer({ color, showDrawer }) {
  console.log(showDrawer);
  return (
    <div
      id="drawer-navigation"
      className={clsx(
        "bg-sky-300/80 fixed top-0 left-64 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full w-64",
        { hidden: !showDrawer }
      )}
    >
      <div className="flex flex-col justify-center items-center gap-3 my-5">
        <h2 className="font-bold text-xl">ChopStick</h2>
        <Link
          href={"/"}
          style={{ color: `${color}` }}
          className="font-semi bold text-[19px] flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          Home
        </Link>
        <Link
          href={"/sticker-packs"}
          style={{ color: `${color}` }}
          className="font-semi bold text-[19px] flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          Sticker Packs
        </Link>
        <Link
          href={"/stickers"}
          style={{ color: `${color}` }}
          className="font-semi bold text-[19px] flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          Stickers
        </Link>
        <Link
          href={"/"}
          style={{ color: `${color}` }}
          className="font-semi bold text-[19px] flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          FAQ
        </Link>
        <Link
          href={"/"}
          style={{ color: `${color}` }}
          className="font-semi bold text-[19px] flex justify-center items-center border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          <FaSearch />
        </Link>
      </div>
    </div>
  );
}

export default NavDrawer;
