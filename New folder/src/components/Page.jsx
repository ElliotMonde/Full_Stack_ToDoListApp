import React from "react";
import HeaderComponent from "./Header";
import Collection from "./Collection";


/*
 * page contains the body of the app
 * inside the body there's the header which has the app title and logo (and in future, a search bar)
 * in the main div, there's the note components
 */

function Page(){
    return(
        <body>
            <HeaderComponent />
            <Collection />
        </body>
    )
}

export default Page;