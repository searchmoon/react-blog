import { useState } from "react";
import { axiosInstance } from "../api/axios-api";
import { useNavigate } from "react-router-dom";
import ErrorMsg from "../components/common/ErrorMsg";
import useErrorMsg from "../hooks/useErrorMsg";

const SignIn = () => {
  const initData = {
    email: "",
    password: "",
    emailAndPassword: "",
  };

  const { errorMessages, setError, clearErrors } = useErrorMsg(initData);

  const [userData, setUserData] = useState(initData);

  const { email, password } = userData;

  const user = { user: { email: email, password: password } };

  const navigate = useNavigate();

  const handleGetAuth = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/users/login", user);
      console.log("res", res);
      navigate("/");
    } catch (error) {
      const responseText = error.response.request.responseText;
      const errorText = JSON.parse(responseText).errors;

      const setErrorMsg = (resText, field) => {
        return resText[field] ? resText[field][0] : null;
      };

      setError("emailAndPassword", setErrorMsg(errorText, "email or password"));

      setTimeout(() => {
        clearErrors();
      }, 2000);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
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
            <form>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  onChange={handleChangeInput}
                  name="email"
                  value={email}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  onChange={handleChangeInput}
                  name="password"
                  value={password}
                />
              </fieldset>
              {errorMessages.emailAndPassword && (
                <ErrorMsg message={errorMessages.emailAndPassword} />
              )}
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
