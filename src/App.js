import React from 'react';
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
const hideDoneTasks = false;

function App() {
  return (
    <Main>
      <Header title = "Lista zadań"/>
      <Form />

      <List
        taskTable={taskTable}
        hideDoneTasks={hideDoneTasks}
        headerTitle = "Lista zadań:"
        headerButtons={<Buttons taskTable={taskTable} hideDoneTasks={hideDoneTasks} />} 
        body={<Tasks taskTable={taskTable} hideDoneTasks={hideDoneTasks} />}
      />
    </Main>
  );
}

export default App;
