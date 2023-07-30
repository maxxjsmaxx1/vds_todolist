import React from "react";



export const Todolist = () => {
    return (
        <div>
            <h3>what's to learn</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" readOnly={true} checked={true}/> <span>HTML&CSS</span></li>
                <li><input type="checkbox" readOnly={true} checked={true}/> <span>JS</span></li>
                <li><input type="checkbox" readOnly={true} checked={false}/> <span>React</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}