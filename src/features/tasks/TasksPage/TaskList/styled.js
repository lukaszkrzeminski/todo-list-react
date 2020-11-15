import styled, { css } from "styled-components";

export const TasksList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    border-bottom: ${({theme}) => theme.color.alto} 1px solid;
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
        background-color: ${({theme}) => theme.color.green};
        color: ${({theme}) => theme.color.white};
        &:hover {
            filter: brightness(110%);
        }
        &:active {
            filter: brightness(120%);
        }
    `}

    ${({remove}) => remove && css`
        background-color: ${({theme}) => theme.color.red};
        color: white;
        &:hover {
            filter: brightness(110%);
        }
        &:active {
            filter: brightness(120%);
        }
    `}
`;