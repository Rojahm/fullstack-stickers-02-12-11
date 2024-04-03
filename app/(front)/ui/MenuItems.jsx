import Link from "next/link";
// UI
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdOutlineSpaceDashboard } from "react-icons/md";

function MenuItems({ color }) {
  const menuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Sticker Packs",
      link: "/sticker-packs",
    },
    {
      title: "Stickers",
      link: "/stickers",
    },
    {
      title: "FAQ",
      link: "/",
    },
    {
      title: <FaSearch />,
      link: "/",
    },
    {
      title: <CiUser />,
      link: "/profile",
    },
    {
      title: <MdOutlineSpaceDashboard />,
      link: "/dashboard",
    },
  ];
  return (
    <>
      {menuItems.map((item, i) => (
        <Link
          key={i}
          href={item.link}
          style={{ color: `${color}` }}
          className="font-semi bold text-[19px] h-full border-b-2 border-transparent hover:border-b-2 hover:border-white"
        >
          {item.title}
        </Link>
      ))}
    </>
  );
}

export default MenuItems;
