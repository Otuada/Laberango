import React from "react";
import { DivHeader, Title } from "./styled";

export const Header = ({title}) => {
    return(
    <DivHeader>
        <Title>{title}</Title>
    </DivHeader>
    )
}

