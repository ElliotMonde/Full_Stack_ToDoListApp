import React from "react";
import TasksToDo from "./Task/Items";
import TasksCompleted from "./Task/Completed";
import TaskButtons from "./Task/Buttons";

function Note(props){
    return(
        <div className="note">
            <h2 className="note-title">{props.title}</h2>
            <TasksToDo/>
            <TasksCompleted/>
            <TaskButtons onClick="addTask" />
        </div>
    )
}

export default Note;