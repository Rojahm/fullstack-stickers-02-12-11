import useCart from "@/app/store/useCart";
function Cart({ showCart }) {
  // Counter
  const cartCount = useCart((state) => state.count);
  return (
    <>
      {showCart ? (
        <div
          id="onPageCart"
          className="bg-white/85 shadow-xl absolute top-12 right-5 w-[264px] p-5 rounded"
        >
          <h1>cart</h1>
          <div>{cartCount}</div>
        </div>
      ) : null}
    </>
  );
}

export default Cart;
