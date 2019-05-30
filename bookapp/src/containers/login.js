import React, { Component } from "react";
import { connect } from "react-redux";
import { requestLogin } from "../actions/userActions";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Container, PrimaryButton } from "../CommonStyles";

class Login extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/books");
    }
  }

  handleClick = () => {
    this.props.requestLogin().then(res => {
      this.props.history.push("/books");
    });
  };

  render() {
    return (
      <Container>
        <PrimaryButton onClick={this.handleClick}>Login</PrimaryButton>
      </Container>
    );
  }
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(
  mapStateToProps,
  { requestLogin }
)(Login);
