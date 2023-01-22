import React from 'react'

const lineBreak = {
    borderTop: "solid 3px #c79a94",
}

const completedTaskTitleStyle = {
    width: "100%",
    color: "gray",
    fontWeight: "500",
    fontStyle: "oblique",
    margin: "2%",
    padding: "0% 2%"
}

function TasksCompleted(){
    return(
        <div>
            <div style={lineBreak}></div>
            <h4 style={completedTaskTitleStyle}>Completed Tasks:</h4>
            {/* {document.getElementsByClassName("completedTasks").map()} */}
        </div>
    )
}

export default TasksCompleted