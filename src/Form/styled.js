import styled from "styled-components";

export const Formular = styled.form`
    background-color: white;
    border: lightgrey 1px solid;
`;

export const Label = styled.label`
    display: flex;
    flex-wrap: wrap;
`;

export const Header = styled.h2`
    background-color: white;
    margin: 0;
    padding: 15px;
    font-weight: bold;
    border-bottom: lightgrey 2px solid;
    flex-basis: 100%;
    flex-grow: 1;
`;

export const Input = styled.input`
    padding: 5px 20px;
    margin: 20px 15px;
    flex-grow: 1;

    @media (max-width: 767px){
        margin: 10px 15px;
    }
`;

export const Button = styled.button`
    width: auto;
    padding: 10px;
    margin: 20px 15px;
    background-color: teal;
    color: white;
    border: none;
    flex-grow: 0;
    transition: 1s;

    &:hover {
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.1);
        cursor: pointer;
    }

    &:active {
        background-color: hsl(180, 100%, 45%);
    }

    @media (max-width: 767px){
        flex-grow: 1;
        margin: 10px 15px;
    }
`;