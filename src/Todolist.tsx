import React from "react";


type TodolistPropsType = {
    tasks: Array<TasksType>
}
type TasksType = {
    id: number
    title: string
    isDone: boolean
}
export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>what's to learn</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" readOnly={true} checked={props.tasks[0].isDone}/>
                    <span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" readOnly={true} checked={props.tasks[1].isDone}/>
                    <span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" readOnly={true} checked={props.tasks[2].isDone}/>
                    <span>{props.tasks[2].title}</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}