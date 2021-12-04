import React from "react";
import PropTypes from 'prop-types'

import './ResultAlert.css'

const ResultAlert = ({resultValue, inputValue, shuffleCountValues}) => {
    // if user has not filled in the full answer yet
    if (inputValue.length < resultValue.length) return null;

    if (resultValue === inputValue) {
        // if user solved correctly
        return <div className={"alert success"}>
            Good job! The answer is correct!
            <button
                className={"button"}
                onClick={() => shuffleCountValues()}>
                Restart
            </button>
        </div>
    } else {
        // if user`s solution is wrong
        return <div className={"alert danger"}>
            The answer is incomplete, be more careful.
        </div>
    }
}

ResultAlert.propTypes = {
    resultValue: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    shuffleCountValues: PropTypes.func.isRequired,
}

export default ResultAlert;

