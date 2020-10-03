import React from "react";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/lista-zadan">Lista zadań</Link>
                </li>
                <li>
                    <Link to="/o-autorze">O autorze</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/lista-zadan">
                    <Tasks />
                </Route>
                <Route path="/o-autorze">
                    <Author />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);