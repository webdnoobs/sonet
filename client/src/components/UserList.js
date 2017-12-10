import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";

class UserList extends Component {
  render() {
    const usersObj=this.props.users || {}
    const users=Object.values(usersObj);
    // const userListItems=Object.keys(users).forEach(key=> {return <li key={key}><UserCard/></li>});
    // console.log("list", userListItems);
    const style={
        marginTop: 65
    }
    return (
        <div className="row" style={style}>
            {users.map(user=> <div key={user._id} className="col s4"><UserCard user={user}/></div>)}
        </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(UserList);
