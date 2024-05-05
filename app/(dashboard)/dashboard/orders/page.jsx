import Orders from "./Orders";
import Link from "next/link";

function OrdersPage() {
  return (
    <div className="w-full">
      <div className="flex py-5 px-10 gap-1">
        <Link href={"/dashboard"} className="font-bold capitalize">
          dashboard{" "}
        </Link>
        <p>/</p>
        <h1 className="text-[purple] text-lg font-bold">Orders:</h1>
      </div>
      <div className="flex justify-center">
        <Orders />
      </div>
    </div>
  );
}

export default OrdersPage;
