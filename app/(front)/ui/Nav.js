import MenuItems from "./MenuItems";

function Nav({ color }) {
  return (
    <div className="hidden md:w-[400px] md:h-[50px] md:flex md:justify-evenly md:items-center">
      <MenuItems color={color} />
    </div>
  );
}

export default Nav;
