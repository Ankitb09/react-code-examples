import React, { Component } from "react";
import { connect } from "react-redux";
import { requestLogin } from "../actions/userActions";
import PropTypes from "prop-types";

// importing Styled components
import styled from "styled-components";
import { Container, PrimaryButton } from "../CommonStyles";

// importing Helper Component
import Loader from "../components/Loader";

//************ Styling starts here *************//
const LoginContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  flex-direction: column;
`;

const Heading = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.25;
    color: #8155FB;
    font-family:'Montserrat', sans-serif;
`;
//************ Styling ends here *************//

class Login extends Component {
  componentDidMount() {
    // Checking whether User already logged in and Redirecting it to books[discovery] page
    if (this.props.isAuthenticated) {
      this.props.history.push("/books");
    }
  }

  handleClick = () => {
    // Redirecting User to books[discovery] page after login success
    this.props.requestLogin().then(res => {
      this.props.history.push("/books");
    });
  };

  render() {
    return this.props.isLoading ? (
      <Loader />
    ) : (
      <LoginContainer>
        <Heading>Login into BookApp</Heading>
        <PrimaryButton onClick={this.handleClick}>Log in</PrimaryButton>
      </LoginContainer>
    );
  }
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  isLoading: state.user.isLoading
});

export default connect(
  mapStateToProps,
  { requestLogin }
)(Login);
