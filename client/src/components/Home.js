import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

class Home extends Component {
  render() {
    const user = this.props.auth || "";
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s3">
              <ul
                id="snav"
                className="side-nav fixed"
                style={{ marginTop: 65 }}
              >
                <div className="user-view">
                  <div className="background">
                    <img src="https://media.istockphoto.com/photos/abstract-network-connection-background-picture-id509731276?k=6&m=509731276&s=612x612&w=0&h=C8_3Gb8V7DHKZnO1BP-BHYKYfTvxxqJAM29OtvaC7Qs=" />
                  </div>
                  <img
                    className="circle"
                    src="https://at-cdn-s01.audiotool.com/2013/01/10/users/kmnoonan/avatar256x256-a2ed91cddc8e4316ae8bc8341cf948ee.jpg"
                  />
                  <p className="white-text name">
                    {user.fname} {user.lname}
                  </p>
                  <p className="white-text email">{user.email}</p>
                </div>
                <li>
                  <a href="#!">Profile</a>
                </li>
                <li>
                  <a href="#!">Friends</a>
                </li>
                <li>
                  <a href="#!">People</a>
                </li>
                <li>
                  <div className="divider" />
                </li>
                <li>
                  <a href="#!">Settings</a>
                </li>
                <li>
                  <a href="#!">About</a>
                </li>
              </ul>
            </div>
            <div className="col s9">
              <h1>Hello {user.fname}!</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Home);
