import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TasksList, Item, Content, Button, StyledLink } from "./styled"
import { selectHideDone, toggleTaskDone, removeTask, selectTasksByQuery } from '../../tasksSlice';
import { useLocation } from 'react-router-dom';
import searchQueryParameterName from '../searchQueryParameterName';
import { toTask } from '../../../../routes';


const TaskList = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParameterName);

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
                        <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
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