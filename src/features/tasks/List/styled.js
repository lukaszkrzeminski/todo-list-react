import styled from "styled-components";

export const ListDiv = styled.div`
    background-color: ${({theme}) => theme.color.white};
    border: ${({theme}) => theme.color.alto} 1px solid;
    margin-top: 15px;
`;

export const Header = styled.h2`
    border-bottom: ${({theme}) => theme.color.alto} 2px solid;
    padding: 15px;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: unset;
        grid-template-rows: 1fr 2fr;
    }
`;