// Auth Clerk
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
// State mgmt
import { useAppDispatch } from "@/lib/hooks";
import { deleteCart } from "@/lib/features/cart/cartSlice";

function AddOrder({ cartItems, price, setCartItems }) {
  const router = useRouter();
  const { isLoaded, userId } = useAuth();
  const dispatch = useAppDispatch();

  const handleOrder = async () => {
    if (isLoaded) {
      const order = {
        user_id: userId,
        cart: cartItems,
        payments: "none",
        price: price,
        status: "pending",
      };
      axios
        .post(`${process.env.NEXT_PUBLIC_SRV_URL}/newOrder`, order)
        .then((res) => {
          console.log(res.data.msg);
          setCartItems([]);
          dispatch(deleteCart());
          axios
            .get(`${process.env.NEXT_PUBLIC_SRV_URL}/user/${userId}`)
            .then((res) => {
              const data = res.data.user[0];
              data.cart = [];
              data.orders = order;
              const userId = res.data.user[0]._id;
              axios.post(
                `${process.env.NEXT_PUBLIC_SRV_URL}/updateUser/${userId}`,
                data
              );
            });
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
