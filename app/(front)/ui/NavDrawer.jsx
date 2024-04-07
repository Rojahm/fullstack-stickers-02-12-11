"use client";
import clsx from "clsx";
import MenuItems from "./MenuItems";

function NavDrawer({ color, showDrawer, setShowDrawer }) {
  return (
    <div
      id="drawerNavigation"
      className={clsx(
        "bg-sky-300/90 fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform duration-300 ease-in-out w-42",
        {
          // This adds animation for openning and closing the drawerNavigation
          "transform translate-x-0": showDrawer,
          "transform -translate-x-full": !showDrawer,
        }
      )}
    >
      <button
        className="flex justify-end w-full"
        onClick={() => setShowDrawer(!showDrawer)}
      >
        x
      </button>
      <div className="flex flex-col justify-center items-center gap-3 my-5">
        <h2 className="font-bold text-xl">ChopStick</h2>
        <div className=" flex flex-col justify-center items-center gap-2">
          <MenuItems color={color} />
        </div>
      </div>
    </div>
  );
}

export default NavDrawer;
