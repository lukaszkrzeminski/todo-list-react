import React, { useState, useEffect, useRef } from 'react';
import Form from "./Form";
import List from "./List";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [taskTable, setTaskTable] = useState(
    JSON.parse(localStorage.getItem("taskTable")) === null ? [] : JSON.parse(localStorage.getItem("taskTable"))
  );

  useEffect(() => {
    localStorage.setItem("taskTable", JSON.stringify(taskTable));
  }, [taskTable]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

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

const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  }



  return (
    <Main>
      <Header title="Lista zadań" />
      <Form addNewTask={addNewTask} focusInput={focusInput} inputRef={inputRef} />

      <List
        taskTable={taskTable}
        hideDone={hideDone}
        headerTitle="Lista zadań:"
        headerButtons={
          <Buttons
            taskTable={taskTable}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />}
        body={
          <Tasks
            taskTable={taskTable}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
      />
    </Main>
  );
}

export default App;
