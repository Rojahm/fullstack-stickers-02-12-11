import Link from "next/link";

function Nav() {
  const menuItems = [
    {
      title: "Orders",
      link: "/dashboard/orders",
    },
    {
      title: "Packs",
      link: "/dashboard/packs",
    },
    {
      title: "Stickers",
      link: "/dashboard/stickers",
    },
    {
      title: "Users",
      link: "/dashboard/users",
    },
  ];
  return (
    <div className="bg-zinc-200 flex justify-evenly h-12 items-center shadow-sm">
      {menuItems.map((menuItem, i) => (
        <Link
          key={i}
          href={menuItem.link}
          className="flex justify-center items-center w-full h-full hover:bg-sky-100 hover:shadow-sm"
        >
          <div>{menuItem.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default Nav;
