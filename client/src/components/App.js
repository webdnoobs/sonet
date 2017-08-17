import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { fetchUser } from "../actions";
import Login from "./login";
import Logout from "./logout";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  renderAuth() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return Login;
      default:
        return Logout;
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <BrowserRouter>
            <div>
              <Route path="/" component={this.renderAuth()} />
            </div>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(App);
