import React from "react";
import PropTypes from "prop-types";
import api from "../helpers/apiEnhancer";
import Album from "../components/Album";
import BreadcrumbHeading from "../components/BreadcrumbHeading";
import LinkList from "../components/LinkList";
import {
  albumPropTypes,
  matchPropTypes,
  userPropTypes
} from "../helpers/propTypes";

const Albums = ({ albums, user, match }) => (
  <div>
    <BreadcrumbHeading user={user} />
    <LinkList>
      {albums.map(album => (
        <Album key={album.id} match={match} album={album} />
      ))}
    </LinkList>
  </div>
);

Albums.propTypes = {
  albums: PropTypes.arrayOf(albumPropTypes).isRequired,
  match: matchPropTypes.isRequired,
  user: userPropTypes.isRequired
};

export default api("albums", props => !props.albums, "user")(Albums);
