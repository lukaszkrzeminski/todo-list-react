import styled from "styled-components";

export default styled.input`
    padding: 5px 20px;
    margin: 20px 15px;
    flex-grow: 1;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px){
        margin: 10px 15px;
    }
`;