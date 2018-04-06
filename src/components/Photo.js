import React from "react";
import LazyLoad from "react-lazyload";
import styled from "styled-components";
import { photoPropTypes } from "../helpers/propTypes";

const PhotoListItem = styled.li`
  max-width: 280px;
  text-align: center;
  margin-bottom: 30px;
  padding: 6px;
  margin: 6px;
  background-color: #eee;
  border: 1px solid #ddd;

  figure {
    margin: 0;
  }

  img {
    width: 100%;
  }

  figcaption {
    margin: 0;
    padding: 6px;
  }
`;

const Photo = ({ photo }) => (
  <PhotoListItem>
    <figure>
      <LazyLoad height={280}>
        <img src={photo.url} alt={photo.title} />
      </LazyLoad>
      <figcaption>{photo.title}</figcaption>
    </figure>
  </PhotoListItem>
);

Photo.propTypes = { photo: photoPropTypes };

export default Photo;
