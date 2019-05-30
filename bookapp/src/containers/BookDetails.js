import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserType, subscribeUser } from '../actions/userActions';

class BookDetails extends Component {
    componentDidMount() {
        this.props.getUserType()
    }

    handleSubscription = () => {
        this.props.subscribeUser()
    }

    getBookDetails = () => {
        if (Object.keys(this.props.bookList).length !== 0) {
            console.log(this.props.bookList)
            let { bookList, accessType } = this.props;
            let bookDetils = bookList[this.props.match.params.id];
            let isfreeUser = accessType === "free" ? true : false;
            return (
                <div>
                    <h1>{bookDetils.title}</h1>
                    <div className={isfreeUser ? "hide-content" : ""}>
                        <p>{bookDetils.content}</p>

                        {isfreeUser && <div className="text-center">
                            <button onClick={this.handleSubscription}>Subscribe</button>
                        </div>}
                    </div>
                </div>)
        }
    }

    render() {
        return (
            <div>{this.getBookDetails()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accessType: state.user.accessType,
        bookList: state.discovery.bookList
    }
}

export default connect(mapStateToProps, { getUserType, subscribeUser })(BookDetails);