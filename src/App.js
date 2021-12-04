import {useState} from "react";
import './App.css'

import Header from "./components/Header";
import Exercise from "./components/Excercise";

function App() {
    // Generating count values
    // Generating these values inside of child component
    // would trigger changing values each time when user enters a value
    const [countValues, setCountValues] = useState(getRandomValues)

    return (
        <>
            <Header/>
            <Exercise
                countValues={countValues}
                shuffleCountValues={() => {
                    // updating initial numbers to add
                    setCountValues(getRandomValues)
                }}
            />
        </>
    );
}

function getRandomValues() {
    return {
        a: Math.floor(Math.random() * 100),
        b: Math.floor(Math.random() * 100)
    }
}

export default App;
