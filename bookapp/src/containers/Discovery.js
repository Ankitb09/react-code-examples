import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  requestCategories,
  requestBookList,
  selectCategory
} from "../actions/discoveryActions";
import { connect } from "react-redux";
import BookList from "../components/BookList";
import CategoryList from "../components/CategoryList";

// importing Styled components
import styled from "styled-components";
import { Container } from "../CommonStyles";

// importing Helper Component
import Loader from "../components/Loader";

//************ Styling starts here *************//
const LeftPanel = styled.div`
  flex: 1 1 auto;
`;

const RightPanel = styled.div`
  flex: 3 1 auto;
`;
//************ Styling ends here *************//


class Discovery extends Component {
  componentDidMount() {
    // Requesting Category list if not available 
    if (this.props.categories.length === 0) {
      this.props.requestCategories();
    }

    // Requesting Books list if not available 
    if (Object.keys(this.props.bookList).length === 0) {
      this.props.requestBookList();
    }
  }

  handleFilter = category => {
    this.props.selectCategory(category);
  };

  // Filtering and rendering books on basis of Selected Category.
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

Discovery.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  loadStatus: PropTypes.number,
  bookList: PropTypes.object.isRequired
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
