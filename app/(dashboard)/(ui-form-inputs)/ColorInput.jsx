function ColorInput({ name, defaultValue }) {
  return (
    <div className="flex justify-center items-center gap-5 w-full">
      <label htmlFor={name} className="font-semibold w-[20%] md:w-[10%]">
        Color :
      </label>
      <div className="w-[70%]">
        <input
          defaultValue={defaultValue}
          required
          type="color"
          id={name}
          name={name}
          className="border border-sky-200 rounded-md px-2 py-1 outline-sky-300 h-10"
        ></input>
      </div>
    </div>
  );
}

export default ColorInput;
