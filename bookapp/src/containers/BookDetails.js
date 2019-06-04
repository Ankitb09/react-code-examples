import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUserType, subscribeUser } from "../actions/userActions";
import { requestSelectedBook } from "../actions/bookDetailsActions";

import Loader from "../components/Loader";
import styled from "styled-components";
import { Container, H1, PrimaryButton , Paragraph} from "../CommonStyles";


const DetailedCont = styled(Container)`
  flex-direction: column;
  margin-top:40px;
`;

const H1Head = styled(H1)`
  flex: 1 100%;
  font-size: 35px;
  font-weight:500;
`;

const Content = styled.div`
  flex: 1 100%;
  position: relative;
  & p{
    margin-top:20px
  }

  ${(props) => props.hideContent && `
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
  text-align:center;
  width:100%;
`

export class BookDetails extends Component {
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
          <DetailedCont>
            <H1Head>{bookListPremium[id].title}</H1Head>
            <Content hideContent={isfreeUser}>
              <Paragraph>{bookListPremium[id].content}</Paragraph>
              {isfreeUser && (
                <SubscriptionBtnCont>
                  <PrimaryButton onClick={this.handleSubscription}>Subscribe to Read</PrimaryButton>
                </SubscriptionBtnCont>
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
