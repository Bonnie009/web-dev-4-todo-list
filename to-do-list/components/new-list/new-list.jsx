import React from "react";
import styled from "styled-components";

// + New To-Do button
const ListItem = styled.button`
    width:auto;
    height:auto;
    background-color:transparent;
    border:none;
    cursor: pointer;
    font-size:24px;
`

const NewList = ({
    subtitle="+ New To-Do"
}) => {
    const AddNew = () =>{
        const ul = document.getElementById("list"); //Gets the whole list ul
        const li = document.createElement("li"); //Create new list item
        li.appendChild(document.createTextNode("Subtitle")); //Appends the li item to ul
        ul.appendChild(li);
    }
    return (
        <div>Add stuff here
            <ul id="list">
                
            </ul>
            <ListItem onClick={AddNew}>{subtitle}</ListItem>
        </div>
    );
};

export default NewList;