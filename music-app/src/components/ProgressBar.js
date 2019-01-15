import React from 'react';

const ProgressBar = () => {
    return (
        <ul className="progressBar">
            <li className="active">
                <i className="icon-round">1</i>
                <span>SELECT SUBSCRIPTION</span>
            </li>
            <li>
                <i className="icon-round">2</i>
                <span>USER DETAILS</span>
            </li>
            <li>
                <i className="icon-round">3</i>
                <span>PAYMENT DETAILS</span>
            </li>
            <li>
                <i className="icon-round">4</i>
                <span>FINISHED</span>
            </li>
        </ul>
    )
}

export default ProgressBar