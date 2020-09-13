import styled from "styled-components";

export const MainContainer = styled.main`
    max-width: 800px;
    margin: 60px auto;
    padding: 10px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
        margin: 20px auto;
    }
`;