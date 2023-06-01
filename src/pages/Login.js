import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [inputs, setInput] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setInput((preval) => {
      return {
        ...preval,
        [e.target.name]: e.target.value,
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);

    navigate("/");
  };
  return (
    <div className="container   ">
      <div className="row  d-flex justify-content-center">
        <div className="col-lg-6 col-md-6 col-sm-12 m-5 border">
          <div className="my-4">
            <h3>Sign In</h3>
          </div>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label for="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={inputs.email}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="mb-4">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={inputs.password}
                onChange={changeHandler}
                required
              />
            </div>

            <div className="mb-4">
              <button className="btn btn-dark" type="submit">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
