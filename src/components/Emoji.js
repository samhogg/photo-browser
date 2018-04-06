import React from "react";
import PropTypes from "prop-types";

// Accessibility boilerplate for emoji
const Emoji = ({ role = "img", label, emoji, className = "" }) => (
  <span role={role} aria-label={label} className={className}>
    {emoji}
  </span>
);

Emoji.propTypes = {
  className: PropTypes.string,
  emoji: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  role: PropTypes.string
};

export default Emoji;
