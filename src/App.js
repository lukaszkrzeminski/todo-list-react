import React, { useState } from 'react';
import Form from "./Form";
import List from "./List";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Main from "./Main";

const taskTable = [
  { id: 1, content: "Undone task 1", done: false },
  { id: 2, content: "Done task 2", done: true },
];

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Main>
      <Header title="Lista zadań" />
      <Form />

      <List
        taskTable={taskTable}
        hideDone={hideDone}
        headerTitle="Lista zadań:"
        headerButtons={<Buttons taskTable={taskTable} hideDone={hideDone} toggleHideDone={toggleHideDone} />}
        body={<Tasks taskTable={taskTable} hideDone={hideDone} />}
      />
    </Main>
  );
}

export default App;
