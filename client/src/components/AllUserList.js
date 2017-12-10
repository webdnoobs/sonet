import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserList } from "./../actions";
import UserList from "./UserList";

class AllUserList extends Component {
  componentDidMount() {
    this.props.fetchUserList();
  }
  render() {
    const users = this.props.users || {};
    return (
      <div>
        <UserList users={users} />
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps, { fetchUserList })(AllUserList);
