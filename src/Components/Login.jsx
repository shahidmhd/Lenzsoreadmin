import React, { useState } from "react";
import Icon from "/assets/images/login-img.svg";
import { Link, useNavigate } from "react-router-dom";
import { LoginAdmin } from "../apicalls/Adimauth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../Redux/Authslice";
function Login() {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  // State variables to store email and password values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // State variable to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  // Handle form submission
  const handleSubmit = async (event) => {
    try {
      event.preventDefault(); // Prevent default form submission
      // Create an object with username and password

      const formData = {
        username: username,
        password: password,
      };

      // Log the form data as an object
      console.log("Form Data:", formData);
      dispatch(loginStart());
      const response = await LoginAdmin(formData);
      if (response.status == "true") {
        dispatch(loginSuccess(response.token));
        toast.success(response.message);
        console.log(response, "yyyy");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      dispatch(loginFailure());
    }
  };

  return (
    <>
      <div id="ebazar-layout" className="theme-blue">
        <div className="main p-2 py-3 p-xl-5">
          <div className="body d-flex p-0 p-xl-5">
            <div className="container-xxl">
              <div className="row g-0">
                <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center rounded-lg auth-h100">
                  <div style={{ maxWidth: "25rem" }}>
                    <div className="text-center mb-5">
                      <i
                        class="fa fa-glasses text-primary"
                        style={{ fontSize: 90 }}
                      ></i>
                    </div>
                    <div className="mb-5">
                      <h2 className="color-900 text-center">
                        A few clicks is all it takes.
                      </h2>
                    </div>
                    {/* Image block */}
                    <div className="">
                      <img src={Icon} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                  <div
                    className="w-100 p-3 p-md-5 card border-0 shadow-sm"
                    style={{ maxWidth: "32rem" }}
                  >
                    {/* Form */}
                    <form
                      className="row g-1 p-3 p-md-4"
                      onSubmit={handleSubmit}
                    >
                      <div className="col-12 text-center mb-5">
                        <h1>Sign in</h1>
                        <span>Free access to our dashboard.</span>
                      </div>
                      <div className="col-12">
                        <div className="mb-2">
                          <label className="form-label">User Name</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} // Update email state
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-2">
                          <div className="form-label">
                            <span className="d-flex justify-content-between align-items-center">
                              Password
                              <Link className="" style={{ color: "#3c114f" }}>
                                Forgot Password?
                              </Link>
                            </span>
                            <div className="input-group">
                              <input
                                type={showPassword ? "text" : "password"}
                                className="form-control form-control-lg"
                                placeholder="***************"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                              >
                                {showPassword ? (
                                  <i className="fa fa-eye-slash"></i> // Show eye-slash icon when password is visible
                                ) : (
                                  <i className="fa fa-eye"></i> // Show eye icon when password is hidden
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-12 text-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-lg btn-block btn-light lift text-uppercase"
                        >
                          SIGN IN
                        </button>
                      </div>
                      {/* <div className="col-12 text-center mt-4">
                        <span>
                          Don't have an account yet?{" "}
                          <a href="auth-signup.html" className="text-secondary">
                            Sign up here
                          </a>
                        </span>
                      </div> */}
                    </form>
                    {/* End Form */}
                  </div>
                </div>
              </div>{" "}
              {/* End Row */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
