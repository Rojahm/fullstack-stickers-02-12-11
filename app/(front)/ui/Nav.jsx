"use client";
import MenuItems from "./MenuItems";
import { useEffect } from "react";

function Nav({ color, setShowDrawer }) {
  const handleResize = () => {
    const nav = document.getElementById("navMain");
    if (nav) {
      nav.className.includes("hidden") ? null : setShowDrawer(false);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="navMain">
      <div className="hidden w-[400px] md:flex justify-center items-center gap-3">
        <MenuItems color={color} />
      </div>
    </div>
  );
}

export default Nav;
