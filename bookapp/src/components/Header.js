import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Container, SecondryButton } from "../CommonStyles";

// ****** App styles: starts here ********
const PageHeader = styled.header`
  min-height: 60px;
  background-color: #ecf1eb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 9;
`;

const Logo = styled.a`
  display: inline-block;
  background-image: url("../images/blinkist-sprites.png");
  background-position: 0 -273px;
  background-size: 135px;
  width: 134px;
  height: 26px;
  @media (max-width: 1024px) {
    margin-top: 5px;
  }
`;
// ****** App styles: ends here ********

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const path = this.props.location.pathname.slice(1);
    return (
      <div>
        <PageHeader>
          <Container>
            <Logo />
            <SecondryButton>Login</SecondryButton>
          </Container>
        </PageHeader>
      </div>
    );
  }
}

export default withRouter(Header);
