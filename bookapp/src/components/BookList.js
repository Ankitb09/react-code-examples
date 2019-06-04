import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UL, LI } from "../CommonStyles";

const Card = styled.div`

`;

const CardList = styled(UL)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: forward;
  justify-content: space-around;
`;
const CardListItem = styled(LI)`
  list-style: none;
  flex: 22%;
  max-width: 22%;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 0 10px 25px 10px;
  text-align: center;
  @media (max-width: 420px) {
    flex: 100%;
    max-width: 100%;
  }
`;

const CardImage = styled.figure`
  display: block;
  width: 100%;
  height: 200px;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 165px;
  }
  & img {
    max-width: 100%;
  }
  a {
    display: block;
  }
`;

const NavLinkStyled = styled(NavLink)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #272727;
  &:hover {
    background: #f1f1f1;
  }
`;

const CardTitle = styled.h3`
  line-height: 1.2;
  min-height: 18px;
  font-size: 1.4rem;
`;
const CardText = styled.div`
  border-top: 1px solid #efefef;
`;

const BookList = props => {
  let maps = props.sublist.map((bookId, i) => {
    return (
      <CardListItem key={i}>
        <Card>
          <CardImage>
            <NavLink to={`books/${props.list[bookId].id}`}>
              <img
                src={props.list[bookId].image_url}
                alt={props.list[bookId].title}
              />
            </NavLink>
          </CardImage>
          <CardTitle>{props.list[bookId].title}</CardTitle>
          <CardText>
            <NavLinkStyled to={`books/${props.list[bookId].id}`}>
              READ
            </NavLinkStyled>
          </CardText>
        </Card>
      </CardListItem>
    );
  });

  return (
    <div>
      <CardList>{maps}</CardList>
    </div>
  );
};

export default BookList;
