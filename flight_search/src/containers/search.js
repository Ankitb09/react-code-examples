import React, { Component } from 'react';


class Search extends Component {
    constructor(props) {
        super(props);
        this.setState({
            form: {
                originCity: ''
            }
        })
    }
    
    formValues(e) {

    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <form name="">
                            <div className="form-group">
                                <label htmlFor="originCity">Enter Origin City</label>
                                <input className="form-control" id="originCity" type="text" onChange={this.formValues} value={this.state.form.originCity} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="destCity">Enter Destination City</label>
                                <input className="form-control" id="destCity" type="text" onChange={this.formValues} value={this.state.form.originCity} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="depDate">Enter Departure Date</label>
                                <input className="form-control" id="depDate" placeholder="hi" type="date" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="returnDate">Enter Return Date</label>
                                <input className="form-control" id="returnDate" placeholder="hi" type="date" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passengerNo">Enter No of Passenger</label>
                                <input className="form-control" id="passengerNo" type="text" defaultValue="" />
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