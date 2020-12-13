import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import Navigation from "./common/Navigation";
import {toTasks, toAuthor, toTask} from "./routes";

export default () => (
    <HashRouter>
        <Navigation />
            <Switch>
                <Route path={toTask()}>
                    <TaskPage />
                </Route>
                <Route path={toTasks()}>
                    <TasksPage />
                </Route>
                <Route path={toAuthor()}>
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to={toTasks()} />
                </Route>
            </Switch>
    </HashRouter>
);