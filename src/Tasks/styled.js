import styled, { css } from "styled-components";

export const TasksList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    border-bottom: lightgrey 1px solid;
    margin: 10px;
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;

    ${({hidden}) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    margin: 10px;
    padding: 10px;
    text-align: justify;

    ${({done}) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    margin: 10px;
    padding: 10px;
    flex-shrink: 0;
    cursor: pointer;
    transition: 1s;

    ${({done}) => done && css`
        background-color: green;
        color: white;
        &:hover {
            background-color: hsl(120, 100%, 35%);
        }
        &:active {
            background-color: hsl(120, 100%, 45%);
        }
    `}

    ${({remove}) => remove && css`
        background-color: rgb(255, 0, 0);
        color: white;
        &:hover {
            background-color: hsl(0, 100%, 60%);
        }
        &:active {
            background-color: hsl(0, 100%, 65%);
        }
    `}
`;