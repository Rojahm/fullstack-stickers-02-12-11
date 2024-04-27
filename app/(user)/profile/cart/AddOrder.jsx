// Auth Clerk
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";

function AddOrder({ cartItems, price, setCartItems }) {
  const router = useRouter();
  const { isLoaded, userId } = useAuth();

  const handleOrder = async (order) => {
    if (isLoaded) {
      const data = {
        user_id: userId,
        cart: cartItems,
        payments: "none",
        price: price,
        status: "pending",
      };
      axios
        .post(`${process.env.NEXT_PUBLIC_SRV_URL}/newOrder`, data)
        .then((res) => {
          console.log(res.data.msg);
          setCartItems([]);
          router.push("/profile/order");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <button
        onClick={() => handleOrder(cartItems)}
        className="bg-[purple] hover:bg-purple-300 text-white hover:text-zinc-600 transition-all ease-in-out duration-200 font-bold shadow-md hover:shadow-xl rounded-md block m-auto py-2 px-4"
      >
        Check Out
      </button>
    </>
  );
}

export default AddOrder;
