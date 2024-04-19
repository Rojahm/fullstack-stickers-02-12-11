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
    <div>
      <h1>User's Page</h1>
      {usersInfo
        ? usersInfo.map((user) => (
            <>
              <div>{user.user_id}</div>
            </>
          ))
        : null}
    </div>
  );
}

export default UsersPage;
