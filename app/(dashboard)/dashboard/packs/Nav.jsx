"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

function DashBPacksNav() {
  const pathName = usePathname();
  const items = [
    {
      title: "Show All",
      link: "/dashboard/packs",
    },
    {
      title: "Add New",
      link: "/dashboard/packs/new",
    },
  ];
  return (
    <div className="flex justify-end items-center gap-5 w-[95%] py-5">
      {items.map((item, i) => (
        <Link
          key={i}
          href={item.link}
          className={clsx(
            "bg-sky-100 w-28 h-8 rounded-md shadow-md hover:bg-sky-200 hover:shadow-lg flex justify-center items-center",
            { "bg-sky-200": pathName === item.link }
          )}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default DashBPacksNav;
