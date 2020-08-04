import React, { useState } from 'react';
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent === ""){
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
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
                />
                <button className="form__button">Dodaj zadanie</button>

            </label>
        </form>
    )
};

export default Form;