import Link from "next/link";
import UserDetail from "./UserDetail";
function UserPage({ params }) {
  console.log(params.id);
  return (
    <div>
      <div className="flex py-5 px-10 gap-1">
        <Link href={"/dashboard"} className="font-bold capitalize">
          dashboard{" "}
        </Link>
        <p>/</p>
        <Link href={"/dashboard/users"} className="font-bold capitalize">
          Users{" "}
        </Link>
        <p>/</p>
        <h1 className=" text-orange-400 font-bold capitalize">
          user details: {params.id}
        </h1>
      </div>
      <UserDetail id={params.id} />
    </div>
  );
}

export default UserPage;
