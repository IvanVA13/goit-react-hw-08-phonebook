import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import routes from '../routes';
import { getIsAuthenticated } from '../redux/auth';

export const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={routes.contacts} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PublicRoute.propTypes = {
  props: PropTypes.shape({
    component: PropTypes.node.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
