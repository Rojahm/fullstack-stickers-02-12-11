import { GiHamburgerMenu } from "react-icons/gi";

function Hamburger({ setShowDrawer, showDrawer }) {
  const handleDrawer = (e) => {
    setShowDrawer(!showDrawer);
  };
  return (
    <div className="flex flex-col md:hidden">
      <button className=" text-white" onClick={() => handleDrawer()}>
        <GiHamburgerMenu size={28} />
      </button>
    </div>
  );
}

export default Hamburger;
