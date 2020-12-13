import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName}{
        font-weight: bold;
    }
    text-decoration: none;
    color: ${({theme}) => theme.color.white};
    font-size: 20px;
    padding: 10px 20px;
`;

export const StyledList = styled.ul`
    background-color: ${({theme}) => theme.color.teal};
    padding: 10px 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
