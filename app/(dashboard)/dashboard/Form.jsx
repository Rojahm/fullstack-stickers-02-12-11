"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { addNewPack } from "@/app/lib/actions";
import { fetchOnePack } from "@/app/lib/data";
function Form({ title, id }) {
  const pathname = usePathname();
  // const pack = fetchOnePack(id);
  // console.log(pack);
  // Handle Submit
  // if(pathname.startsWith("/dashboard/packs/new"))
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("tags", Array.from([...tags]));
    if (pathname === "/dashboard/packs/new") {
      await addNewPack(formData);
    }
    e.target.reset();
  };

  //Handle Tags
  const [tags, setTags] = useState([]);
  const handleTag = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTags([...tags, e.target.value]);
      e.target.value = null;
    }
  };
  const deleteTag = (tagToDelete) => {
    setTags(tags.filter((tag) => tag != tagToDelete));
  };
  // Prevent to submit update with enter
  const formEnterNoSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-[90%] lg:w-[70%]">
        <h1 className="font-bold text-lg">{title}</h1>
        <hr />
      </div>
      <form
        onSubmit={handleSubmit}
        onKeyDown={formEnterNoSubmit}
        className="flex flex-col justify-center items-center w-[90%] md:w-[80%] lg:w-[60%] my-10 gap-5"
      >
        {/* One Input */}
        <div className="flex justify-center items-center gap-5 w-full">
          <label htmlFor="title" className="font-semibold w-[20%] md:w-[10%] ">
            Title :
          </label>
          <input
            // defaultValue={pack.title}
            required
            type="text"
            id="title"
            name="title"
            className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
          ></input>
        </div>
        {/* One Input */}
        {/* One Input */}
        <div className="flex justify-center items-center gap-5 w-full">
          <label htmlFor="image" className="font-semibold w-[20%] md:w-[10%]">
            Image :
          </label>
          <input
            required
            type="text"
            id="image"
            name="image"
            className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
          ></input>
        </div>
        {/* One Input */}
        {/* One Input */}
        {pathname.startsWith("/dashboard/packs/") ? (
          <div className="flex justify-center items-center gap-5 w-full">
            <label htmlFor="cover" className="font-semibold w-[20%] md:w-[10%]">
              Cover :
            </label>
            <input
              required
              type="text"
              id="cover"
              name="cover"
              className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
            ></input>
          </div>
        ) : null}
        {/* One Input */}
        {/* One Input */}
        <div className="flex justify-center items-center gap-5 w-full">
          <label htmlFor="link" className="font-semibold w-[20%] md:w-[10%]">
            Link :
          </label>
          <input
            required
            type="text"
            id="link"
            name="link"
            className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
          ></input>
        </div>
        {/* One Input */}
        {/* One Input */}
        {pathname.startsWith("/dashboard/stickers/") ? (
          <>
            <div className="flex justify-center items-center gap-5 w-full">
              <label
                htmlFor="tags"
                className="font-semibold w-[20%] md:w-[10%]"
              >
                Tags :
              </label>
              <input
                type="text"
                id="tags"
                // name="tags"
                onKeyDown={handleTag}
                className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
              ></input>
            </div>
            <div className="flex flex-wrap gap-3 justify-start items-center w-[95%] md:w-[80%] lg:w-[70%]">
              {tags.map((tag, i) => (
                <div
                  key={i}
                  className="border rounded-md px-2 text-sky-300 border-sky-300 shadow-sm"
                >
                  {tag}{" "}
                  <span
                    onClick={() => deleteTag(tag)}
                    className="hover:cursor-pointer text-zinc-500"
                  >
                    x
                  </span>
                </div>
              ))}
            </div>
          </>
        ) : (
          // {/* One Input */}
          // {/* One Input */}
          <div className="flex justify-center items-center gap-5 w-full">
            <label
              htmlFor="relatedPacks"
              className="font-semibold w-[20%] md:w-[10%]"
            >
              Related Packs :
            </label>
            <input
              type="checkbox"
              id="relatedPacks"
              className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
            ></input>
          </div>
        )}
        {/* One Input */}
        {/* One Input */}
        <div className="flex justify-center items-center gap-5 w-full">
          <label htmlFor="show" className="font-semibold w-[20%] md:w-[10%]">
            Show :
          </label>
          <select
            required
            type="select"
            id="show"
            name="show"
            className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        {/* One Input */}
        {/* One Input */}
        <div className="flex justify-center items-center gap-5 w-full">
          <label htmlFor="color" className="font-semibold w-[20%] md:w-[10%]">
            Color :
          </label>
          <div className="w-[70%]">
            <input
              required
              type="color"
              id="color"
              name="color"
              className="border border-sky-200 rounded-md px-2 py-1 outline-sky-300 h-10"
            ></input>
          </div>
        </div>
        {/* One Input */}
        <button className="bg-sky-100 w-[20%] rounded-md shadow-md leading-9 hover:bg-sky-200 hover:shadow-lg hover:text-white">
          Save
        </button>
      </form>
    </div>
  );
}

export default Form;
