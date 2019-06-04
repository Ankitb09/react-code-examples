import React, { Component } from "react";
import {
  requestCategories,
  requestBookList,
  selectCategory
} from "../actions/discoveryActions";
import { connect } from "react-redux";
import BookList from "../components/BookList";
import CategoryList from "../components/CategoryList";
import styled from "styled-components";
import { Container } from "../CommonStyles";

import Loader from "../components/Loader";

const LeftPanel = styled.div`
  flex: 1 1 auto;
`;

const RightPanel = styled.div`
  flex: 3 1 auto;
`;

class Discovery extends Component {
  componentDidMount() {
    if (this.props.categories.length === 0) {
      this.props.requestCategories();
    }
    if (Object.keys(this.props.bookList).length === 0) {
      this.props.requestBookList();
    }
  }

  handleFilter = category => {
    this.props.selectCategory(category);
  };
  renderBooks = () => {
    let { bookList, categories, selectedCategory } = this.props;

    if (selectedCategory && Object.keys(bookList).length !== 0) {
      let filtered = categories.filter(ele => {
        return ele.id === selectedCategory;
      })[0];

      return <BookList sublist={filtered.book_ids} list={bookList} />;
    }
  };

  render() {
    let { loadStatus } = this.props;
    console.log(this.props)
    return (
      <div>
        {loadStatus > 0 ? (
          <Loader />
        ) : (
          <Container>
            <LeftPanel>
              <CategoryList
                activeCategory={this.props.selectedCategory}
                categories={this.props.categories}
                filterFn={this.handleFilter}
              />
            </LeftPanel>
            <RightPanel>{this.renderBooks()}</RightPanel>
          </Container>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.discovery.categories,
  selectedCategory: state.discovery.selectedCategory,
  loadStatus: state.discovery.isLoading,
  bookList: state.discovery.bookList
});

export default connect(
  mapStateToProps,
  { requestCategories, requestBookList, selectCategory }
)(Discovery);
