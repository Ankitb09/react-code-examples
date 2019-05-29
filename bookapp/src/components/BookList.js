import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UL, LI } from "../CommonStyles";

const Card = styled.div`

`;

const CardList = styled(UL)`
    display:flex;
`;
const CardListItem = styled(LI)`
`;
const CardImage = styled.div`
`;
const CardTitle = styled.h3`
`;
const CardText = styled.p`
`

const BookList = props => {
  let maps = props.sublist.map((bookId, i) => {
    return (
      <CardListItem key={i}>
        <Card>
          <CardImage>
            <img
              src={props.list[bookId].image_url}
              alt={props.list[bookId].title}
            />
          </CardImage>
          <CardTitle>{props.list[bookId].title}</CardTitle>
          <CardText>
            <NavLink to={`books/${props.list[bookId].id}`}>
              {props.list[bookId].title}{" "}
            </NavLink>
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
