import React from 'react';

const ProgressBar = (props) => {
    const steps = ["SELECT SUBSCRIPTION", "USER DETAILS", "PAYMENT DETAILS", "FINISHED"];

    const ul = steps.map((item, i) => {
        return (<li key={i} className={i + 1 === props.stepNumber ? 'active' : ''}>
            <i className="icon-round">{i + 1}</i>
            <span>{item}</span>
        </li>)
    })

    return (
        <ul className="progressBar">{ul}</ul>
    )

}

export default ProgressBar