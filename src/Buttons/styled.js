import styled, { css } from "styled-components";

export const FunctionButton = styled.span`
    font-size: 20px;
    display: flex;
    justify-content: flex-end;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        justify-content: center;
        flex-wrap: wrap;
    }
`;

export const Button = styled.button`
    ${({showDone}) => showDone && css`
        border: none;
        background-color: ${({theme}) => theme.color.white};
        width: auto;
        color: ${({theme}) => theme.color.teal};
        transition: 1s;
        &:hover {
            filter: brightness(110%);
        }
        &:active {
            filter: brightness(120%);
        }
        &:disabled {
            color: ${({theme}) => theme.color.grey};
        }
        @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
            padding: 10px 0;
        }
    `}

    ${({checkAll}) => checkAll && css`
        border: none;
        background-color: ${({theme}) => theme.color.white};
        width: auto;
        color: ${({theme}) => theme.color.teal};
        transition: 1s;
        &:hover {
            filter: brightness(110%);
        }
        &:active {
            filter: brightness(120%);
        }
        &:disabled {
            color: ${({theme}) => theme.color.grey};
        }
        @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
            padding: 10px 0;
        }
    `}
`;