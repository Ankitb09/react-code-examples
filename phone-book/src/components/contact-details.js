import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDetails, deletePost } from '../actions';


class ContactDetails extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchDetails(id);
    }
    ondeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        })
    }

    render() {
        const { contactDetail } = this.props;

        if (!contactDetail) {
            return <div>Loading...</div>
        }

        return (
            <div className="container">
                <div className="inner-container">
                    <div className="clearfix mtb-10 text-left">
                        <Link to="/">&lt; Back</Link>
                        <button onClick={this.ondeleteClick.bind(this)} className="pull-right"><i className="fa fa-trash" aria-hidden="true"></i>
                            Delete
                        </button>
                    </div>

                    <div className="form-group text-center">
                        <p>{contactDetail.name}</p>
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
            </div>
        )
    }
}

function mapStateToProps({ contList }, ownProps) {
    return {
        contactDetail: contList[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchDetails, deletePost })(ContactDetails);