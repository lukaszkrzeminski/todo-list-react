import React from 'react';
import { useSelector, useDispatch} from "react-redux";
import {FunctionButton, Button} from "./styled";
import { selectTasks, toggleHideDone, setAllDone} from "../tasksSlice";

const Buttons = () => {
    const {taskTable, hideDone} = useSelector(selectTasks);
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