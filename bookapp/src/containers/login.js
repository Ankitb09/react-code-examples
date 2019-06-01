import React, { Component } from "react";
import { connect } from "react-redux";
import { requestLogin } from "../actions/userActions";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, PrimaryButton } from "../CommonStyles";

import Loader from "../components/Loader";

const LoginContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

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
    return this.props.isLoading ? (
      <Loader />
    ) : (
      <LoginContainer>
        <PrimaryButton onClick={this.handleClick}>Log in</PrimaryButton>
      </LoginContainer>
    );
  }
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  isLoading: state.user.isLoading
});

export default connect(
  mapStateToProps,
  { requestLogin }
)(Login);
