import React, { Component } from 'react';
import {requestCategories} from '../actions/discoveryActions';
import { connect } from 'react-redux';

class Discovery extends Component {
    componentDidMount() {
        this.props.requestCategories();
    }
    
    render(){
        return(
            <div></div>
        )
    }
}



export default connect(null,{requestCategories})(Discovery)