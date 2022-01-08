import React from "react";
import styled from "styled-components";

const ListItem = styled.div`
    width:auto;
    height:auto;
    border:none;
`
const ListBox = styled.li`
    background-color:#FFFFFF;
    list-style-type:none;
`

const InputBox = styled.input`
    width:${props => props.iwidth};
    height: ${props => props.iheight}px; 
    font-size: 22px;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: groove;
    padding: 16px;
    box-sizing: border-box;
`
const Icon = styled.img`
    display: block;
    object-fit: contain;
    width: 30px;
    height: 30px;
    margin-right:10px;
`

const List = ({
    iwidth = "20%",
    iheight = 37,
}) => {
    return (
        <ListItem>
            <ListBox>
             <Icon src= "./../assets/Check.png" />
            <InputBox
             iwidth={iwidth} 
             iheight={iheight}/>
             </ListBox>
        </ListItem>
    );
};

export default List;