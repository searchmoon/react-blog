import { useState } from "react";
import { axiosInstance } from "../api/axios-api";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const initData = {
    email: "",
    password: "",
    username: "",
  };

  const [userErrorMsg, setUserErrorMsg] = useState(initData);

  const [userData, setUserData] = useState(initData);

  const { email, password, username } = userData;

  const navigate = useNavigate();

  const user = {
    user: { username, email, password },
  };

  console.log("user", user);

  const handleGetAuth = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/users", user);
      console.log(res);
      setUserData(initData);
      navigate("/login");

    } catch (error) {
      const responseText = JSON.parse(error.response.request.responseText);

      const setErrorMsg = (responseText, field) => {
        return responseText.errors[field] ? responseText.errors[field][0] : null;
      };

      const pwdErrorMsg = setErrorMsg(responseText, "password");
      const emailErrorMsg = setErrorMsg(responseText, "email");
      const usernameErrorMsg = setErrorMsg(responseText, "username");
      pwdErrorMsg && setUserErrorMsg({ ...userErrorMsg, password: pwdErrorMsg });
      emailErrorMsg && setUserErrorMsg({ ...userErrorMsg, email: emailErrorMsg });
      usernameErrorMsg && setUserErrorMsg({ ...userErrorMsg, username: usernameErrorMsg });

      setTimeout(() => {
        setUserErrorMsg(initData);
      }, 2000);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
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

            <form>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Username"
                  value={username}
                  name="username"
                  onChange={handleChangeInput}
                />
              </fieldset>
              {userErrorMsg.username && (
                <ul className="error-messages">
                  <li>That username {userErrorMsg.username}</li>
                </ul>
              )}
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={handleChangeInput}
                />
              </fieldset>
              {userErrorMsg.email && (
                <ul className="error-messages">
                  <li>That email {userErrorMsg.email}</li>
                </ul>
              )}
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={handleChangeInput}
                />
              </fieldset>
              {userErrorMsg.password && (
                <ul className="error-messages">
                  <li>password {userErrorMsg.password}</li>
                </ul>
              )}
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
