import React from "react";

const PasswordInput = (props) => {
  let inputStyles =
    "bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-3";

  return (
    <div>
      <input
        type="password"
        required
        onChange={(event) => props.onChange(event.target.value)}
        className={inputStyles}
      ></input>
    </div>
  );
};

export default PasswordInput;
