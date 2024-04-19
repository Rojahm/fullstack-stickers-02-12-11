"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import UserInfo from "../ui/UserInfo";
import UserInfoEdit from "../ui/UserInfoEdit";

function ProfilePage() {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [newUserInfo, setNewUserInfo] = useState([]);
  const router = useRouter();
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  if (!isLoaded || !userId) {
    router.push("/sign-in");
  }

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SRV_URL}/user/${userId}`)
      .then((res) => {
        setUserInfo(res.data.user[0]);
        setLoading(false);
      });
  }, [userId, isEditing]);
  if (!loading && userId) {
    if (!userInfo) {
      router.push("/verify-sign-up");
    }
  }
  const handleEdit = (newData) => {
    //add user Update

    // console.log(e.target.value);
    console.log(newData);
    setIsEditing(false);
    router.refresh();
  };
  return (
    <div>
      <div className="flex justify-between items-center my-5">
        <h1>Personal Information</h1>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-[purple] text-white px-5 py-1 rounded-lg hover:bg-purple-200 hover:shadow-md hover:text-[purple] transition-all ease-in-out duration-200"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={() => handleEdit(newUserInfo)}
            className="bg-[purple] text-white px-5 py-1 rounded-lg hover:bg-purple-200 hover:shadow-md hover:text-[purple] transition-all ease-in-out duration-200"
          >
            Save
          </button>
        )}
      </div>
      <hr />
      {userInfo ? (
        <>
          {!isEditing ? (
            <UserInfo userInfo={userInfo} />
          ) : (
            <UserInfoEdit userInfo={userInfo} setNewUserInfo={setNewUserInfo} />
          )}
        </>
      ) : null}
    </div>
  );
}

export default ProfilePage;
