"use client";
import Link from "next/link";
// UI
import { FaSearch } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { useAppSelector } from "@/lib/hooks";
import UserNavItems from "./UserNavItems";

function MenuItems({ color, setShowCart, showCart, setShowSearch }) {
  const menuItems = [
    {
      title: "Home",
      link: "/",
      alt: "Home Page",
    },
    {
      title: "Sticker Packs",
      link: "/sticker-packs",
      alt: "Sticker Packs Page",
    },
    {
      title: "Stickers",
      link: "/stickers",
      alt: "Stickers Page",
    },
    {
      title: "FAQ",
      link: "/",
      alt: "Frequantly Asked Questions Page",
    },
    {
      title: <IoIosSearch />,
      // link: "/",
      id: "search",
      alt: "Search Page",
    },
    {
      title: <RiShoppingBasketLine />,
      // link: "/dashboard",
      id: "cart",
      alt: "Cart Page",
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
            title={item.alt}
            id={item.id ? item.id : ""}
            key={`${i}+${item.alt}`}
            href={item.link}
            style={{ color: `${color}` }}
            className="font-semi bold text-[19px] h-full border-b-2 border-transparent hover:border-b-2 hover:border-white"
          >
            {item.title}
          </Link>
        ) : (
          // Render a different tag
          <button
            title={item.alt}
            id={item.id ? item.id : ""}
            className="relative font-semi bold text-[19px] h-full border-b-2 border-transparent hover:border-b-2 hover:border-white"
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
              <div className="absolute top-3 -left-1 rounded-full bg-[purple] text-white text-xs px-1">
                {cartNumber}
              </div>
            ) : null}
          </button>
        )
      )}
      <UserNavItems color={color} />
    </>
  );
}

export default MenuItems;
