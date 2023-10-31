import { useState } from "react";
import { axiosInstance } from "../api/axios-api";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = { user: { email: email, password: password } };
  const navigate = useNavigate();

  const handleGetAuth = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/users/login", user);
      console.log("res", res);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handleChangePwd = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <a href="/register">Need an account?</a>
            </p>

            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  onChange={handleChangeEmail}
                  value={email}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  onChange={handleChangePwd}
                  value={password}
                />
              </fieldset>
              <button onClick={handleGetAuth} className="btn btn-lg btn-primary pull-xs-right">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
