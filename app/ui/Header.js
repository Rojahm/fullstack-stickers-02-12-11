import Link from "next/link";
import Nav from "./Nav";

function Header() {
  return (
    <div className="flex justify-between items-center pt-3 px-3">
      <Link href={"/"}>
        <h1 className="title">ChopStick</h1>
      </Link>
      <Nav />
    </div>
  );
}

export default Header;
