import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const logout = () => {
  return (
    <div>
      <RaisedButton href="/api/logout" label="Logout" />
    </div>
  );
};

export default logout;
