import React, {useState} from "react";
import PropTypes from 'prop-types'
import './Excercise.css'
import ResultAlert from "./ResultAlert";

const Exercise = ({countValues, shuffleCountValues}) => {
    const [resultInput, setResultInput] = useState("")

    // getting correct result
    const result = (countValues.a + countValues.b).toString()

    return <div className={'main'}>
        <h1>Solve the following count problem:</h1>
        <div className={'exercise-input'}>
            <h1>{countValues.a} + {countValues.b} = </h1>
            <input
                type={"number"}
                value={resultInput}
                onChange={(e) => {
                    setResultInput(e.target.value)
                }}
            />
        </div>
        <ResultAlert
            resultValue={result}
            inputValue={resultInput}
            shuffleCountValues={() => {
                setResultInput("")
                shuffleCountValues();
            }}
        />
    </div>
}

Exercise.propTypes = {
    countValues: PropTypes.object.isRequired,
    shuffleCountValues: PropTypes.func.isRequired
}

export default Exercise;
