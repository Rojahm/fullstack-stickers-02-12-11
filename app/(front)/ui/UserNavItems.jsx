"use client";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { UserButton, SignedIn, SignedOut, useSession } from "@clerk/nextjs";
import { checkUserRole } from "@/app/util/userUtils";

function UserNavItems({ color }) {
  const { session } = useSession();
  const userRole = checkUserRole(session);
  const menuItems = [
    {
      title: <CiUser />,
      link: "/profile",
    },
    {
      title: <MdOutlineSpaceDashboard />,
      link: "/dashboard",
      role: "admin",
    },
  ];
  return (
    <div className="flex gap-2">
      <SignedIn>
        {menuItems.map((item, i) =>
          (item.role === "admin" && userRole === "admin") || !item.role ? (
            <Link
              id={item.id ? item.id : ""}
              key={i}
              href={item.link}
              style={{ color: `${color}` }}
              className="font-semi bold text-[19px] h-full border-b-2 border-transparent hover:border-b-2 hover:border-white"
            >
              {item.title}
            </Link>
          ) : null
        )}
      </SignedIn>
      {/* SignedOut Component */}
      <SignedOut>
        <a href="/sign-in">
          <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base mr-4">
            Login
          </button>
        </a>
        <a href="/sign-up">
          <button className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base">
            Sign Up
          </button>
        </a>
      </SignedOut>

      {/* UserButton Component */}
      <SignedIn>
        <div className="ml-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </div>
  );
}

export default UserNavItems;
