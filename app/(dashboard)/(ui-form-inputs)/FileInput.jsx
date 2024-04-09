"use client";
import { usePathname } from "next/navigation";
function FileInput({ name }) {
  const pathname = usePathname()
    .split("/")
    .filter((item) => item != "" && item != "dashboard");
  return (
    <div className="flex justify-center items-center gap-5 w-full">
      <label
        htmlFor="file"
        className="font-semibold w-[20%] md:w-[10%] capitalize"
      >
        {name} :
      </label>
      <div className="w-[70%]">
        <input
          hidden
          type="text"
          name="filepath"
          defaultValue={pathname[0]}
        ></input>
        <input
          type="file"
          id="file"
          name={name}
          accept="image/jpeg,image/png,image/jpg"
          className="w-full border border-sky-200 rounded-md px-2 py-1 outline-sky-300 h-10"
        ></input>
      </div>
    </div>
  );
}

export default FileInput;
