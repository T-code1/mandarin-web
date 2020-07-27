import React from "react";
import "./client.css";

const Client =(props)=>{
    const { id } = props
    return(
        <div ClassName="client" id={id}>
 
            
            <div className="client_link">
            <img className="chickentStore-img" src={require("../images/clients/Chickenstore.svg")} alt="clietn" />
            <img className="forex-img" src={require("../images/clients/forex.svg")} alt="clietn" />
            <img className="huzamart-img" src={require("../images/clients/HuzaMart.svg")} alt="clietn" />
            <img className="Kwetu-img" src={require("../images/clients/Kwetu-pazuri.svg")} alt="clietn" />
            <img className="osisolution-img" src={require("../images/clients/osiSolution.svg")} alt="clietn" />
            <img className="solid-img" src={require("../images/clients/solid.svg")} alt="clietn" />;
            <img className="wivunika-img" src={require("../images/clients/wivunika.svg")} alt="clietn" />
            <img className="Isange-img" src={require("../images/clients/Isange_group.svg")} alt="clietn" />
            {/* <img className="gemura-img" src={require("../images/clients/gemura.svg")} alt="clietn" /> */}
            </div>
        </div>
    )
}

export default Client;