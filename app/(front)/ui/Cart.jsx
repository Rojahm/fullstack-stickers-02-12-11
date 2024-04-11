"use client";
import { RiShoppingBasketLine } from "react-icons/ri";
import { GoTrash } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  totalCartItemsSelector,
  totalPriceSelector,
  addToCart,
  removeFromCart,
  deleteFromCart,
} from "@/lib/features/cart/cartSlice";
import { formatPrice } from "@/app/util/formatPrice";
function Cart({ showCart }) {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalCartItems = useAppSelector((state) => state.cart.cartQty);
  const totalCartPrice = useAppSelector((state) => state.cart.cartPrice);
  const dispatch = useAppDispatch();
  return (
    <>
      {showCart ? (
        <div
          id="onPageCart"
          className="bg-white/85 shadow-xl absolute top-12 right-5 w-[50vw] p-5 rounded"
        >
          <div className="flex items-center gap-5 w-full text-[purple]">
            <RiShoppingBasketLine />
            <h1 className="font-semibold">Cart Items</h1>
          </div>
          {cartItems.length > 0 ? (
            <div className="flex flex-col gap-2">
              {cartItems.map((item, i) => (
                <div
                  key={"cartItam" + i}
                  className="my-2 flex justify-between pr-2 items-center text-sm gap-2"
                >
                  <div className=" w-[50%]">{item.product.title}</div>
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
                  <div>{formatPrice(item.price)}</div>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteFromCart(item.product));
                    }}
                  >
                    <GoTrash />
                  </button>
                </div>
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
      ) : null}
    </>
  );
}

export default Cart;
