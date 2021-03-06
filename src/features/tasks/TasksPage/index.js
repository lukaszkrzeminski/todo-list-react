import React, { useRef } from 'react';
import Form from "./Form";
import List from "./List";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Header from "../../../common/Header";
import Main from "../../../common/Main";
import Section from '../../../common/Section';
import Search from './Search';

function TasksPage() {

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <Main>
      <Header title="Lista zadań" />
      <Form focusInput={focusInput} inputRef={inputRef} />
      <Section
        contentHeader="Wyszukiwarka"
        contentBody={<Search />}>
      </Section>
      <List
        headerTitle="Lista zadań:"
        headerButtons={
          <Buttons />}
        body={
          <TaskList />}
      />
    </Main>
  );
}

export default TasksPage;
