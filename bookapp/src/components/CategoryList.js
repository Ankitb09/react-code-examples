import React from "react";
import styled from "styled-components";
import { UL, LI } from "../CommonStyles";
import PropTypes from "prop-types";

//************ Styling starts here *************//
UL.displayName = 'CategoryUL';
const List = styled(LI)`
  margin: 5px 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${(props)=> props.active &&`
    text-decoration: underline;
  `}
`;
List.displayName = 'CategoryLI';
//************ Styling ends here *************//

const CategoryList = props => {
  // Mapping on Category list
  let mappedList = props.categories.map(ele => {
    return (
      <List semiBold key={ele.id} active={props.activeCategory===ele.id} onClick={() => props.filterFn(ele.id)}>
        {ele.title}
      </List>
    );
  });
  return <UL>{mappedList}</UL>;
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  filterFn: PropTypes.func.isRequired,
  activeCategory: PropTypes.string.isRequired
}

export default CategoryList;
