import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class CreateNew extends Component {

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input type={field.type} {...field.input}/>
            </div>
        )
    }

    render() {
        return (
            <form>
                <Field
                    name="personName"
                    component={this.renderField}
                    label="Name"
                    type="text"
                />
                <Field
                    name="personName"
                    component={this.renderField}
                    label="Contact Number"
                    type="text"
                />
                <Field
                    name="personName"
                    component={this.renderField}
                    label="Email"
                    type="email"
                />
            </form>
        )
    }
}


export default reduxForm({
    form: 'submitValidation' // a unique identifier for this form
})(CreateNew)