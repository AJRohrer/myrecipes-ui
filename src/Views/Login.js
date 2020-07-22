import React from "react";
import { useApiLogin } from "../Hooks/Login";

function Login(props) {
  let inputStyles =
    "bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-3";

  const tryLogin = (event) =>
    useApiLogin(props.hostUrl, { username: "AJRohrer", password: "docker" });

  return (
    <div className="flex flex-col">
      <div className="text-center">Login</div>
      <div>
        <input className={inputStyles} type="text" placeholder="Username" />
        <input className={inputStyles} type="password" placeholder="Password" />
      </div>

      <button onClick={tryLogin} className="bg-blue-500 text-white p-3 w-full">
        Login
      </button>
    </div>
  );
}

export default Login;
