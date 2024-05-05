import Link from "next/link";
import OrderDetail from "./OrderDetail";
function UserPage({ params }) {
  return (
    <div>
      <div className="flex py-5 px-10 gap-1">
        <Link href={"/dashboard"} className="font-bold capitalize">
          dashboard{" "}
        </Link>
        <p>/</p>
        <Link href={"/dashboard/orders"} className="font-bold capitalize">
          Orders{" "}
        </Link>
        <p>/</p>
        <h1 className=" text-orange-400 font-bold capitalize">{params.id}</h1>
      </div>
      <OrderDetail id={params.id} />
    </div>
  );
}

export default UserPage;
