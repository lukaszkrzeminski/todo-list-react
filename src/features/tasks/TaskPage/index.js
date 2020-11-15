import React from "react";
import Main from "../../../common/Main";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const params = useParams();
    const task = useSelector(state => getTaskById(state, params.id));

    return (
        <Main>
            <Header title="Szczegóły zadania:" />
            <Section
                contentHeader={task ? task.content : "Nie ma takiego zadania"}
                contentBody={<><strong>Ukończono: </strong> {task.done ? "Tak" : "Nie"}</>}
            />
        </Main>
    );
}

export default TaskPage;