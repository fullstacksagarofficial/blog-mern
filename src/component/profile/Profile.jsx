import React, { useState, useEffect,useContext } from "react";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const Profile = (props) => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const { state, dispatch } = useContext(UserContext);

  const [userData, setuserData] = useState({});
  const topLoadingBar = async () => {
    props.setProgress(10);
    props.setProgress(40);
    props.setProgress(100);
  };

  const callAboutPage = async () => {
    try {
      const res = await fetch("/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setuserData(data);
      dispatch({ type: "USER", payload: true });
      if (res.status >= 400) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };
  useEffect(() => {
    // eslint-disable-next-line
    topLoadingBar();
    // to change page title
    document.title = "Profile";
    // eslint-disable-next-line react-hooks/exhaustive-deps

    callAboutPage();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container my-5 commonPadding">
      <div className="row">
        <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>{userData.username}</td>
            <td>{userData.email}</td>
          </tr>
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default Profile;
