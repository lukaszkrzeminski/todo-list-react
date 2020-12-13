import React from "react";
import {StyledList, StyledNavLink} from "./styled";

export default () => {
    return (
        <nav>
            <StyledList>
                <li>
                    <StyledNavLink to="/lista-zadan">Lista zadań</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/o-autorze">O autorze</StyledNavLink>
                </li>
            </StyledList>
        </nav>
    );
};