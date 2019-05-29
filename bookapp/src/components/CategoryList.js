import React from "react";
import styled from "styled-components";
import { UL, LI } from "../CommonStyles";

const List = styled(LI)`
  margin: 5px 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CategoryList = props => {
  let mappedList = props.categories.map(ele => {
    return (
      <List semiBold key={ele.id} onClick={() => props.filterFn(ele.id)}>
        {ele.title}
      </List>
    );
  });
  return <UL>{mappedList}</UL>;
};

export default CategoryList;
