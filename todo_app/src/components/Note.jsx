import React from "react";
import TasksToDo from "./Task/Items";
import TasksCompleted from "./Task/Completed";
import TaskButtons from "./Task/Buttons";
import { Container, Box } from "@mui/material";
import Draggable from "react-draggable";

const boxStyle = {
    bgcolor: '#FBE7E4',
    height: "100%",
    width: "90%",
    padding: "2%",
    border: "hidden",
    borderRadius: "20px",
    textAlign: "left",
}
const noteTitleStyle = {
    margin: "2% 2%",
    padding: "0% 2%",
}
function Note(props) {
    return (
        <Draggable>
            <Container style={{ margin: "2%", width: "inherit" }} maxWidth="sm">
                <Box sx={boxStyle}>
                    <h2 contentEditable="true" style={noteTitleStyle}>Lorem Ipsum {props.title}</h2>
                    <TasksToDo />
                    <TasksCompleted />
                    <TaskButtons onClick="addTask" />
                </Box>
            </Container>
        </Draggable>
    )
}

export default Note;