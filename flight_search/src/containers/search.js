import React, { Component } from 'react';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
                originCity: '',
                destCity:'',
                depDate: '',
                returnDate: '',
                passengerNo:''

        };

        this.formValues = this.formValues.bind(this);
    }

    formValues(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        const {originCity,destCity,depDate,returnDate,passengerNo} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <form name="">
                            <div className="form-group">
                                <label htmlFor="originCity">Enter Origin City</label>
                                <input name="originCity" className="form-control" id="originCity" type="text" onChange={this.formValues} value={originCity} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="destCity">Enter Destination City</label>
                                <input name="destCity" className="form-control" id="destCity" type="text" onChange={this.formValues} value={destCity} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="depDate">Enter Departure Date</label>
                                <input name="depDate" className="form-control" id="depDate" placeholder="hi" type="date" onChange={this.formValues} value={depDate} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="returnDate">Enter Return Date</label>
                                <input name="returnDate" className="form-control" id="returnDate" placeholder="hi" type="date" onChange={this.formValues} value={returnDate} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passengerNo">Enter No of Passenger</label>
                                <input name="passengerNo" className="form-control" id="passengerNo" type="text" onChange={this.formValues} value={passengerNo} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;