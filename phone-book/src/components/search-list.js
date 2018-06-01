import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchList } from '../actions';

class SearchList extends Component {
    constructor(props) {
        super(props)
        this.searchInput = this.searchInput.bind(this);
        this.renderContactLists = this.renderContactLists.bind(this);
    }

    componentDidMount() {
        this.props.fetchList();
    }

    searchInput(e) {
        this.props.fetchList(e.target.value)
    }
    renderContactLists() {
        if (Object.keys(this.props.contactLists).length === 0) {
            return (<li className="error-text text-center">No Contact Found {<Link to="/create/new"> Add a Contact</Link>}</li>)

        } else {
            return _.map(this.props.contactLists, listElem => {
                return (
                    <li key={listElem.id}><Link className="link-text" to={`/show/${listElem.id}`}>{listElem.name}</Link> <a className="ic-call" href={`tel:${listElem.phone}`}><i className="fa fa-phone" aria-hidden="true"></i>
                    </a></li>
                )
            })
        }



    }
    render() {
        return (
            <div>
                <div className="search-bar-cont">
                    <form className="search-form">
                        <input className="search-bar" placeholder="Search Person, Number or Email" onChange={this.searchInput} type="text" />
                    </form>
                    <Link className="link-add" to="/create/new"><i className="fa fa-user-plus" aria-hidden="true"></i> Add</Link>
                </div >
                <div className="list-container">
                    <ul className="contact-list">
                        {this.renderContactLists()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        contactLists: state.contList
    }
}

export default connect(mapStateToProps, { fetchList })(SearchList);