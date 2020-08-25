import React from 'react';
import {TasksList, Item, Content, Button} from "./styled"

const Tasks = ({ taskTable, hideDone, removeTask, toggleTaskDone }) => {
    
    return (
    <TasksList>
        {taskTable.map(task =>
            <Item key={task.id} hidden={task.done && hideDone}>
                <Button
                    done
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : " "}
                </Button>
                <Content done={task.done}> 
                    {task.content} 
                </Content>
                <Button
                    remove
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </Button>
            </Item>
        )}
    </TasksList>
)};

export default Tasks;