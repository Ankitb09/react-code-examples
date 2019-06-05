import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUserType, subscribeUser } from "../actions/userActions";
import { requestSelectedBook } from "../actions/bookDetailsActions";

// importing Styled components
import styled from "styled-components";
import { Container, H1, PrimaryButton, Paragraph } from "../CommonStyles";

// importing Helper Component
import Loader from "../components/Loader";

//************ Styling starts here *************//
const DetailedCont = styled(Container)`
  flex-direction: column;
  margin-top: 40px;
`;

const H1Head = styled(H1)`
  flex: 1 100%;
  font-size: 35px;
  font-weight: 500;
`;

const Content = styled.div`
  flex: 1 100%;
  position: relative;
  & p {
    margin-top: 20px;
  }

  ${props =>
    props.hideContent &&
    `
    ::after{
      content: ' ';
      display: block;
      position:relative;
      margin-top: -150px;
      height: 150px;
      width: 100%;
      background-image: linear-gradient(to bottom,rgba(255,255,255,0) 0,#f8f8f8 100%);
    }
  `}
`;

const SubscriptionBtnCont = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
`;
//************ Styling ends here *************//


export class BookDetails extends Component {
  componentDidMount() {
    let { detailedBooks } = this.props;

    // Getting id on the basis of Route params
    let { id } = this.props.match.params;

    // Checking if we already know about user type
    if (!this.props.accessType) {
      this.props.getUserType();
    }

    let bookId = this.props.match.params.id;
    
    /*
     *  Preventing duplicate network call 
        if Book is already preset in Store object "detailedBooks"
     */ 
    if (!(id in detailedBooks)) {
      this.props.requestSelectedBook(bookId);
    }
  }

  handleSubscription = () => {
    /*
     *    We can trigger our payment flow from this handler.
     *    Currently marking user as premium on button click.
     */ 
    this.props.subscribeUser();
  };

  getBookDetails = () => {
    let { detailedBooks, accessType } = this.props;
    let { id } = this.props.match.params;
    let isfreeUser = accessType === "free" ? true : false;

    if (id in detailedBooks) {
      return (
        <div>
          <DetailedCont>
            <H1Head>{detailedBooks[id].title}</H1Head>
            <Content hideContent={isfreeUser}>
              <Paragraph>{detailedBooks[id].content}</Paragraph>
              {isfreeUser ? (
                // Subscription button if user is not Premium
                <SubscriptionBtnCont>
                  <PrimaryButton onClick={this.handleSubscription}>
                    Subscribe to Read
                  </PrimaryButton>
                </SubscriptionBtnCont>
              ) : (
                // Premium content which is visible only to premium User
                <Paragraph>{detailedBooks[id].content}</Paragraph>
              )}
            </Content>
          </DetailedCont>
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
  detailedBooks: PropTypes.object.isRequired,
  isLoading: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    accessType: state.user.accessType,
    detailedBooks: state.bookDetails.detailedBooks,
    isLoading: state.bookDetails.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getUserType, subscribeUser, requestSelectedBook }
)(BookDetails);
