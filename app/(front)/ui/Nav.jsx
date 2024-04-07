"use client";
import MenuItems from "./MenuItems";
import { useEffect } from "react";

function Nav({
  color,
  setShowDrawer,
  setShowCart,
  showCart,
  setShowSearch,
  showSearch,
}) {
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
      <div className="hidden w-[450px] md:flex justify-center items-center gap-3">
        <MenuItems
          color={color}
          setShowCart={setShowCart}
          showCart={showCart}
          setShowSearch={setShowSearch}
        />
      </div>
    </div>
  );
}

export default Nav;
