import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// A HOC for handling Protected Routes
const ProtectedRoute = ComposedComponent => {
  class Authenticate extends Component {
    render() {
      // Redirecting to Login page if already not logged in.
      let { isAuthenticated } = this.props;
      return (
        <div>
          {isAuthenticated ? (
            <ComposedComponent {...this.props} />
          ) : (
              this.props.history.push("/")
            )}
        </div>
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };
  const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated
  });

  return connect(
    mapStateToProps,
    null
  )(Authenticate);
};

export default ProtectedRoute;
