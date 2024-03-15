import Nav from "./Nav";

function Header() {
  return (
    <div className="flex justify-between items-center pt-3 px-3">
      <h1 className="title">ChopStick</h1>
      <Nav />
    </div>
  );
}

export default Header;
