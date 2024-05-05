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
// Auth Clerk
import { useAuth } from "@clerk/nextjs";

function Orders() {
  const router = useRouter();
  // const searchParams = useSearchParams();
  const [ordersInfo, setOrdersInfo] = useState([]);
  // const [ordersQty, setOrdersQty] = useState();
  // const pagenumber = Number(searchParams.get("pn")) || 1;
  // const pagination = Number(searchParams.get("pg")) || 15;
  const { isLoaded, userId } = useAuth();

  useEffect(() => {
    if (isLoaded) {
      axios
        .get(`${process.env.NEXT_PUBLIC_SRV_URL}/userOrder/${userId}`)
        .then((res) => {
          setOrdersInfo(res.data.orders);
          // setOrdersQty(res.data.qty);
        });
    }
  }, []);

  /*
  // Delete User
  const deleteOrder = (id) => {
    toast.promise(
      axios
        .post(`${process.env.NEXT_PUBLIC_SRV_URL}/deleteOrder/${id}`)
        .then((res) => console.log(res.data.msg))
        .catch((err) => console.log(err)),
      {
        pending: "Deleting",
        success: "Order Deleted",
        error: "error",
      }
    );
    router.refresh();
  };
*/
  return (
    <div className="flex flex-col justify-center items-center">
      <ToastContainer />
      {ordersInfo
        ? ordersInfo.map((order, i) => (
            <div key={i}>
              <hr className="min-w-40" />
              <div className="border-x-2 min-w-40 hover:border-[purple] p-4 gap-10 flex justify-between">
                <Link
                  href={`/dashboard/orders/${order._id}`}
                  className="grid grid-cols-4 items-center w-fit gap-2"
                >
                  <div className="text-xs text-[purple] text-ellipsis overflow-hidden">
                    {order._id}
                  </div>
                  <div className="font-semibold text-[purple] text-ellipsis overflow-hidden">
                    {order.status}
                  </div>
                  <div className="font-semibold text-[purple] text-ellipsis overflow-hidden">
                    {order.price}
                  </div>
                  <div className="font-semibold text-[purple] text-ellipsis overflow-hidden">
                    {order.user_id}
                  </div>
                </Link>
                {/* <div className="flex gap-2">
                  <button onClick={() => deleteOrder(order._id)}>
                    <FaRegTrashAlt />
                  </button>
                </div> */}
              </div>
              <hr className="min-w-40" />
            </div>
          ))
        : null}
      {/* pagination */}
      {/* <Pagination qty={ordersQty} pn={pagenumber} pg={pagination} /> */}
    </div>
  );
}

export default Orders;
