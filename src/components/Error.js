import React from "react";
import PropTypes from "prop-types";

const ErrorRenderer = ({ error }) => <div>Error: {error.message}</div>;

ErrorRenderer.propTypes = {
  error: PropTypes.instanceOf(Error)
};

export default ErrorRenderer;
