import React from 'react';
import "./style.css";

const Buttons = ({ hideDone, taskTable, toggleHideDone, setAllDone }) => {
    if (taskTable.length === 0) {
        return null;
    }

    return (
        <span className="list__functionButton">
            <button
                className="list__button--showDone"
                onClick={toggleHideDone}
            >
                {hideDone ? "Wyświetl" : "Ukryj"} wykonane
            </button>
            <button
                className="list__button--checkAll"
                onClick={setAllDone}
                disabled={taskTable.every(({ done }) => done)}
            >
                Zakończ wszystkie
            </button>
        </span>
    )
};

export default Buttons;