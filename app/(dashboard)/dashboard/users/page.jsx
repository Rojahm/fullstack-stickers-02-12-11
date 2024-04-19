"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function UsersPage() {
  const [usersInfo, setUsersInfo] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SRV_URL}/users`)
      .then((res) => setUsersInfo(res.data));
  }, []);
  console.log(usersInfo);
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="self-start p-10 text-[purple] text-lg font-bold">
        Users:
      </h1>
      <div className="w-[80%]">
        {usersInfo
          ? usersInfo.map((user) => (
              <>
                <div className="border-l-2 hover:border-[purple] p-4 flex justify-between">
                  <div>{user.user_id}</div>
                  <div>{user.name}</div>
                  <div>{user.lastname}</div>
                  <div>{user.email}</div>
                  <div className="flex gap-2">
                    <button>x</button>
                    <button>edit</button>
                    <button>see</button>
                  </div>
                </div>
                <hr />
              </>
            ))
          : null}
      </div>
    </div>
  );
}

export default UsersPage;
