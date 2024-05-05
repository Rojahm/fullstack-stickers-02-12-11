"use client";
// Auth Clerk
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useState, useEffect } from "react";
import Orders from "./Orders";
function OrderPage() {
  const { isLoaded, userId } = useAuth();
  const [orders, setOrders] = useState();
  useEffect(() => {
    if (isLoaded) {
      axios
        .get(`${process.env.NEXT_PUBLIC_SRV_URL}/userOrder/${userId}`)
        .then((res) => {
          console.log(res.data);
          setOrders(res.data);
        });
    }
  }, []);
  return (
    <div>
      <h1>Order page</h1>
      <Orders />
    </div>
  );
}

export default OrderPage;
