import React from "react";
import "./client.css";

const Client =(props)=>{
    const { id } = props
    return(
        <div ClassName="client" id={id}>
            <h1 style={{height: "100vh",backgroundColor:"grey"}}>our Clients</h1>
        </div>
    )
}

export default Client;