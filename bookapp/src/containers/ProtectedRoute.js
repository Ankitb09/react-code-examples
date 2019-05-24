import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ProtectedRoute = (ComposedComponent) => {
    class Authenticate extends Component {
        render() {
            let { isAuthenticated } = this.props;
            console.log(this.props)
            return (
                <div>
                    {isAuthenticated ? (<ComposedComponent {...this.props} />) : this.props.history.push('/')}
                </div>
            )
        }
    }

    Authenticate.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired
    }
    const mapStateToProps = (state) => {
        console.log(state)
        return {
            isAuthenticated: state.user.isAuthenticated
        }
    }

    return connect(mapStateToProps, null)(Authenticate);
}

export default ProtectedRoute;