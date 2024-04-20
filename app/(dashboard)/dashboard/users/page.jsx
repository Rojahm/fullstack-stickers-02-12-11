import Users from "./Users";

function UsersPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="self-start p-10 text-[purple] text-lg font-bold">
        Users:
      </h1>
      <Users />
    </div>
  );
}

export default UsersPage;
