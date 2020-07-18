import React from 'react';
import "./style.css";

const Form = () => (
    <form className="form">
        <label className="form__label">
            <h2 className="form__header">
                Dodaj nowe zadanie
                </h2>

            <input className="form__input" placeholder="Co jest do zrobienia?" autoFocus />
            <button className="form__button">Dodaj zadanie</button>

        </label>
    </form>
);

export default Form;