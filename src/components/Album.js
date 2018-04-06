import React from "react";
import { Link } from "react-router-dom";
import { albumPropTypes, matchPropTypes } from "../helpers/propTypes";

const Album = ({ album, match }) => (
  <li>
    <Link to={`${match.url}/albums/${album.id}`}>{album.title}</Link>
  </li>
);

Album.propTypes = {
  album: albumPropTypes.isRequired,
  match: matchPropTypes.isRequired
};

export default Album;
