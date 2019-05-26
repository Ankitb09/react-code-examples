import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestLogin } from '../actions/userActions';

class Login extends Component {

    handleClick = () => {
        this.props.requestLogin().then((res) => {
            this.props.history.push('/discovery')
        });
    }
    render() {
        return (
            <button className="" onClick={this.handleClick}>Login</button>
        )
    }
}


export default connect(null, { requestLogin })(Login)