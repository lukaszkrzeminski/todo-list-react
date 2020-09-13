import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {Formular, Label, Header, Input, Button} from "./styled";
import { addNewTask } from "../tasksSlice";

const Form = ({focusInput, inputRef}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === ""){
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
                </Header>

                <Input
                    value={newTaskContent}
                    onChange={(event) => setNewTaskContent(event.target.value)}
                    placeholder="Co jest do zrobienia?" autoFocus
                    ref={inputRef} 
                />
                <Button>Dodaj zadanie</Button>

            </Label>
        </Formular>
    )
};

export default Form;