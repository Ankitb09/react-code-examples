import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetails } from '../actions';


class ContactDetails extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchDetails(id);
    }

    render() {
        const { contactDetail } = this.props;

        if (!contactDetail) {
            return <div>Loading...</div>
        }

        return (
            <div className="container">
                <div className="form-group">
                    <label>Name</label>
                    <p>{contactDetail.id}</p>
                </div>
                <div className="form-group">
                    <label>Contact Number</label>
                    <p>{contactDetail.phone}</p>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <p>{contactDetail.email}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ contList }, ownProps) {
    return {
        contactDetail: contList[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchDetails })(ContactDetails);