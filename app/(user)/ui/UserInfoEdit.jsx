import axios from "axios";
import { useRouter } from "next/navigation";
// Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserInfoEdit({ userInfo, setIsEditing }) {
  const router = useRouter();

  const handleEdit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      address: formData.get("address"),
    };
    //add user Update
    // Toastify
    toast.promise(
      axios
        .post(
          `${process.env.NEXT_PUBLIC_SRV_URL}/updateUser/${userInfo._id}`,
          data
        )
        .then((res) => {
          setIsEditing(false);
          router.refresh();
          // console.log(res.data.msg);
        }),
      {
        pending: "updating",
        success: "Info Updated",
        error: "error",
      }
    );
  };

  // Prevent to submit update with enter
  const formEnterNoSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  return (
    <form
      onSubmit={handleEdit}
      onKeyDown={formEnterNoSubmit}
      className="flex flex-col gap-4 my-5"
    >
      <div>
        <lable className="text-[purple] font-bold">User ID:</lable>
        <p className="text-zinc-400 text-sm pl-5">{userInfo.user_id}</p>
      </div>
      <div>
        <h3 className="text-[purple] font-bold">Name:</h3>
        <input
          // onClick={() => (e.target.value = "")}
          // onChange={(e) => setName(e.target.value)}
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
          name="mobile"
          defaultValue={userInfo.mobile}
          className="text-zinc-500 text-md px-2 outline-purple-300"
        ></input>
      </div>
      <div>
        <h3 className="text-[purple] font-bold">Address:</h3>
        <textarea
          name="address"
          defaultValue={userInfo.address}
          className="text-zinc-500 text-md pl-5 w-96 h-24 py-3"
        ></textarea>
      </div>
      <button
        // onClick={() => handleEdit(newUserInfo)}\
        type="submit"
        className="bg-[purple] text-white px-5 py-1 rounded-lg hover:bg-purple-200 hover:shadow-md hover:text-[purple] transition-all ease-in-out duration-200 block m-auto"
      >
        Save
      </button>
    </form>
  );
}

export default UserInfoEdit;
