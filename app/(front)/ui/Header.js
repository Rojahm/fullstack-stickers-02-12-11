import Link from "next/link";
import Nav from "./Nav";

function Header({ color }) {
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
    </div>
  );
}

export default Header;
