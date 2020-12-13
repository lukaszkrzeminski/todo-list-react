import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import Navigation from "./common/Navigation";

export default () => (
    <HashRouter>
        <Navigation />
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
    </HashRouter>
);