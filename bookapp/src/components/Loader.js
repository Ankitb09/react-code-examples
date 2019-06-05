import React from "react";
import styled, { keyframes } from "styled-components";

//************ Styling starts here *************//
const rotate = keyframes`
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
`;

const LoadingCont = styled.div`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(60, 64, 60, 0.2);
  border-right: 1.1em solid rgba(60, 64, 60, 0.2);
  border-bottom: 1.1em solid rgba(60, 64, 60, 0.2);
  border-left: 1.1em solid #3c403c;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${rotate} 1.1s infinite linear;
  animation: ${rotate} 1.1s infinite linear;
  &::after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;
//************ Styling ends here *************//


const Loader = () => {
  return <LoadingCont />;
};

export default Loader;
