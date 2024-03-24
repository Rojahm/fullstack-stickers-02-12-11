function FileInput() {
  return (
    <div className="flex justify-center items-center gap-5 w-full">
      <label htmlFor="file" className="font-semibold w-[20%] md:w-[10%]">
        File :
      </label>
      <div className="w-[70%]">
        <input
          defaultValue={defaultValue}
          required
          type="file"
          id="file"
          name="file"
          className="border border-sky-200 rounded-md px-2 py-1 outline-sky-300 h-10"
        ></input>
      </div>
    </div>
  );
}

export default FileInput;
