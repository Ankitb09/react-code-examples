import styled, { css, createGlobalStyle } from "styled-components";

// some global / common styles : start
export const GlobalStyle = createGlobalStyle`
  html, body {
    height:100%;
    background: #f8f8f8;    
    color: #343434;
    font-size: 62.5%;
    font-family: 'Source Sans Pro', 'Trebuchet MS', Helvetica, sans-serif;
  }
  html, body, figure {
    padding: 0;
    margin: 0;
  }
  body{
    font-size: 1.6rem;
  }
  *{box-sizing: border-box;}
`;

export const PageHeading = styled.div`
  text-align: center;
  margin: 4% 0;
`;

export const Headings = css`
  color: #343434;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin: 0;
`;

export const H1 = styled.h1`
  ${Headings}
  font-size: 32px;
  line-height: 38px;
  @media (max-width: 420px) {
    font-size: 24px;
  }
`;

export const H2 = styled.h2`
  ${Headings}
  font-size: 16px;
  line-height: 30px;
`;

export const Paragraph = styled.p`
  line-height: 24px;
  font-size: ${props => (props.textSmall ? "14px" : "16px")};
  margin: ${props => (props.textSmall ? "0" : "15px 0")};
  br {
    display: none @media (max-width: 420px) {
      display: inline;
    }
  }
`;

export const TextSpan = styled.span`
  ${Paragraph};
  display: inline-block;
  float: ${props => (props.textRight ? "right" : "none")};
  color: ${props => (props.textMuted ? "#b0aba3" : "inherit")};
  margin: ${props => (props.vSpace ? "10px 0" : "0 15px 0 0")};
`;

export const TextStrong = styled.strong`
  font-size: inherit;
  font-weight: 600;
`;

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width:100%;
  display:flex;
  flex-direction: row;
  padding-left:15px;
  padding-right:15px;
`;

export const UL = styled.ul`
  padding: 0 0 0 15px;
  list-style: none;
`;

export const LI = styled.li`
  line-height: 2;
  font-weight : ${props => (props.semiBold ? 600 : 400)};
`;

export const PrimaryButton = styled.button`
  background-color: #2ce080;
  border: #2ce080 2px solid;
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.25;
  padding: 0.625rem 1rem;
  text-align: center;
  text-decoration: none;
  outline: none;
  min-width: 150px;
  cursor:pointer;
`;

// some global / common styles : ends
