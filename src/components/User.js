import React from "react";
import { Link } from "react-router-dom";
import { userPropTypes } from "../helpers/propTypes";

const User = ({ user }) => (
  <li>
    <Link to={`/users/${user.id}`}>{user.name}</Link>
  </li>
);

User.propTypes = {
  user: userPropTypes
};

export default User;
