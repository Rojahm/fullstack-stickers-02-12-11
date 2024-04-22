"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
//Custom Components
import Pagination from "@/app/ui/Pagination";
// UI and Icons
import { FaRegTrashAlt } from "react-icons/fa";
// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

function Users() {
  const router = useRouter();
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

  // Delete User
  const deleteUser = (id) => {
    toast.promise(
      axios
        .post(`${process.env.NEXT_PUBLIC_SRV_URL}/deleteUser/${id}`)
        .then((res) => console.log(res.data.msg))
        .catch((err) => console.log(err)),
      {
        pending: "Deleting",
        success: "User Deleted",
        error: "error",
      }
    );
    router.refresh();
  };
  return (
    <div className="w-[80%]">
      <ToastContainer />
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
                  <button onClick={() => deleteUser(user._id)}>
                    <FaRegTrashAlt />
                  </button>
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
