import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TasksList, Item, Content, Button } from "./styled"
import { selectHideDone, toggleTaskDone, removeTask, selectTasksByQuery } from '../../tasksSlice';
import { Link, useLocation } from 'react-router-dom';


const TaskList = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("szukaj");
    
    const taskTable = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();
    return (
        <TasksList>
            {taskTable.map(task =>
                <Item key={task.id} hidden={task.done && hideDone}>
                    <Button
                        done
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : " "}
                    </Button>
                    <Content done={task.done}>
                        <Link to={`/lista-zadan/${task.id}`}>{task.content}</Link>
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                </Button>
                </Item>
            )}
        </TasksList>
    )
};

export default TaskList;