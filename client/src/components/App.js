import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import Auth from "./Auth";
import Home from "./Home";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/login" component={Auth} />
              <Route
                path="/"
                component={
                  this.props.auth !== false
                    ? Home
                    : () => <Redirect to="/login" />
                }
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(App);
