import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Values } from 'redux-form-website-template';
import showResults from './showResults';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { fetchUser } from "../actions";
import Login from "./login";
import Logout from "./logout";
import MaterialUiForm from "./MaterialUiForm";
import loginstyle from '../styles/MaterialUiForm.css';

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
              <div style = {loginstyle.navBar}>
                <div style = {loginstyle.center} >
                  <MaterialUiForm onSubmit={showResults} />
                </div>
              </div>
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
