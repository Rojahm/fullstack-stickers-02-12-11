function Form({ title }) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-[90%] lg:w-[70%]">
        <h1 className="font-bold text-lg">{title}</h1>
        <hr />
      </div>
      <form className="flex flex-col justify-center items-center w-[90%] md:w-[80%] lg:w-[60%] my-10 gap-5">
        {/* One Input */}
        <div className="flex justify-center items-center gap-5 w-full">
          <label htmlFor="title" className="font-semibold w-[20%] md:w-[10%] ">
            Title :
          </label>
          <input
            required
            type="text"
            id="title"
            className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
          ></input>
        </div>
        {/* One Input */}
        {/* One Input */}
        <div className="flex justify-center items-center gap-5 w-full">
          <label htmlFor="title" className="font-semibold w-[20%] md:w-[10%]">
            Image :
          </label>
          <input
            required
            type="text"
            id="title"
            className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
          ></input>
        </div>
        {/* One Input */}
        {/* One Input */}
        <div className="flex justify-center items-center gap-5 w-full">
          <label htmlFor="title" className="font-semibold w-[20%] md:w-[10%]">
            Cover :
          </label>
          <input
            required
            type="text"
            id="title"
            className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
          ></input>
        </div>
        {/* One Input */}
        {/* One Input */}
        <div className="flex justify-center items-center gap-5 w-full">
          <label htmlFor="title" className="font-semibold w-[20%] md:w-[10%]">
            Link :
          </label>
          <input
            required
            type="text"
            id="title"
            className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
          ></input>
        </div>
        {/* One Input */}
        {/* One Input */}
        <div className="flex justify-center items-center gap-5 w-full">
          <label htmlFor="title" className="font-semibold w-[20%] md:w-[10%]">
            Tags :
          </label>
          <input
            required
            type="text"
            id="title"
            className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
          ></input>
        </div>
        {/* One Input */}
        {/* One Input */}
        <div className="flex justify-center items-center gap-5 w-full">
          <label htmlFor="title" className="font-semibold w-[20%] md:w-[10%]">
            Show :
          </label>
          <input
            required
            type="text"
            id="title"
            className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
          ></input>
        </div>
        {/* One Input */}
        {/* One Input */}
        <div className="flex justify-center items-center gap-5 w-full">
          <label htmlFor="title" className="font-semibold w-[20%] md:w-[10%]">
            Color :
          </label>
          <div className="w-[70%]">
            <input
              required
              type="color"
              id="title"
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
