import { useState } from "react";
import { axiosInstance } from "../api/axios-api";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const user = {
    user: { username: username, email: email, password: password },
  };
  console.log("user", user);

  const handleGetAuth = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/users", user);
      console.log("res", res);
      navigate("/login");
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
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a href="/login">Have an account?</a>
            </p>

            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleChangeUsername}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChangePwd}
                />
              </fieldset>
              <button onClick={handleGetAuth} className="btn btn-lg btn-primary pull-xs-right">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
