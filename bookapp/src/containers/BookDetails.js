import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUserType, subscribeUser } from "../actions/userActions";
import { requestSelectedBook } from "../actions/bookDetailsActions";

import { NavLink } from "react-router-dom";

import Loader from "../components/Loader";

class BookDetails extends Component {
  componentDidMount() {
    let { bookListPremium } = this.props;
    let { id } = this.props.match.params;

    if (!this.props.accessType) {
      this.props.getUserType();
    }

    let bookId = this.props.match.params.id;
    // if Book is already in state bookListPremium
    if (!(id in bookListPremium)) {
      this.props.requestSelectedBook(bookId);
    }
  }

  handleSubscription = () => {
    this.props.subscribeUser();
  };

  getBookDetails = () => {
    let { bookListPremium, accessType } = this.props;
    let { id } = this.props.match.params;
    let isfreeUser = accessType === "free" ? true : false;

    if (id in bookListPremium) {
      return (
        <div>
          <small>
            <NavLink to="/books">Back</NavLink>
          </small>
          <h1>{bookListPremium[id].title}</h1>
          <div className={isfreeUser ? "hide-content" : ""}>
            <p>{bookListPremium[id].content}</p>

            {isfreeUser && (
              <div className="text-center">
                <button onClick={this.handleSubscription}>Subscribe</button>
              </div>
            )}
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div>{this.props.isLoading ? <Loader /> : this.getBookDetails()}</div>
    );
  }
}

BookDetails.propTypes = {
  accessType: PropTypes.string.isRequired,
  bookListPremium: PropTypes.object.isRequired,
  isLoading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    accessType: state.user.accessType,
    bookListPremium: state.bookDetails.bookListPremium,
    isLoading: state.bookDetails.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getUserType, subscribeUser, requestSelectedBook }
)(BookDetails);
