import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import styles from '../styles/login.css'

const login = () => {
  return (
    <div>
      <RaisedButton href="/auth/google" label="Login" />
    </div>
  );
};

export default login;
