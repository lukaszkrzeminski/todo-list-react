import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Input from "../../Input";
import searchQueryParameterName from "../searchQueryParameterName";
import { Wrapper } from "./styled";

export default () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search).get(searchQueryParameterName));

    const onInputChange = ({target}) => {
        const searchParams = new URLSearchParams(location.search);

        if(target.value.trim() === ""){
            searchParams.delete(searchQueryParameterName);
        } else {
            searchParams.set(searchQueryParameterName, target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return(
        <Wrapper>
            <Input 
            placeholder="Filtruj zadania"
            value={query || ""}
            onChange={onInputChange}
        />
        </Wrapper>
    )
}