import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Input from "../../Input";
import searchQueryParameterName from "../searchQueryParameterName";
import { Wrapper } from "./styled";

export default () => {
    const useQueryParameter = (searchQueryParameterName) => {
        (new URLSearchParams(location.search).get(searchQueryParameterName));
    }

    const location = useLocation();
    const history = useHistory();
    const query = useQueryParameter();

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}

            />
        </Wrapper>
    )
}