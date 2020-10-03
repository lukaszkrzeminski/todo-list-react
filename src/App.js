import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { StyledNavLink, StyledList } from "./styled";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

export default () => (
    <HashRouter>
        <nav>
            <StyledList>
                <li>
                    <StyledNavLink to="/lista-zadan">Lista zadań</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/o-autorze">O autorze</StyledNavLink>
                </li>
            </StyledList>
            <Switch>
                <Route path="/lista-zadan">
                    <Tasks />
                </Route>
                <Route path="/o-autorze">
                    <Author />
                </Route>
                <Route path="/">
                    <Redirect to="/lista-zadan"/>
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);