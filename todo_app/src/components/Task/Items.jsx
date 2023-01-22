import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { Box, Stack, Button} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const taskStyle = {
    margin: "0",
    padding: "0",
    width: "100%",
    height: "fit-content",
}
const stackStyle = {
    width: "inherit%",
    margin: "2%",
    padding: "0% 0% 0% 1%",
}
const taskCheckBoxStyle = {
    width: "fit-content",
    margin: "0",
}

const taskTextStyle = {
    width: "100%",
    fontWeight: "500",
}
const deleteTaskButtonStyle = {
    width: "fit-content",
    height: "fit-content",
    border: "hidden",
    margin: "2% 0%",
    padding: "2% 0%",
    borderRadius: "20% 20% 20% 20%",
    
}
function TaskToDo(){
    return(
        <Box className="taskBox" style={taskStyle}>
            <Stack style={stackStyle} direction="row">
                <Checkbox sx={{
                    color: 'dark-gray',
                    '&.Mui-checked': {
                        color: 'black',
                    },
                }} style={taskCheckBoxStyle} />
                <p style={taskTextStyle} contentEditable="true">task to do</p>
                <Button style={deleteTaskButtonStyle}  variant="text" startIcon={<ClearIcon style={{color: "black"}} />} />
            </Stack>
        </Box>
    )
}

export default TaskToDo