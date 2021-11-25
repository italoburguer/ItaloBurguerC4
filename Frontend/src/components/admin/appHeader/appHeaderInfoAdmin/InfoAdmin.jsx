import React from "react";
import jwtDecode from "jwt-decode";
import {getAccesTokenApi} from "../../../../api/auth";
import "./InfoAdmin.css";

export default function InfoAdmin(){
    const accessToken = getAccesTokenApi();
    const data = jwtDecode(accessToken);

    const dataAdminName = Object.values(
        {
        "nameAdmin": data.nombre,   
        }
    );

    const dataAminEmail = Object.values(
        {
            "EmailAdmin": data.email,
        }
    );
    
    return(
        <div id="infoAdmin">
            <span id="spnInf">ADMIN:</span> {dataAdminName}<span id="spnInf" style={{marginLeft:"50px"}}>EMAIL: </span> {dataAminEmail}
        </div>
    );
    
}

