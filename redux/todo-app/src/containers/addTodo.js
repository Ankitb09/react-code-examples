import React from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../actions'

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.inputElem = '';
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(addTodos(this.inputElem.value));
        this.inputElem.value = ''
    }

    render() {

        return (
            <form onSubmit={this.formSubmit}>
                <input type="text" ref={node => this.inputElem = node} />
                <button>Add</button>
            </form>
        )
    }
}
export default connect()(AddTodo);

