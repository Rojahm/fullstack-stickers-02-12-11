import Users from "./Users";
import Link from "next/link";

function UsersPage() {
  return (
    <div className="w-full">
      <div className="flex py-5 px-10 gap-1">
        <Link href={"/dashboard"} className="font-bold capitalize">
          dashboard{" "}
        </Link>
        <p>/</p>
        <h1 className="text-[purple] text-lg font-bold">Users:</h1>
      </div>
      <div className="flex justify-center">
        <Users />
      </div>
    </div>
  );
}

export default UsersPage;
