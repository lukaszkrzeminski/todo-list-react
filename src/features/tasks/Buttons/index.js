import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { FunctionButton, Button } from "../styledHeaderButtons";
import { selectTasks, selectHideDone, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
    const taskTable = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    if (taskTable.length === 0) {
        return null;
    }

    return (
        <FunctionButton>
            <Button
                showDone
                onClick={() => dispatch(toggleHideDone())}
            >
                {hideDone ? "Wyświetl" : "Ukryj"} wykonane
            </Button>
            <Button
                checkAll
                onClick={() => dispatch(setAllDone())}
                disabled={taskTable.every(({ done }) => done)}
            >
                Zakończ wszystkie
            </Button>
        </FunctionButton>
    )
};

export default Buttons;