"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
//Custom Components
import Pagination from "@/app/ui/Pagination";
import { deletePack } from "@/app/lib/actions";
// UI and Icons
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

function Users() {
  const searchParams = useSearchParams();
  const [usersInfo, setUsersInfo] = useState([]);
  const [usersQty, setUsersQty] = useState();
  const pagenumber = Number(searchParams.get("pn")) || 1;
  const pagination = Number(searchParams.get("pg")) || 15;
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_SRV_URL}/users?pn=${pagenumber}&pg=${pagination}`
      )
      .then((res) => {
        setUsersInfo(res.data.paginatedUsers);
        setUsersQty(res.data.qty);
      });
  }, []);
  return (
    <div className="w-[80%]">
      <hr className="min-w-96" />

      {usersInfo
        ? usersInfo.map((user, i) => (
            <div key={i}>
              <div className="border-x-2 min-w-96 hover:border-[purple] p-4 gap-10 flex justify-between">
                <Link
                  href={`/dashboard/users/${user.user_id}`}
                  className="flex flex-wrap justify-between w-full gap-2"
                >
                  <div className="text-xs text-[purple]">{user.user_id}</div>
                  <div className="font-semibold text-[purple]">{user.name}</div>
                  <div className="font-semibold text-[purple]">
                    {user.lastname}
                  </div>
                  <div className="font-semibold text-[purple]">
                    {user.email}
                  </div>
                </Link>
                <div className="flex gap-2">
                  <button>x</button>
                  <button>edit</button>
                  <button>see</button>
                </div>
              </div>
              <hr className="min-w-96" />
            </div>
          ))
        : null}
      {/* pagination */}
      <Pagination qty={usersQty} pn={pagenumber} pg={pagination} />
    </div>
  );
}

export default Users;
