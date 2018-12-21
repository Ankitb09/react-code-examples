import React from 'react';


export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 0
        }
    }
    componentDidMount() {
        this.props.store.subscribe(this.show)
    }

    show = () => {
        this.setState({
            val: this.props.store.getState()
        })
    }

    render() {

        return (
            <div>
                <button onClick={() => { return this.props.store.dispatch({ type: 'Inc' }) }}>Inc</button>
                <button onClick={() => { return this.props.store.dispatch({type: 'Dec'}) }}>Dec</button>
                <div>{this.state.val}</div>
            </div>
        )
    }
}