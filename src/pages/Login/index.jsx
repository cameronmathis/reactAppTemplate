import React from "react";
import { GoogleLogin } from "react-google-login";

import useStore from "../../Store";
import * as styles from "./css/index.module.css";

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
        clientId="742956772598-2fcg5pvi80osim0oqgnq6lvueu9s24dm.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onSuccess}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      ></GoogleLogin>
    </div>
  );
}

export default Login;
