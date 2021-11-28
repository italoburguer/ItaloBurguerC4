import React from "react";
import AppHeader from "../../../components/client/appHeader/appHeader";
import { Redirect, Route } from "react-router";
import SignIn from "../../Admin/Login/SignIn";



export default function Pedidos(){

    const user = null;

    if(!user){
        return(
            <>
            <Route path="/login" component={SignIn}/>
            <Redirect to="/login" />
            </>
        )
    }

    return(
        <div>
            <AppHeader />
            <h1 style={{textAlign:"center"}}>
                ESTAMOS EN TUS PEDIDOS
            </h1>
        </div>
    )
}