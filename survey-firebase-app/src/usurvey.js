import React, { Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

/// Todo 
/// * update form using refs
/// * Routing
/// * upload file also
/// 


var config = {
    apiKey: "AIzaSyBGz0qhjv92GPFJSlhRgFOPtE3ak0f1n_Y",
    authDomain: "usurvey-797e7.firebaseapp.com",
    databaseURL: "https://usurvey-797e7.firebaseio.com",
    projectId: "usurvey-797e7",
    storageBucket: "usurvey-797e7.appspot.com",
    messagingSenderId: "1022048944575"
};
firebase.initializeApp(config);


class Usurvey extends Component {
    constructor(props) {
        super(props);

        this.nameSubmit = this.nameSubmit.bind(this);
        this.questSubmit = this.questSubmit.bind(this);
        this.onSelect = this.onSelect.bind(this);

        this.state = {
            uid: uuid.v1(),
            studentName: '',
            answers: {
                answer1: '',
                answer2: '',
                answer3: '',
            },
            isSubmitted: false
        }
    }

    nameSubmit() {
        var studentName = this.refs.name.value;
        this.setState({ studentName: studentName }, function () {
            console.log(this.state)
        })
    }
    questSubmit(e) {
        firebase.database().ref('uSurvey/' + this.state.uid).set(
            {
                studentName: this.state.studentName,
                answers: this.state.answers
            }
        )
        this.setState({ isSubmitted: true });
        e.preventDefault();

    }
    onSelect(e) {
        var answers = this.state.answers;

        if (e.target.name === 'quest1') {
            answers.answer1 = e.target.value;
        } else if (e.target.name === 'quest2') {
            answers.answer2 = e.target.value;
        } else if (e.target.name === 'quest3') {
            answers.answer3 = e.target.value;
        }
        this.setState({ answers: answers }, function () {
            console.log(answers)
        })
    }
    render() {
        var studentName;
        var questions;
        if (this.state.studentName === '' && this.state.isSubmitted === false) {
            studentName = <div>
                <h3>Please enter your name</h3>
                <form onSubmit={this.nameSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder="enter name" ref="name" />
                    </div>
                </form>
            </div>
        } else if (this.state.studentName !== '' && this.state.isSubmitted === false) {
            studentName = <div>Welcome, {this.state.studentName}</div>;
            questions = <div>
                <h2>Here are some questions</h2>
                <form onSubmit={this.questSubmit}>
                    <div className="card form-group">
                        <label>What kind of courses you like most</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={this.onSelect} name="quest1" value="Technology" />
                            <label className="form-check-label">Technology</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={this.onSelect} name="quest1" value="Design" />
                            <label className="form-check-label">Design</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={this.onSelect} name="quest1" value="Management" />
                            <label className="form-check-label">Management</label>
                        </div>
                    </div>
                    <div className="card form-group">
                        <label>You are a:</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={this.onSelect} name="quest2" value="Student" />
                            <label className="form-check-label">Student</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={this.onSelect} name="quest2" value="In-Job" />
                            <label className="form-check-label">In-Job</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={this.onSelect} name="quest2" value="Job Seeker" />
                            <label className="form-check-label">Job Seeker</label>
                        </div>
                    </div>
                    <div className="card form-group">
                        <label>Do you Prefer online learning</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={this.onSelect} name="quest3" value="Yes" />
                            <label className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={this.onSelect} name="quest3" value="No" />
                            <label className="form-check-label">No</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" onChange={this.onSelect} name="quest3" value="May Be" />
                            <label className="form-check-label">May Be</label>
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="submit" />
                </form>
            </div>
        } else if (this.state.isSubmitted === true) {
            studentName = <div><h1>Thank you {this.state.studentName}</h1></div>
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">


                        {studentName}

                        -------

                         {questions}
                    </div>
                </div>
            </div>
        )
    }
}

export default Usurvey;