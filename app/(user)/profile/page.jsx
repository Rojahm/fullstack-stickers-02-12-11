"use client";
import UserNav from "@/app/(user)/ui/UserNav";

function ProfilePage() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-center gap-5 p-5 w-full lg:w-[70%]">
        <div className="bg-sky-100/60 rounded-lg">
          <UserNav />
        </div>
        {/* Children to layout */}
        <div className="w-full bg-sky-100/60 p-5 rounded-lg">
          <h1>Personal Information</h1>
          <hr />
        </div>
        {/* Children to layout */}
      </div>
    </div>
  );
}

export default ProfilePage;
