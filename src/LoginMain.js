import SignUpContext from "./context/signupdata/SignUpContext";
import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import validator from "validator";
import "./LoginMain.css";

function LoginMain() {
  const Dash = useNavigate();

  const { details, setDetails } = useContext(SignUpContext);

  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = async (e) => {
    e.preventDefault();

    if (!validator.isEmail(uname)) {
      alert("Please enter a valid email address");
    } else if (password.length === 0) {
      alert("Please enter a password");
    } else {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uname,
          password,
        }),
      });

      const json = await res.json();
      console.log(json);
      if (json.success) {
        // Save the auth token and redirect
        // localStorage.setItem('token', json.authtoken);

        setDetails({ email: uname, token: json.authtoken });

        if (json.usertype === "supplier") {
          Dash("/supplier");
        }
        if (json.usertype === "customer") {
          Dash("/customer");
          console.log(details.email);
        }
        if (json.usertype === "admin") {
          Dash("/admin");
        }
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div className="loginmain">
      <div className="login_container1">
        <img className="login_logo1" src={"/images/Logo.png"} alt="" />

        <div className="login_header1">
          <h1>
            Covid Help
            <br></br>
            Management System
          </h1>
        </div>
        <div className="form">
          <h5>LOGIN</h5>
          <form method="POST">
            <div className="uname1">
              <h7>Username</h7>
              <input
                type="email"
                value={uname}
                onChange={(e) => setUname(e.target.value)}
                placeholder="Email address"
              />
            </div>

            <div className="pwd1">
              <h7>Password</h7>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            <div className="login_btn1">
              <button type="submit" onClick={LoginUser}>
                <h7>Login</h7>
              </button>
            </div>

            <div className="register_text1">
              or Register as a{" "}
              <Link Link to="/customer-signup">
                Customer
              </Link>{" "}
              or a{" "}
              <Link Link to="/supplier-signup">
                Supplier
              </Link>
              .
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginMain;
