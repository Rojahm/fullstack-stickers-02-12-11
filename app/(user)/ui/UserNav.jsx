import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineHistory } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";

import { MdPayment } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function UserNav() {
  return (
    <div className="flex flex-col gap-5">
      <h2>Profile</h2>
      <div>
        <div>Hello</div>
        <div>UserName</div>
      </div>
      <div className="flex flex-col bg-red-300 justify-start items-center gap-2">
        <Link href={"/"} className="flex justify-center gap-3">
          <div>
            <IoCartOutline />
          </div>
          <div>Cart</div>
        </Link>
        <Link href={"/"} className="flex justify-center items-center gap-3">
          <div>
            <FaRegUser />
          </div>
          <div>My Account</div>
        </Link>
        <Link href={"/"} className="flex justify-center items-center gap-3">
          <div>
            <MdOutlineHistory />
          </div>
          <div>My Orders</div>
        </Link>
        <Link href={"/"} className="flex justify-center items-center gap-3">
          <div>
            <GrFavorite />
          </div>
          <div>My Favs</div>
        </Link>

        <Link href={"/"} className="flex justify-center items-center gap-3">
          <div>
            <MdPayment />
          </div>
          <div>Payments</div>
        </Link>
        <Link href={"/"} className="flex justify-center items-center gap-3">
          <div>
            <RiLockPasswordLine />
          </div>
          <div>Change Password</div>
        </Link>
      </div>
    </div>
  );
}

export default UserNav;
