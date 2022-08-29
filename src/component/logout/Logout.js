import React, { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const Logout = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const { state, dispatch } = useContext(UserContext);
  //promises

  useEffect(() => {
    fetch('/logout', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).then((res) => {
      dispatch({ type: "USER", payload: false });
      navigate("/register");
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    }).catch((err) => {
      console.log(err);
    });

    // eslint-disable-next-line
  }, [])


  return (
    <>
    </>
  )
}

export default Logout