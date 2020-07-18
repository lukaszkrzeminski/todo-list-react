import React from 'react';
import "./style.css";

const List = ({ taskTable, hideDoneTasks, headerTitle, headerButtons, body }) => (
    <div className="list">
        <h2 className="list__header">
            {headerTitle}
            {headerButtons}
        </h2>
        {body}
    </div>
);

export default List;