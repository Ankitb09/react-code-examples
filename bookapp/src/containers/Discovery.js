import React, { Component } from "react";
import {
  requestCategories,
  requestBookList,
  selectCategory
} from "../actions/discoveryActions";
import { connect } from "react-redux";
import BookList from "../components/BookList";
import CategoryList from "../components/CategoryList";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {Container} from "../CommonStyles";


class Discovery extends Component {
  componentDidMount() {
    if (this.props.categories.length == 0) {
      this.props.requestCategories();
    }
    if (Object.keys(this.props.bookList).length == 0) {
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
    return (
      <Container>
        {!loadStatus && (
          <div style={{ display: "flex" }}>
            <div className="left-panel">
              <CategoryList
                categories={this.props.categories}
                filterFn={this.handleFilter}
              />
            </div>
            <div className="right-panel">{this.renderBooks()}</div>
          </div>
        )}
      </Container>
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
