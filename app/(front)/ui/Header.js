"use client";
import Link from "next/link";
import { useState } from "react";
import Nav from "./Nav";
import Hamburger from "./Hamburger";
import NavDrawer from "./NavDrawer";

function Header({ color }) {
  const [showDrawer, setShowDrawer] = useState(false);
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

      <Nav color={color} />
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
    </div>
  );
}

export default Header;
