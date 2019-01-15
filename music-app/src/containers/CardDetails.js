import React, { Component } from 'react';

export default class CardDetails extends Component {

    constructor(props) {
        super(props);


    }

    next = ()=>{
        this.props.next(3)
    }

    render() {
        return (
            <form>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <button type="button" onClick={this.next}>Next</button>
            </form>
        )
    }
}