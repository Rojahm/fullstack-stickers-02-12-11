"use client";
import Link from "next/link";
// UI
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { useAppSelector } from "@/lib/hooks";

function MenuItems({ color, setShowCart, showCart, setShowSearch }) {
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
      title: <IoIosSearch />,
      // link: "/",
      id: "search",
    },
    {
      title: <CiUser />,
      link: "/profile",
    },
    {
      title: <MdOutlineSpaceDashboard />,
      link: "/dashboard",
    },
    {
      title: <RiShoppingBasketLine />,
      // link: "/dashboard",
      id: "cart",
    },
  ];
  const handleCart = () => {
    setShowCart(!showCart);
  };
  const handleSearch = () => {
    setShowSearch(true);
  };
  const cartNumber = useAppSelector((state) => state.cart.cartQty);

  return (
    <>
      {menuItems.map((item, i) =>
        item.link ? (
          <Link
            id={item.id ? item.id : ""}
            key={i}
            href={item.link}
            style={{ color: `${color}` }}
            className="font-semi bold text-[19px] h-full border-b-2 border-transparent hover:border-b-2 hover:border-white"
          >
            {item.title}
          </Link>
        ) : (
          // Render a different tag (replace with your desired tag)
          <button
            id={item.id ? item.id : ""}
            className="font-semi bold text-[19px] h-full border-b-2 border-transparent hover:border-b-2 hover:border-white"
            key={`${i}-no-link`}
            style={{ color: `${color}` }}
            onClick={
              item.id
                ? () => {
                    if (item.id === "cart") {
                      handleCart();
                    } else if (item.id === "search") {
                      handleSearch();
                    }
                  }
                : null
            }
          >
            {item.title}
            {item.id === "cart" && cartNumber > 0 ? (
              <div className="absolute top-8 right-5 rounded-full bg-[purple] text-white text-xs px-1">
                {cartNumber}
              </div>
            ) : null}
          </button>
        )
      )}
    </>
  );
}

export default MenuItems;
