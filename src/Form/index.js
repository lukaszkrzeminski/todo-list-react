import React, { useState } from 'react';
import "./style.css";

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
        <form className="form" onSubmit={onFormSubmit}>
            <label className="form__label">
                <h2 className="form__header">
                    Dodaj nowe zadanie
                    </h2>

                <input
                    value={newTaskContent}
                    onChange={(event) => setNewTaskContent(event.target.value)}
                    className="form__input"
                    placeholder="Co jest do zrobienia?" autoFocus
                    ref={inputRef} 
                />
                <button className="form__button">Dodaj zadanie</button>

            </label>
        </form>
    )
};

export default Form;