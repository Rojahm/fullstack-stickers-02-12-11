function UserInfo({ userInfo }) {
  return (
    <div className="flex flex-col gap-4 my-5">
      <div>
        <h3 className="text-[purple] font-bold">User ID:</h3>
        <p className="text-zinc-400 text-sm pl-5">{userInfo.user_id}</p>
      </div>
      <div>
        <h3 className="text-[purple] font-bold">Name:</h3>
        <p className="text-zinc-500 text-md pl-5">{userInfo.name}</p>
      </div>
      <div>
        <h3 className="text-[purple] font-bold">Lastname:</h3>
        <p className="text-zinc-500 text-md pl-5">{userInfo.lastname}</p>
      </div>
      <div>
        <h3 className="text-[purple] font-bold">Email:</h3>
        <p className="text-zinc-500 text-md pl-5">{userInfo.email}</p>
      </div>
      <div>
        <h3 className="text-[purple] font-bold">Mobile:</h3>
        <p className="text-zinc-500 text-md pl-5">{userInfo.mobile}</p>
      </div>
      <div>
        <h3 className="text-[purple] font-bold">Address:</h3>
        <p className="text-zinc-500 text-md pl-5">{userInfo.address}</p>
      </div>
    </div>
  );
}

export default UserInfo;
