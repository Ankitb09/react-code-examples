import React, { Component } from 'react';
import SelectSubscription from '../containers/SelectSubscription';
import UserDetails from '../containers/UserDetails';
import CardDetails from '../containers/CardDetails';
import ProgressBar from './ProgressBar'

export default class App extends Component {

    constructor(props) {
        super(props);

        this.setState = {
            currentStep: 1
        }
    }

    renderSteps = (step) => {
        switch (step) {
            case 1:
                return this.step1()
            case 2:
                return this.step2()
            case 3:
                return this.step3()
            default:
                return <SelectSubscription />
        }
    }

    step1 = () => {
        return (
            <SelectSubscription />
        )
    }

    step2 = () => {
        return (
            <UserDetails />
        )
    }
    step3 = () => {
        return (
            <CardDetails />
        )
    }

    render() {
        return (
            <div>
                <ProgressBar />
                {this.renderSteps(2)}
            </div>
        )
    }
}