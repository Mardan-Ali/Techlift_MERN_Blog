import { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
  // To navigate after registeration
  const navigate = useNavigate();
  // States to handle Form Inputs
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError(false);
      const res = await axios.post("auth/register", {
        username,
        email,
        password,
      });
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setemail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit" className="registerButton">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
      <br />
      {error && <label style={{ color: "red" }}>User Already Exists </label>}
    </div>
  );
}
