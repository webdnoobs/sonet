import React, { Component } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

class Auth extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab">
              <a className="active" href="#login">
                Login
              </a>
            </li>
            <li className="tab">
              <a href="#signup">SignUp</a>
            </li>
          </ul>
        </div>
        <div className="card-content grey lighten-4">
          <div id="login">
            <Login />
          </div>
          <div id="signup">
            <SignUp />
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
