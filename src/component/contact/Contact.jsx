import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Contact = (props) => {
  // const navigate = useNavigate();
  const topLoadingBar = async () => {
    props.setProgress(10);
    props.setProgress(40);
    props.setProgress(100);
  };

  const [userData, setuserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  const callUserData = async () => {
    try {
      const res = await fetch("/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      // eslint-disable-next-line
      const data = await res.json();

      // set  email only
      setuserData({ ...userData, email: data.email });

      if (res.status >= 400) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    topLoadingBar();
    callUserData();
    document.title = "Contact Us";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // storing data in states
  const handleInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setuserData({ ...userData, [name]: value });
  };

  // send data to backend
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, message, subject } = userData;
    const res = await fetch("/enquiry", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
        subject: subject,
      }),
    });
    await res.json();
    if (name === "") {
      window.alert("Invalid Name");
    } else {
      window.alert("Success Enquiry");
      // navigate("/");
      // empty form
      setuserData({ ...userData, message: "", subject: "", phone: "" });
    }
  };
  return (
    <div className="container">
      <div className="section-contact">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="header-section text-center">
              <h2 className="title">
                Get In Touch
                <span className="dot"></span>
                <span className="big-title">CONTACT</span>
              </h2>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                consectetur commodo risus, nec pellentesque turpis efficitur
                non.
              </p>
            </div>
          </div>
        </div>

        <div className="form-contact">
          <form method="post">
            <div className="row">
              <div className="col-md-6">
                <div className="single-input">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="ENTER YOUR NAME"
                    value={userData.name}
                    onChange={handleInputs}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-input">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="ENTER YOUR EMAIL"
                    value={userData.email}
                    onChange={handleInputs}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-input">
                  <i className="fas fa-phone"></i>
                  <input
                    type="text"
                    name="phone"
                    placeholder="ENTER YOUR PHONE NUMBER"
                    value={userData.phone}
                    onChange={handleInputs}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="single-input">
                  <i className="fas fa-check"></i>
                  <input
                    type="text"
                    name="subject"
                    placeholder="ENTER YOUR SUBJECT"
                    value={userData.subject}
                    onChange={handleInputs}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="single-input">
                  <i className="fas fa-comment-dots"></i>
                  <textarea
                    placeholder="ENTER YOUR MESSAGE"
                    name="message"
                    onChange={handleInputs}
                    value={userData.message}
                  >
                    {" "}
                  </textarea>
                </div>
              </div>
              <div className="col-12">
                <div className="submit-input text-center">
                  <input
                    type="submit"
                    name="submit"
                    value="SUBMIT NOW"
                    onClick={PostData}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
