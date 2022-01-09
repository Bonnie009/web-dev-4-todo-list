import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;

const CustomCheckbox = styled.div`
    width: 20px;
    height: 20px;
    border-style: solid;
    border-radius: 5px;
    margin-right: 5px;
`;

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 5px;
    display: none;
`;

const Input = styled.input`
    border: none;
`;

const List = () => {

    const [checkbox, setCheckbox] = useState(false);
    const handleClick = () => setCheckbox(oldCheckbox => !oldCheckbox);

    return (
        <Container>
            <Container>
                <CustomCheckbox onClick={handleClick}>
                    {checkbox ? "✔" : " "}
                </CustomCheckbox>
                <Checkbox
                    type="checkbox"
                    value={checkbox.value}
                />
            </Container>
            <Input type="text" placeholder="Subtitle" />
        </Container >
    )
};

export default List;