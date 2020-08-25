import React from 'react';
import {ListDiv, Header} from "./styled";

const List = ({ headerTitle, headerButtons, body }) => (
    <ListDiv>
        <Header>
            {headerTitle}
            {headerButtons}
        </Header>
        {body}
    </ListDiv>
);

export default List;