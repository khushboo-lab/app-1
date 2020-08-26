import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthComponent = ({
  component: Component, path, exact, authorized,
}) => {
  if (authorized) {
    return <Route component={Component} path={path} exact={exact} />;
  }

  return <Redirect to="/" />;
};

AuthComponent.propTypes = {
  component: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorized: PropTypes.bool.isRequired,
};

const NoAuthComponent = ({
  component: Component, path, exact, authorized,
}) => {
  if (authorized) {
    return <Redirect to="/" />;
  }

  return <Route component={Component} path={path} exact={exact} />;
};

NoAuthComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.object,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorized: PropTypes.bool.isRequired,
};

NoAuthComponent.defaultProps = {
  component: null,
};

function mapStateToProps({ user }) {
  return {
    authorized: user && user.fullName,
  };
}

/*
  AuthenticatedRoute
  should be used for routes which require authentication
*/
export const AuthenticatedRoute = connect(mapStateToProps)(AuthComponent);

/*
  AuthenticatedRoute
  should be used for routes which not require authentication
*/
export const UnauthenticatedRoute = connect(mapStateToProps)(NoAuthComponent);
