import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

// A task. Remove the `title` in the last component.
function App() {
    return (
        <div className="App">
            <Todolist title={123}/>
            <Todolist title={"js"}/>
            <Todolist/>
        </div>
    );
}

export default App;
