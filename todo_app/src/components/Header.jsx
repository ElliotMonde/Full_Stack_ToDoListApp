import React from "react";
import CreateCollectionButton from './CreateCollectionButton'
import { Stack } from "@mui/system";

const pageTitle = {
    display: "block",
    width: "35%",
    padding: "2.5% 0",
}

function HeaderComponent(){
    return(
        <header>
            <Stack direction="row" spacing={5}>
                <h1 className={pageTitle}>✨ To-Do List</h1>
                <CreateCollectionButton  />
            </Stack>
        </header>
    )
}

export default HeaderComponent;