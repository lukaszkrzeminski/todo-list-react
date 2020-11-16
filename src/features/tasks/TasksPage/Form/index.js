import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Formular, Label, Header, ButtonAdd } from "./styled";
import { Button } from "../../styledHeaderButtons";
import { addNewTask, fetchExampleTasks, selectExampleTasks } from "../../tasksSlice";
import Input from '../../Input';

const Form = ({ focusInput, inputRef }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();
    const isLoading = useSelector(selectExampleTasks);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return;
        }

        dispatch(addNewTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));
        setNewTaskContent("");
        focusInput();
    }

    return (
        <Formular onSubmit={onFormSubmit}>
            <Label>
                <Header>
                    Dodaj nowe zadanie
                    <Button
                        fetchTasks
                        disabled={isLoading}
                        onClick={() => dispatch(fetchExampleTasks())}
                    >
                        {isLoading ? "Ładowanie zadań" : "Pobierz przykładowe zadania"}
                    </Button>
                </Header>
                <Input
                    value={newTaskContent}
                    onChange={(event) => setNewTaskContent(event.target.value)}
                    placeholder="Co jest do zrobienia?" autoFocus
                    ref={inputRef}
                />
                <ButtonAdd>Dodaj zadanie</ButtonAdd>

            </Label>
        </Formular>
    )
};

export default Form;