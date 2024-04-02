import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";
import MenuItems from "./MenuItems";
function NavDrawer({ color, showDrawer }) {
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
        <MenuItems color={color} />
      </div>
    </div>
  );
}

export default NavDrawer;
