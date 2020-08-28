import { useState, useEffect } from "react";

export const useTasks = () => {
    const [taskTable, setTaskTable] = useState(
      JSON.parse(localStorage.getItem("taskTable")) === null ? [] : JSON.parse(localStorage.getItem("taskTable"))
    );
  
    useEffect(() => {
      localStorage.setItem("taskTable", JSON.stringify(taskTable));
    }, [taskTable]);
  
    const setAllDone = () => {
      setTaskTable(taskTable => taskTable.map(task => ({
        ...task,
        done: true,
      })));
    }
  
    const removeTask = (id) => {
      setTaskTable(taskTable => taskTable.filter(taskTable => taskTable.id !== id));
    };
  
    const toggleTaskDone = (id) => {
      setTaskTable(taskTable => taskTable.map(task => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      }));
    };
  
    const addNewTask = (content) => {
      setTaskTable(taskTable => [
        ...taskTable,
        {
          content,
          done: false,
          id: taskTable.length === 0 ? 1 : taskTable[taskTable.length - 1].id + 1,
        }
      ])
    }
  
    return { taskTable, setAllDone, removeTask, toggleTaskDone, addNewTask };
  };