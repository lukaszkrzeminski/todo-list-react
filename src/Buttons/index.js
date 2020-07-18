import React from 'react';
import "./style.css";

const Buttons = ({ hideDoneTasks, taskTable }) => {
    if (taskTable.length === 0) {
        return null;
    }

    return (
        <span className="list__functionButton">
            <button
                className="list__button--showDone"
            >
                {hideDoneTasks ? "Wyświetl" : "Ukryj"} wykonane
            </button>
            <button
                className="list__button--checkAll"
                disabled={taskTable.every(({ done }) => done)}
            >
                Zakończ wszystkie
            </button>
        </span>
    )
};

export default Buttons;