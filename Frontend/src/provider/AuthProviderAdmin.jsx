import React, {useState, useEffect, createContext} from "react";
import {getAccesTokenApi, refreshAccessTokenApi, logout} from "../api/auth";
import jwtDecode from "jwt-decode";

export const AuthContextAdmin = createContext();

export default function AuthProviderAdmin(props){
    const { children } = props;
    const [admin, setAdmin] = useState({
        admin: null,
        isLoading: true
    });

    useEffect(()=>{
        checkAdminLogin(setAdmin);
    },[]);
    return <AuthContextAdmin.Provider value={admin}>{children}</AuthContextAdmin.Provider>
}

function checkAdminLogin(setAdmin){
    const accessToken = getAccesTokenApi();
//    console.log(jwtDecode(accessToken));

    if(!accessToken){
        const refreshToken = getAccesTokenApi();

        if(!refreshToken){
            logout();
            setAdmin({
                admin: null,
                isLoading: false
            });
        }else{
            refreshAccessTokenApi(refreshToken);
        }
    }else{
        setAdmin({
            isLoading: false,
            admin: jwtDecode(accessToken)
        });
    }
}