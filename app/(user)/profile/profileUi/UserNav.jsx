"use client";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineHistory } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";

import { MdPayment } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function UserNav() {
  const menuItems = [
    { title: "cart", icon: <IoCartOutline />, link: "/" },
    { title: "my account", icon: <FaRegUser />, link: "/" },
    { title: "my orders", icon: <MdOutlineHistory />, link: "/" },
    { title: "my favs", icon: <GrFavorite />, link: "/" },
    { title: "payments", icon: <MdPayment />, link: "/" },
    { title: "change password", icon: <RiLockPasswordLine />, link: "/" },
  ];
  return (
    <div className="flex flex-col">
      <div className="p-5 flex flex-col gap-3">
        <div className="text-sm">Hello</div>
        <div className="font-bold">UserName</div>
      </div>
      <div className="flex flex-col pb-5">
        {menuItems.map((item, i) => (
          <>
            <Link
              key={i}
              href={item.link}
              className="text-sm flex justify-start items-center gap-3 px-5 py-4 hover:bg-sky-200"
            >
              <div>{item.icon}</div>
              <div className="capitalize">{item.title}</div>
            </Link>

            <hr />
          </>
        ))}
      </div>
    </div>
  );
}

export default UserNav;
