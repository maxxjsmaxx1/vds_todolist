import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

// A task. Draw three components.
//     Pass to the first component in the string `<h3>What to learn</h3>` "123", to the second "js", to the third "45"
function App() {
    return (
        <div className="App">
            <Todolist/>
        </div>
    );
}

export default App;
