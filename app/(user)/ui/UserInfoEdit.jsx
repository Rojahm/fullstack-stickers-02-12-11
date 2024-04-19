import { useEffect, useState } from "react";
function UserInfoEdit({ userInfo, setNewUserInfo }) {
  const [name, setName] = useState(`${userInfo.name}`);
  const [lastname, setLastname] = useState(`${userInfo.lastname}`);
  const [email, setEmail] = useState(`${userInfo.email}`);
  const [mobile, setMobile] = useState(`${userInfo.mobile}`);
  const [address, setAddress] = useState(`${userInfo.address}`);
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    setNewData({
      name: name,
      lastname: lastname,
      email: email,
      mobile: mobile,
      address: address,
    });
    // const formData = new FormData(data);
    setNewUserInfo(newData);
  }, [name, lastname, email, mobile, address]);
  return (
    <form className="flex flex-col gap-4 my-5">
      <div>
        <lable className="text-[purple] font-bold">User ID:</lable>
        <p className="text-zinc-400 text-sm pl-5">{userInfo.user_id}</p>
      </div>
      <div>
        <h3 className="text-[purple] font-bold">Name:</h3>
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          defaultValue={userInfo.name}
          className="text-zinc-500 text-md px-2 outline-purple-300"
        ></input>
      </div>
      <div>
        <h3 className="text-[purple] font-bold">Lastname:</h3>
        <input
          name="lastname"
          defaultValue={userInfo.lastname}
          className="text-zinc-500 text-md px-2 outline-purple-300"
        ></input>
      </div>
      <div>
        <h3 className="text-[purple] font-bold">Email:</h3>
        <input
          name="email"
          defaultValue={userInfo.email}
          className="text-zinc-500 text-md px-2 outline-purple-300"
        ></input>
      </div>
      <div>
        <h3 className="text-[purple] font-bold">Mobile:</h3>
        <input
          name="email"
          defaultValue={userInfo.mobile}
          className="text-zinc-500 text-md px-2 outline-purple-300"
        ></input>
      </div>
      <div>
        <h3 className="text-[purple] font-bold">Address:</h3>
        <textarea
          name="address"
          defaultValue={userInfo.address}
          className="text-zinc-500 text-md pl-5 w-96 h-40 py-3"
        ></textarea>
      </div>
    </form>
  );
}

export default UserInfoEdit;
