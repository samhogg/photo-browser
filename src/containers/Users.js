import React from "react";
import PropTypes from "prop-types";
import api from "../helpers/apiEnhancer";
import User from "../components/User";
import BreadcrumbHeading from "../components/BreadcrumbHeading";
import LinkList from "../components/LinkList";
import { userPropTypes } from "../helpers/propTypes";

const Users = ({ users }) => (
  <div>
    <BreadcrumbHeading />
    <LinkList>{users.map(user => <User key={user.id} user={user} />)}</LinkList>
  </div>
);

Users.propTypes = {
  users: PropTypes.arrayOf(userPropTypes)
};

export default api("users", props => !props.users)(Users);
