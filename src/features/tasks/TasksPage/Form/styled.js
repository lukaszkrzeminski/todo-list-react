import styled from "styled-components";

export const Formular = styled.form`
    background-color: ${({theme}) => theme.color.white};
    border: ${({theme}) => theme.color.alto} 1px solid;
`;

export const Label = styled.label`
    display: flex;
    flex-wrap: wrap;
`;

export const Header = styled.h2`
    background-color: ${({theme}) => theme.color.white};
    margin: 0;
    padding: 15px;
    font-weight: bold;
    border-bottom: ${({theme}) => theme.color.alto} 2px solid;
    flex-basis: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
`;

export const ButtonAdd = styled.button`
    width: auto;
    padding: 10px;
    margin: 20px 15px;
    background-color: teal;
    color: ${({theme}) => theme.color.white};
    border: none;
    flex-grow: 0;
    transition: 1s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1);
        cursor: pointer;
    }

    &:active {
        filter: brightness(120%);
    }

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
        flex-grow: 1;
        margin: 10px 15px;
    }
`;