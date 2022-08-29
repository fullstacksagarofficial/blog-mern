import React, { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { UserContext } from "../../App";
const Register = (props) => {
  // eslint-disable-next-line
  const { state, dispatch } = useContext(UserContext);

  

  const [error, seterror] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const toggleForm = () => {
    props.setProgress(10);
    props.setProgress(50);
    const container = document.getElementById("regForm");
    container.classList.toggle("active");
    props.setProgress(100);
  };

  const topLoadingBar = async () => {
    props.setProgress(10);
    props.setProgress(40);
    props.setProgress(100);
  };
  useEffect(() => {
    topLoadingBar();
    document.title = "Login";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // register user
  const [register, setregister] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleRegisterInputs = (event) => {
    name = event.target.name;
    value = event.target.value;
    setregister({ ...register, [name]: value });
  };

  const PostRegisterData = async (e) => {
    e.preventDefault();

    // object destructuring
    const { username, email, password } = register;
    const res = await fetch("/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    await res.json();
    if (username === "") {
      window.alert(" Name Req ");
    } else {
      
      window.alert("Register Success !");
      // navigate("/");
    }
  };

  // login user
  const [login, setlogin] = useState({
    username: "",
    password: "",
  });
  // let name, value;
  const handleLoginInputs = (event) => {
    name = event.target.name;
    value = event.target.value;
    setlogin({ ...login, [name]: value });
  };

  const PostLoginData = async (e) => {
    e.preventDefault();
    // object destructuring
    const { username, password } = login;
    const res = await fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    // eslint-disable-next-line
    const loginUser = await res.json();
    // if(res.status===401 || !loginUser){
    //   window.alert("Invalid Credentials")
    // }
    if (res.ok) {
      dispatch({ type: "USER", payload: true });
      setSuccess("Login Success");
      seterror(null);
      navigate("/profile");
    } else {
      // throw new Error('Network response was not ok.')
      seterror("Invalid Credentials !");
      setSuccess(null);
    }
  };
  return (
    <>
      <section id="regsec">
        <div className="container" id="regForm">
          <div className="user signinBx">
            <div className="imgBx">
              <img src="images/login.jpg" alt="login" loading="lazy" />
            </div>
            <div className="formBx">
              <form method="post">
                <h2>Sign In</h2>

                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={login.username}
                  onChange={handleLoginInputs}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={login.password}
                  onChange={handleLoginInputs}
                />
                {/* {error}
                {success} */}

                {error && (
                  <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>{error}</strong>
                  </div>
                )}

                {success && (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>{success}</strong>
                  </div>
                )}

                <input
                  type="submit"
                  name="submit"
                  value="Login"
                  onClick={PostLoginData}
                />
                <p className="signup">
                  Don't have an account ?
                  <button
                    type="button"
                    className="btn btn-link shadow-none"
                    onClick={toggleForm}
                  >
                    Sign Up.
                  </button>
                </p>
              </form>
            </div>
          </div>
          <div className="user signupBx">
            <div className="formBx">
              <form method="post">
                <h2>Create an account</h2>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={register.username}
                  onChange={handleRegisterInputs}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={register.email}
                  onChange={handleRegisterInputs}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  value={register.password}
                  onChange={handleRegisterInputs}
                />
                <input
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Password"
                  value={register.cpassword}
                  onChange={handleRegisterInputs}
                />
                <input
                  type="submit"
                  name="submit"
                  value="Sign Up"
                  onClick={PostRegisterData}
                />
                <p className="signup">
                  Already have an account ?
                  <button
                    type="button"
                    className="btn btn-link shadow-none"
                    onClick={toggleForm}
                  >
                    Sign in.
                  </button>
                </p>
              </form>
            </div>
            <div className="imgBx">
              <img src="images/register.jpg" alt="register" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
