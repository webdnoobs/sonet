import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Poster from "./Poster";
import NewsFeed from "./NewsFeed";
import PostList from "./PostsList";
import FriendList from "./FriendList";
import AllUserList from "./AllUserList";
import Settings from "./Settings";
import About from "./About";

class Home extends Component {
  render() {
    const user = this.props.auth || {};
    return (
      <div>
        <style>{'body { background-image: url("https://cdn.pixabay.com/photo/2017/01/18/08/25/social-1989152_960_720.jpg"); }'}</style>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s3">
              <ul
                id="snav"
                className="side-nav fixed indigo accent-1"
                style={{ marginTop: 65}}
              >
                <div className="user-view">
                  <div className="background">
                    <img
                      src="https://media.istockphoto.com/photos/abstract-network-connection-background-picture-id509731276?k=6&m=509731276&s=612x612&w=0&h=C8_3Gb8V7DHKZnO1BP-BHYKYfTvxxqJAM29OtvaC7Qs="
                      alt="Background"
                    />
                  </div>
                  <img
                    className="circle"
                    src={
                      user.profile_pic ||
                      "https://at-cdn-s01.audiotool.com/2013/01/10/users/kmnoonan/avatar256x256-a2ed91cddc8e4316ae8bc8341cf948ee.jpg"
                    }
                    alt="Profile Pic"
                  />
                  <p className="white-text name">
                    {user.fname} {user.lname}
                  </p>
                  <p className="white-text email">{user.email}</p>
                </div>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/friends">Friends</Link>
                </li>
                <li>
                  <Link to="/people">People</Link>
                </li>
                <li>
                  <div className="divider" />
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
            <div className="col s9">
              <Route path="/" exact={true} component={PostList} />
              <Route path="/friends" exact={true} component={FriendList} />
              <Route path="/people" exact={true} component={AllUserList} />
              <Route path="/settings" exact={true} component={Settings} />
              <Route path="/about" exact={true} component={About} />
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
