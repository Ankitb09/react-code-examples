import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createList } from '../actions';

class CreateNew extends Component {

    renderField(field) {
        return (
            <div className="form-group">
                <input placeholder={field.label} className="form-control" type={field.type} {...field.input} />
                <div className="error-text">{field.meta.touched ? field.meta.error : ''}</div>
            </div>
        )
    }
    onSubmit(values) {
        this.props.createList(values, () => {
            this.props.history.push('/');
        })
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <div className="container">

                <form className="create-new-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <h3 className="form-head">New Contact</h3>
                    <Field
                        name="name"
                        component={this.renderField}
                        label="Name"
                        type="text"
                    />
                    <Field
                        name="phone"
                        component={this.renderField}
                        label="Contact Number"
                        type="text"
                    />
                    <Field
                        name="email"
                        component={this.renderField}
                        label="Email"
                        type="email"
                    />
                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link className="btn btn-default" to="/">Cancel</Link >
                </form>
            </div>
        )
    }
}

function validate(values) {
    const error = {};

    if (!values.name) {
        error.name = "Please Enter a Name"
    }
    if (!values.phone) {
        error.phone = "Please Enter Contact Number"
    }
    if (!values.email) {
        error.email = "Please Enter Email"
    }

    return error;
}

export default reduxForm({
    validate,
    form: 'submitValidation' // a unique identifier for this form
})(
    connect(null, { createList })(CreateNew)
)