import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {TasksList, Item, Content, Button} from "./styled"
import { selectTasks, toggleTaskDone, removeTask } from '../tasksSlice';


const TaskList = () => {
    const {taskTable, hideDone} = useSelector(selectTasks);

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
                    {task.content} 
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
)};

export default TaskList;