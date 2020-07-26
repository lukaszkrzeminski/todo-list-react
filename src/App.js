import React, { useState } from 'react';
import Form from "./Form";
import List from "./List";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [taskTable, setTaskTable] = useState([
    { id: 1, content: "Undone task 1", done: false },
    { id: 2, content: "Done task 2", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTaskTable(taskTable => taskTable.filter(taskTable => taskTable.id !== id));
  }

  return (
    <Main>
      <Header title="Lista zadań" />
      <Form />

      <List
        taskTable={taskTable}
        hideDone={hideDone}
        headerTitle="Lista zadań:"
        headerButtons={<Buttons taskTable={taskTable} hideDone={hideDone} toggleHideDone={toggleHideDone} />}
        body={<Tasks taskTable={taskTable} hideDone={hideDone} removeTask={removeTask} />}
      />
    </Main>
  );
}

export default App;
