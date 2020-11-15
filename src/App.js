import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { StyledNavLink, StyledList } from "./styled";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";

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
                <Route path="/lista-zadan/:id">
                    <TaskPage />
                </Route>
                <Route path="/lista-zadan">
                    <TasksPage />
                </Route>
                <Route path="/o-autorze">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/lista-zadan" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);