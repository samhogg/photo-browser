import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import api from "../helpers/apiEnhancer";
import Photo from "../components/Photo";
import BreadcrumbHeading from "../components/BreadcrumbHeading";
import { photoPropTypes, albumPropTypes } from "../helpers/propTypes";

const PhotoList = styled.ul`
  max-width: 100%;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
`;

const Photos = ({ photos, album }) => (
  <div>
    <BreadcrumbHeading album={album} />
    <PhotoList>
      {photos.map(photo => <Photo key={photo.id} photo={photo} />)}
    </PhotoList>
  </div>
);

Photos.propTypes = {
  photos: PropTypes.arrayOf(photoPropTypes).isRequired,
  album: albumPropTypes.isRequired
};

export default api("photos", props => !props.photos, "album")(Photos);
