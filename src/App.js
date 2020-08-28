import React, { useState, useRef } from 'react';
import Form from "./Form";
import List from "./List";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Main from "./Main";
import {useTasks} from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);
  
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    taskTable, 
    setAllDone, 
    removeTask, 
    toggleTaskDone, 
    addNewTask
  } = useTasks();
  
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
