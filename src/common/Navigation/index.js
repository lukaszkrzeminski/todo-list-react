import React from "react";
import {StyledList, StyledNavLink} from "./styled";
import {toTasks, toAuthor} from "../../routes";

export default () => {
    return (
        <nav>
            <StyledList>
                <li>
                    <StyledNavLink to={toTasks()}>Lista zadań</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
                </li>
            </StyledList>
        </nav>
    );
};