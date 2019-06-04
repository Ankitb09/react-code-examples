import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Container, TextSpan } from "../CommonStyles";
///import logo from "../images/blinkist-sprites.png";

// ****** App styles: starts here ********
const PageHeader = styled.header`
  min-height: 60px;
  background-color: #ecf1eb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 9;
  display: flex;
`;

const HeaderContainer = styled(Container)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;

const Logo = styled.a`
  display: inline-block;
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
          <HeaderContainer>
            <TextSpan>Login</TextSpan>
          </HeaderContainer>
        </PageHeader>
      </div>
    );
  }
}

export default withRouter(Header);
