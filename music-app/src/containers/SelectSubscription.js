import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserDetails } from '../actions/';

class SelectSubscription extends Component {

    constructor(props) {
        super(props);
        this.state = {
            duration: 3,
            storageAmount: 5,
            payNow: false
        }
    }

    next = () => {
        this.props.next(1)
        this.props.subscriptionHandler(this.state)
    }

    priceCalculator = () => {
        let { storageAmount, payNow, duration } = this.state;
        let price = storageAmount * duration * 2;
        if (payNow) {
            return price = price - (price * 10 / 100)
        }
        else {
            return price;
        }
    }

    handleOptions = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <form>
                <div className="row">
                    <div className="col-sm-7">
                        <h3>Select Subscription options</h3>
                        <div>
                            <label className="h4">Select Duration</label>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label" htmlFor="inlineRadio1">
                                    <input className="form-check-input" type="radio" name="duration" id="inlineRadio1" value="3" onChange={this.handleOptions} />
                                    3 Months
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label" htmlFor="inlineRadio2">
                                    <input className="form-check-input" type="radio" name="duration" id="inlineRadio2" value="6" onChange={this.handleOptions} />
                                    6 Months</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label" htmlFor="inlineRadio3">
                                    <input className="form-check-input" type="radio" name="duration" id="inlineRadio3" value="12" onChange={this.handleOptions} defaultChecked />
                                    12 Months</label>
                            </div>
                        </div>
                        <div>
                            <label className="h4">Amount of Storage(GB)</label>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label" htmlFor="gbRadio1">
                                    <input className="form-check-input" type="radio" name="storageAmount" id="gbRadio1" value="3" onChange={this.handleOptions} />
                                    3 GB
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label" htmlFor="gbRadio2">
                                    <input className="form-check-input" type="radio" name="storageAmount" id="gbRadio2" value="5" onChange={this.handleOptions} defaultChecked />
                                    5 GB
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label" htmlFor="gbRadio3">
                                    <input className="form-check-input" type="radio" name="storageAmount" id="gbRadio3" value="10" onChange={this.handleOptions} />
                                    10 GB
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label" htmlFor="gbRadio4">
                                    <input className="form-check-input" type="radio" name="storageAmount" id="gbRadio4" value="20" onChange={this.handleOptions} />
                                    20 GB
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label" htmlFor="gbRadio5">
                                    <input className="form-check-input" type="radio" name="storageAmount" id="gbRadio5" value="30" onChange={this.handleOptions} />
                                    30 GB
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label" htmlFor="gbRadio6">
                                    <input className="form-check-input" type="radio" name="storageAmount" id="gbRadio6" value="50" onChange={this.handleOptions} />
                                    50 GB
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="h4">Upfront payment <small>Get 10% discount</small></label>
                            <p></p>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label" htmlFor="payRadio1">
                                    <input className="form-check-input" type="radio" name="payNow" id="payRadio1" value={true} onChange={this.handleOptions} />
                                    Yes
                            </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label" htmlFor="payRadio2">
                                    <input className="form-check-input" type="radio" name="payNow" id="payRadio2" value={false} onChange={this.handleOptions} defaultChecked />
                                    No
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <h3>Total Price</h3>
                        {this.priceCalculator()}
                    </div>
                </div>

                <button type="button" onClick={this.next}>Next</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        subscriptionHandler: (obj) => {
            dispatch(addUserDetails(obj))
        }
    }
}

export default connect(null, mapDispatchToProps)(SelectSubscription);