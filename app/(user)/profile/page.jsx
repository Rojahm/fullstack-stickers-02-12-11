"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

function ProfilePage() {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);
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
  }, [userId]);
  if (!loading && userId) {
    if (!userInfo) {
      router.push("/verify-sign-up");
    } else {
      console.log(userInfo);
    }
  }
  return (
    <div>
      <h1>Personal Information</h1>
      <hr />
      {userInfo ? (
        <>
          <div>
            <p>{userInfo.user_id}</p>
            <p>{userInfo.name}</p>
            <p>{userInfo.lastname}</p>
            <p>{userInfo.email}</p>
            <p>{userInfo.mobile}</p>
            <p>{userInfo.address}</p>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ProfilePage;
