function CoverInput({ name, defaultValue }) {
  return (
    <div className="flex justify-center items-center gap-5 w-full">
      <label htmlFor={name} className="font-semibold w-[20%] md:w-[10%]">
        Cover :
      </label>
      <input
        defaultValue={defaultValue}
        required
        type="text"
        id={name}
        name={name}
        className="border border-sky-200 rounded-md w-[70%] px-2 py-1 outline-sky-300"
      ></input>
    </div>
  );
}

export default CoverInput;
