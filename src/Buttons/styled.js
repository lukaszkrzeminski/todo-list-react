import styled, { css } from "styled-components";

export const FunctionButton = styled.span`
    font-size: 20px;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 767px) {
        justify-content: center;
        flex-wrap: wrap;
    }
`;

export const Button = styled.button`
    ${({showDone}) => showDone && css`
        border: none;
        background-color: white;
        width: auto;
        color: hsl(180, 100%, 25%);
        transition: 1s;
        &:hover {
            color: hsl(180, 100%, 35%);
        }
        &:active {
            color: hsl(180, 100%, 45%);
        }
        &:disabled {
            color: grey;
        }
        @media (max-width: 767px) {
            padding: 10px 0;
        }
    `}

    ${({checkAll}) => checkAll && css`
        border: none;
        background-color: white;
        width: auto;
        color: teal;
        transition: 1s;
        &:hover {
            color: hsl(180, 100%, 35%);
        }
        &:active {
            color: hsl(180, 100%, 45%);
        }
        &:disabled {
            color: grey;
        }
        @media (max-width: 767px) {
            padding: 10px 0;
        }
    `}
`;