"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Hamburger from "./Hamburger";
import NavDrawer from "./NavDrawer";
import Cart from "./Cart";
import Search from "./Search";

function Header({ color }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  // Event listener for html
  const closeMenuOnBodyClick = (e) => {
    // get the event path
    const target = e.composedPath();
    if (
      !target.some(
        (elem) =>
          elem.id === "drawerNavigation" ||
          elem.id === "onPageCart" ||
          elem.id === "hamburger" ||
          elem.id === "cart" ||
          elem.id === "search" ||
          elem.id === "onPageSearch"
      )
    ) {
      // Close the drawerNavigation if any other element other than drawerNavigation is Cliked

      setShowDrawer(false);
      setShowCart(false);
      setShowSearch(false);
    }
  };
  // Only add EventListener if the drawerNavigation is open
  useEffect(() => {
    // Select html elemet to add event listener
    const html = document.documentElement;
    if (showDrawer) {
      html.addEventListener("click", closeMenuOnBodyClick);
    }
  }, [showDrawer]);
  return (
    <div className="z-10 relative flex justify-between items-center pt-3 px-3">
      <Link href={"/"}>
        <h1
          className={"text-3xl font-bold drop-shadow-md"}
          style={{ color: `${color}` }}
        >
          ChopStick
        </h1>
      </Link>

      <Nav
        color={color}
        setShowDrawer={setShowDrawer}
        setShowCart={setShowCart}
        showCart={showCart}
        setShowSearch={setShowSearch}
        showSearch={showSearch}
      />
      <Hamburger
        color={color}
        setShowDrawer={setShowDrawer}
        showDrawer={showDrawer}
      />
      <NavDrawer
        color={color}
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
      />
      <Cart showCart={showCart} />
      <Search showSearch={showSearch} />
    </div>
  );
}

export default Header;
