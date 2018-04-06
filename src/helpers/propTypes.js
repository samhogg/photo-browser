import PropTypes from "prop-types";

const albumPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired
});

const matchPropTypes = PropTypes.shape({
  url: PropTypes.string.isRequired,
  params: PropTypes.object
});

const photoPropTypes = PropTypes.shape({
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
});

const userPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
});

export { albumPropTypes, matchPropTypes, photoPropTypes, userPropTypes };
