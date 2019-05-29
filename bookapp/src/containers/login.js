import React, { Component } from "react";
import { connect } from "react-redux";
import { requestLogin } from "../actions/userActions";
import styled from "styled-components";
import {
  Container,
  PrimaryButton,
} from "../CommonStyles";

class Login extends Component {
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

export default connect(
  null,
  { requestLogin }
)(Login);
