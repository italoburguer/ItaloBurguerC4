import React from "react";
import AppHeader from "../../../components/client/appHeader/appHeader";
import { Redirect, Route } from "react-router";
import SignIn from "../../Admin/Login/SignIn";
import useAuthUser from "../../../hooks/useAuthUser";

export default function Pedidos(){

    const {user, isLoading} = useAuthUser();

    
    if(!user && !isLoading){
        return(
            <>
            <Route path="/login" component={SignIn}/>
            <Redirect to="/login" />
            </>
        )
    }

    if(user && !isLoading){
    return(
        <div>
            <AppHeader />
            <div style={{marginTop: "100px"}}>
                <div>

                </div>
            </div>
        </div>
    )
    }

    return null;
}