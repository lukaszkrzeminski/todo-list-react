import React from "react";
import Input from "../../Input";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import searchQueryParameterName from "../searchQueryParameterName";
import { Wrapper } from "./styled";

export default () => {
    const query = useQueryParameter(searchQueryParameterName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParameterName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
}