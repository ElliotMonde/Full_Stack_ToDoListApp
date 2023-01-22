import React from "react";
import Note from "./Note";
import { Grid } from "@mui/material";

function Collection(){
    return(
        <Grid style={{width:"100%", padding:"0", margin:"0"}}>
            {/* add notes here*/}
              <Note className="handle"/>
        </Grid>
    )
}

export default Collection;