import MenuItems from "./MenuItems";

function Nav({ color }) {
  return (
    <div className="hidden w-[400px] md:flex justify-center items-center gap-3">
      <MenuItems color={color} />
    </div>
  );
}

export default Nav;
