import React from 'react';
import "./style.css";

const Tasks = ({ taskTable, hideDone, removeTask }) => (
    <ul className="list__tasks">
        {taskTable.map(task =>
            <li key={task.id} className={`list__item ${task.done && hideDone ? "list__item--hidden" : ""}`}>
                <button className="list__button list__button--done">{task.done ? "✔" : " "}</button>
                <span className={`list__taskContent ${task.done ? " list__taskContent--done" : ""}`}> {task.content} </span>
                <button
                    className="list__button list__button--remove"
                    onClick={() => removeTask(task.id)}>
                    🗑
                </button>
            </li>
        )}
    </ul>
);

export default Tasks;