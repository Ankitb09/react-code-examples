import React, { Component } from 'react';
import SelectSubscription from '../containers/SelectSubscription';
import UserDetails from '../containers/UserDetails';
import CardDetails from '../containers/CardDetails';
import ProgressBar from './ProgressBar'

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
        }
    }

    renderSteps = () => {
        let { currentStep } = this.state;
        switch (currentStep) {
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
            <SelectSubscription next={this.handleNext} />
        )
    }

    step2 = () => {
        return (
            <UserDetails next={this.handleNext} />
        )
    }
    step3 = () => {
        return (
            <CardDetails next={this.handleNext} />
        )
    }

    handleBack = () => {
        this.setState((state) => {
            return { currentStep: state.currentStep - 1 }
        });
    }

    handleNext = (val) => {
        console.log(val)
        this.setState((state) => {
            return { currentStep: state.currentStep + 1 }
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <ProgressBar />
                        {this.renderSteps()}
                    </div>
                </div>
            </div>
        )
    }
}