import React from 'react'
import {Button} from '@mui/material'
import "../index.css"

const btnStyle = {

    display: "block",
    width: "fit-content",
    height: "fit-content",
    position: "absolute",
    right: "2%",
    margin: "2% 0",
    backgroundColor: "#FBE7E4",
    color: "black",
}

function CreateCollectionButton(){
    return(
        <Button style={btnStyle} variant="contained" >+ New Collection</Button>
    )
}

export default CreateCollectionButton