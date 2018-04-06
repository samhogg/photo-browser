import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Emoji from "./Emoji";
import { albumPropTypes, userPropTypes } from "../helpers/propTypes";

const StyledEmoji = styled(Emoji)``;

const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  margin-right: 6px;

  ${StyledEmoji} {
    transition: opacity 0.1s ease-in-out;
    opacity: 0.5;
  }

  &:hover {
    text-decoration: none;

    ${StyledEmoji} {
      opacity: 1;
    }
  }

  &:after {
    content: ">";
    padding: 0 6px 0 0;
    display: inline-block;
    font-size: 0.8em;
    vertical-align: text-top;
    font-weight: 400;
    color: #999;
  }

  &:last-child {
    ${StyledEmoji} {
      opacity: 1;
    }
    :after {
      display: none;
    }
  }
`;

const Heading = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: 10px;
`;

const BreadcrumbHeading = ({ user, album }) => (
  <h2>
    <BreadcrumbLink to="/">
      <StyledEmoji label="Users" emoji="👩🏽‍💼" />
      <Heading>{!user && !album && "Users"}</Heading>
    </BreadcrumbLink>
    {(album || user) && (
      <BreadcrumbLink to={`/users/${user ? user.id : album.userId}`}>
        <StyledEmoji label="Albums" emoji="📸" />
        <Heading>{user && `${user.name}'s Albums`}</Heading>
      </BreadcrumbLink>
    )}
    {album && (
      <BreadcrumbLink to={`/users/${album.userId}/albums/${album.id}`}>
        <StyledEmoji label="Photos" emoji="🖼" />
        <Heading>{album.title}</Heading>
      </BreadcrumbLink>
    )}
  </h2>
);

BreadcrumbHeading.propTypes = {
  album: albumPropTypes,
  user: userPropTypes
};

export default BreadcrumbHeading;
