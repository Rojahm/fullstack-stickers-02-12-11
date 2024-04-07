"use client";
import { GiHamburgerMenu } from "react-icons/gi";

function Hamburger({ color, setShowDrawer, showDrawer }) {
  const handleDrawer = (e) => {
    setShowDrawer(!showDrawer);
  };
  return (
    <div className="flex flex-col md:hidden">
      <button id="hamburger" onClick={() => handleDrawer()}>
        <GiHamburgerMenu size={28} color={color} />
      </button>
    </div>
  );
}

export default Hamburger;
