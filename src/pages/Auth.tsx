import React, { useEffect } from "react";
import { setTitle } from "../stores/titleStore";
import { useDispatch } from "react-redux";

function Auth() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Авторизация"));
  }, []);

  return <div>Auth</div>;
}

export default Auth;
