import React from 'react';
import {FunctionButton, Button} from "./styled";

const Buttons = ({ hideDone, taskTable, toggleHideDone, setAllDone }) => {
    if (taskTable.length === 0) {
        return null;
    }

    return (
        <FunctionButton>
            <Button
                showDone
                onClick={toggleHideDone}
            >
                {hideDone ? "Wyświetl" : "Ukryj"} wykonane
            </Button>
            <Button
                checkAll
                onClick={setAllDone}
                disabled={taskTable.every(({ done }) => done)}
            >
                Zakończ wszystkie
            </Button>
        </FunctionButton>
    )
};

export default Buttons;