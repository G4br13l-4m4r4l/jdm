import React from "react";
import * as Styled from './styles';


export const Button = ({ label, icon, onClick })=>{
    return(
        <Styled.Container>
            <Styled.label>
                {label}
            </Styled.label>
        </Styled.Container>
    );
}