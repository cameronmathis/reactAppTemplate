import React from "react";
import { GoogleLogin } from "react-google-login";
import useStore from "../Store";
import * as styles from "./css/Login.module.css";

function Login() {
  const setCurrentUser = useStore((state) => state.setCurrentUser);
  const onSuccess = (res) => {
    let profile = res.profileObj;
    profile.tokens = 0;
    setCurrentUser(profile);
  };

  return (
    <div className={styles.container}>
      <GoogleLogin
        className={styles.button}
        clientId="362995526144-7f6nu431qe0khuodrgntco6opohmonp6.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onSuccess}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      ></GoogleLogin>
    </div>
  );
}

export default Login;
