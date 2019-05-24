import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestLogin } from '../actions';

class Login extends Component {

    handleClick = () => {
        this.props.requestLogin();
    }
    render() {
        return (
            <button className="" onClick={this.handleClick}>Login</button>
        )
    }
}


export default connect(null, { requestLogin })(Login)