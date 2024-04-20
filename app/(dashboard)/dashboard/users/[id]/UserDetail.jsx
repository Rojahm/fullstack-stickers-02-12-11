"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import UserInfo from "@/app/(user)/ui/UserInfo";
import UserInfoEdit from "@/app/(user)/ui/UserInfoEdit";

function UserDetail({ id }) {
  const [userInfo, setUserInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [newUserInfo, setNewUserInfo] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_SRV_URL}/user/${id}`).then((res) => {
      setUserInfo(res.data.user[0]);
      setIsLoading(false);
    });
  }, [id]);
  // console.log(userInfo);
  return (
    <div className="w-full flex justify-center">
      {!isLoading ? (
        !isEditing ? (
          <div className="w-[80%] bg-sky-100/50 border rounded-lg p-4">
            <UserInfo userInfo={userInfo} />
            <button
              onClick={() => setIsEditing(true)}
              className="bg-orange-500 text-white hover:bg-orange-200 shadow-md hover:text-orange-500 font-bold transition-all duration-200 ease-in-out px-4 py-1 rounded-md block m-auto"
            >
              Edit
            </button>
          </div>
        ) : (
          <div className="w-[80%] bg-sky-100/50 border rounded-lg p-4">
            <UserInfo userInfo={userInfo} />
            <UserInfoEdit userInfo={userInfo} setNewUserInfo={setNewUserInfo} />
            <button className="bg-orange-500 text-white hover:bg-orange-200 shadow-md hover:text-orange-500 font-bold transition-all duration-200 ease-in-out px-4 py-1 rounded-md block m-auto">
              Save
            </button>
          </div>
        )
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default UserDetail;
