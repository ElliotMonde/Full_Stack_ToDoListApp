import React from 'react'


const footerStyle = {
    display: "flex",
    position: "fixed",
    bottom: "0",
    width: "100%",
    backgroundColor: "#FBE7E4",
}
const creditStyle = {
    margin: "auto",
    padding: "1% 0%",
}

function FooterComponent(){
    return(
        <div style={footerStyle}>
            <p style={creditStyle}>✨ Created By <a target="_blank" rel="noreferrer" href="https://github.com/ElliotMonde">Elliot Phua</a> ✨</p>
        </div>
    )
}

export default FooterComponent