function Cart({ showCart }) {
  return (
    <>
      {showCart ? (
        <div
          id="onPageCart"
          className="bg-white/85 shadow-xl absolute top-12 right-5 w-[264px] p-5 rounded"
        >
          <h1>cart</h1>
        </div>
      ) : null}
    </>
  );
}

export default Cart;
