"use client";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { UserButton, SignedIn, SignedOut, useSession } from "@clerk/nextjs";
import { checkUserRole } from "@/app/util/userUtils";
import { GoSignIn } from "react-icons/go";
import { GoSignOut } from "react-icons/go";
import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function UserNavItems({ color }) {
  const router = useRouter();
  const { session } = useSession();
  const userRole = checkUserRole(session);
  const menuItems = [
    {
      title: <CiUser />,
      link: "/profile",
      alt: "User Profile",
    },
    {
      title: <MdOutlineSpaceDashboard />,
      link: "/dashboard",
      role: "admin",
      alt: "Admin Dashboard",
    },
  ];
  return (
    <div className="flex gap-2 items-center">
      <SignedIn>
        {menuItems.map((item, i) =>
          (item.role === "admin" && userRole === "org:admin") || !item.role ? (
            <Link
              title={item.alt}
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
        <Link href="/sign-in" title="Sign In">
          <GoSignIn color={color} />
        </Link>
      </SignedOut>

      {/* UserButton Component */}
      <SignedIn>
        <SignOutButton signOutCallback={() => router.push("/")}>
          <button title="Sign Out">
            <GoSignOut color={color} />
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}

export default UserNavItems;
