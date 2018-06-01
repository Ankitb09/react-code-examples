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
                <div className="inner-container show-details-container">
                    <div className="clearfix mb-20 text-left">
                        <Link to="/">&lt; Back</Link>
                        <button onClick={this.ondeleteClick.bind(this)} className="pull-right btn btn-primary btn-sm"> <i className="fa fa-trash" aria-hidden="true"></i> Delete
                        </button>
                    </div>

                    <div className="form-group pt-10">
                        <p className="person-name">{contactDetail.name}
                            <a className="ic-call" href={`tel:${contactDetail.phone}`}><i className="fa fa-phone" aria-hidden="true"></i>
                            </a>
                        </p>
                    </div>
                    <div className="form-group">
                        <strong>Contact Number: </strong>
                        <span>{contactDetail.phone}</span>
                    </div>
                    <div className="form-group">
                        <strong>Email: </strong>
                        <span>{contactDetail.email}</span>
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