import React from "react";
import * as Styled from './styles'

export const InfoItem = ({ label, value })=>{
    return(
        <Styled.container>
            <Styled.label>{label}</Styled.label>
            <Styled.value>{value}</Styled.value>
        </Styled.container>
    );
}