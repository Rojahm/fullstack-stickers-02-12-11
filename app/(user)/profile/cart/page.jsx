"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
// UI Icons
import { RiShoppingBasketLine } from "react-icons/ri";
import { GoTrash } from "react-icons/go";
// State mgmt
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  addToCart,
  removeFromCart,
  deleteFromCart,
} from "@/lib/features/cart/cartSlice";
// Custom Util
import { formatPrice } from "@/app/util/formatPrice";
// Auth Clerk
import { useAuth } from "@clerk/nextjs";
import axios from "axios";

function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalCartItems = useAppSelector((state) => state.cart.cartQty);
  const totalCartPrice = useAppSelector((state) => state.cart.cartPrice);
  const dispatch = useAppDispatch();
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(true);
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  useEffect(() => {
    if (isLoaded && userId) {
      axios
        .get(`${process.env.NEXT_PUBLIC_SRV_URL}/user/${userId}`)
        .then((res) => {
          setUserInfo(res.data.user[0]);
          setLoading(false);
          if (cartItems.length > 0) {
            const data = {
              cart: cartItems,
            };
            axios
              .post(
                `${process.env.NEXT_PUBLIC_SRV_URL}/updateUser/${res.data.user[0]._id}`,
                data
              )
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
          }
        });
    }
  }, [cartItems, userId]);

  return (
    <div className="bg-white/85 shadow-xl p-5 rounded">
      <div className="flex items-center gap-5 w-full text-[purple] my-5">
        <RiShoppingBasketLine />
        <h1 className="font-semibold">Cart Items</h1>
      </div>

      {cartItems.length > 0 ? (
        <div className="flex flex-col gap-2">
          {cartItems.map((item, i) => (
            <>
              <div
                key={"cartItam" + i}
                className="my-2 flex justify-between pr-2 items-center text-sm gap-1"
              >
                <Link
                  href={`/sticker-packs/${item.product.pack}/${item.product.title}`}
                  className="flex items-center gap-2 w-[60%] "
                >
                  <Image
                    src={`${item.product.imageLink}`}
                    width={100}
                    height={100}
                  />
                  <p className="line-clamp-3 text-center px-3 ">
                    {item.product.title}
                  </p>
                </Link>
                <div className="flex justify-evenly gap-2 w-[40%]">
                  <div className="flex gap-2">
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(removeFromCart(item.product));
                      }}
                    >
                      -
                    </button>
                    {item.qty}
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(addToCart(item.product));
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="text-wrap">{formatPrice(item.price)}</div>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteFromCart(item.product));
                    }}
                  >
                    <GoTrash />
                  </button>
                </div>
              </div>
              <hr />
            </>
          ))}
          <div className="flex justify-between text-sm font-bold text-[purple]">
            <p>Total:</p>
            <p>{totalCartItems}</p>
            <p>{totalCartPrice}</p>
          </div>
          <button className="bg-[purple] hover:bg-purple-300 text-white hover:text-zinc-600 transition-all ease-in-out duration-200 font-bold shadow-md hover:shadow-xl rounded-md w-full">
            Check Out
          </button>
        </div>
      ) : (
        <p className="text-center font-bold text-zinc-400">Cart is Empty</p>
      )}
    </div>
  );
}

export default CartPage;
