import React, { Component } from 'react';

var firebase = require('firebase');
var uuid = require('uuid');

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
    questSubmit(e){

        var x = new FormData();
        console.log(x)
        e.preventDefault();

    }
    render() {
        var studentName;
        var questions;
        if (this.state.studentName === '' && this.state.isSubmitted === false) {
            studentName = <div>
                <h3>Please enter your name</h3>
                <form onSubmit={this.nameSubmit}>
                    <input type="text" placeholder="enter name" ref="name" />
                </form>
            </div>
        } else if (this.state.studentName !== '' && this.state.isSubmitted === false) {
            studentName = <div>Welcome, {this.state.studentName}</div>;
            questions = <div>
                <h2>Here are some questions</h2>
                <form onSubmit={this.questSubmit}>
                    <div className="card form-group">
                        <label>What kind of courses you like most</label>
                        <div className="radio">
                            <label><input className="form-control" type="radio" onChange={this.onSelect} name="quest1" value="Technology" />
                            Technology
                            </label>
                        </div>
                        <div className="radio">
                            <label><input className="form-control" type="radio" onChange={this.onSelect} name="quest1" value="Technology" />
                            Design
                            </label>
                        </div>
                        <div className="radio">
                            <label><input className="form-control" type="radio" onChange={this.onSelect} name="quest1" value="Technology" />
                            Marketing
                            </label>
                        </div>
                    </div>
                    <div className="card form-group">
                        <label>You are a:</label>
                        <div className="radio">
                            <label><input className="form-control" type="radio" onChange={this.onSelect} name="quest2" value="Student" />
                            Student
                            </label>
                        </div>
                        <div className="radio">
                            <label><input className="form-control" type="radio" onChange={this.onSelect} name="quest2" value="Job Seeker" />
                            Job Seeker
                            </label>
                        </div>
                        <div className="radio">
                            <label><input className="form-control" type="radio" onChange={this.onSelect} name="quest2" value="Professional" />
                            Professional
                            </label>
                        </div>
                    </div>
                    <div className="card form-group">
                    <label>Do you Prefer online learning</label>
                    <div className="radio">
                        <label><input className="form-control" type="radio" onChange={this.onSelect} name="quest3" value="Yes" />
                        Yes
                        </label>
                    </div>
                    <div className="radio">
                        <label><input className="form-control" type="radio" onChange={this.onSelect} name="quest3" value="No" />
                        No
                        </label>
                    </div>
                    <div className="radio">
                        <label><input className="form-control" type="radio" onChange={this.onSelect} name="quest3" value="Maybe" />
                        Maybe
                        </label>
                    </div>
                </div>
                <input type="submit" value="submit"/>
                </form>
            </div>
        }
        return (
            <div>
                {studentName}

                -------

                {questions}
            </div>
        )
    }
}

export default Usurvey;