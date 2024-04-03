"use client";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineHistory } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

function UserNav() {
  const pathname = usePathname();
  const [expand, setExpand] = useState(true);
  const menuItems = [
    { title: "cart", icon: <IoCartOutline />, link: "/profile/cart" },
    { title: "my account", icon: <FaRegUser />, link: "/profile" },
    { title: "my orders", icon: <MdOutlineHistory />, link: "/" },
    { title: "my favs", icon: <GrFavorite />, link: "/" },
    { title: "payments", icon: <MdPayment />, link: "/" },
    { title: "change password", icon: <RiLockPasswordLine />, link: "/" },
  ];
  return (
    <div className="flex flex-col w-[55px] md:w-[190px] transition-all ease-in-out duration-500">
      <div className="p-5 flex-col gap-3 ">
        <div className="md:hidden text-center font-bold">+</div>
        {/* <div className="md:hidden text-center font-bold"></div> */}
        <div className="text-sm hidden md:flex">Hello</div>
        <div className="font-bold hidden md:flex">UserName</div>
      </div>
      <div className="flex flex-col pb-5">
        {menuItems.map((item, i) => (
          <>
            <Link
              key={i}
              href={item.link}
              className={clsx(
                "text-sm flex justify-start items-center gap-3 px-5 py-4",
                { "bg-orange-500 font-bold": pathname === item.link },
                {
                  "hover:bg-sky-200 hover:scale-105 transition-all ease-in-out duration-200":
                    pathname !== item.link,
                }
              )}
            >
              <div>{item.icon}</div>
              <div className="capitalize hidden md:block">{item.title}</div>
            </Link>

            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default UserNav;
