import React, { Component } from 'react';

export default class UserDetails extends Component {

    constructor(props) {
        super(props);

    }

    next = ()=>{
        this.props.next(2)
    }

    render() {
        return (
            <form>
                <input type="text"/>
                <input type="text"/>
                <button type="button" onClick={this.next}>Next</button>
            </form>
        )
    }
}