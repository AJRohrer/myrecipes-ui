import React, { useState } from "react";

function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const logUsernameAndPass = () => {
    console.log(username + " " + password);
  };

  let inputStyles =
    "bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-3";

  return (
    <div className="flex flex-col">
      <div className="text-center">Login</div>
      <div>
        <input
          onChange={handleUsernameInput}
          className={inputStyles}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={handlePasswordInput}
          className={inputStyles}
          type="password"
          placeholder="Password"
        />
      </div>

      <button
        onClick={logUsernameAndPass}
        className="bg-blue-500 text-white p-3 w-full"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
