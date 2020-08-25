import React, { useState } from 'react';
import {Formular, Label, Header, Input, Button} from "./styled";

const Form = ({ addNewTask, focusInput, inputRef}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === ""){
            return;
        }
        addNewTask(newTaskContent.trim());
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