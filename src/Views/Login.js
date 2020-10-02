import React from "react";
import RequiredInput from "../components/Login/RequiredInput";
import PasswordInput from "../components/Login/PasswordInput";
import axios from "axios";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false,
      userid: 1,
    };
  }

  SetUsername(name) {
    this.setState({ username: name });
  }

  SetPassword(pw) {
    this.setState({ password: pw });
  }

  SetUserId(id) {
    this.setState({ userid: id });
  }

  TryLogin() {
    axios
      .post("http://localhost:8090/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        console.log("Here is the response");
        document.cookie = "userID=" + response.data;
        var cookies = new Map();
        cookies = document.cookie
          .split(";")
          .map((cookie) => cookie.split("="))
          .reduce(
            (accumulator, [key, value]) => ({
              ...accumulator,
              [key.trim()]: decodeURIComponent(value),
            }),
            {}
          );
        console.log(cookies["userID"]);
        return cookies["userID"];
      })
      .catch((error) => {
        console.log("There was a login request error.");
      });
  }

  render() {
    return (
      <div>
        <RequiredInput onChange={this.SetUsername.bind(this)}></RequiredInput>
        <PasswordInput onChange={this.SetPassword.bind(this)}></PasswordInput>
        <Link
          to={`/recipehome/${this.state.userid}`}
          className="bg-blue-500 text-white p-3 w-full"
          onClick={this.TryLogin.bind(this)}
        >
          {" "}
          Login
        </Link>
      </div>
    );
  }
}

export default Login;

// export default function Login(props) {
//   const [username, setUsername] = useState();
//   const [password, setPassword] = useState();

//   const handleUsernameInput = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordInput = (event) => {
//     setPassword(event.target.value);
//   };

//   const TryLogin = (event) => {
//     console.log(username + " " + password);
//     useApiLogin("http://localhost:8090", {
//       username: username,
//       password: password,
//     });
//   };

//   let inputStyles =
//     "bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-3";

//   return (
//     <div className="flex flex-col">
//       <div className="text-center">Login</div>
//       <div>
//         <input
//           onChange={handleUsernameInput}
//           className={inputStyles}
//           type="text"
//           placeholder="Username"
//         />
//         <input
//           onChange={handlePasswordInput}
//           className={inputStyles}
//           type="password"
//           placeholder="Password"
//         />
//       </div>

//       <button onClick={TryLogin} className="bg-blue-500 text-white p-3 w-full">
//         Login
//       </button>
//     </div>
//   );
// }
