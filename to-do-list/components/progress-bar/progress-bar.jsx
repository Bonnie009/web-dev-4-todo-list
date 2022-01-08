import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;

const StyledBgDiv = styled.div`
    width: 20%;
    background-color: #4E4E4E;
    border-radius: 5px;
    position: absolute;
`;

const StyledFrontDiv = styled.div`
    width: 10%;
    background-color: #919498;
    border-radius: 5px;
    position: absolute;
    z-index: 1;
`;

const ProgressBar = () => {
    return (
        <StyledContainer>
            <StyledFrontDiv>front</StyledFrontDiv>
            <StyledBgDiv>back</StyledBgDiv>
        </StyledContainer>
    );
};


export default ProgressBar;