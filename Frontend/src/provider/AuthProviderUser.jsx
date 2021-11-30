import React, {useState, useEffect, createContext} from "react";
import {getAccessTokenUserApi, refreshAccessTokenUserApi, logoutUser} from "../api/authUser";
import jwtDecode from "jwt-decode";

export const AuthContextUser = createContext();

export default function AuthProviderUser(props){
    const { children } = props;
    const [user, setUser] = useState({
        user: null,
        isLoading: true
    });
    useEffect(()=>{
        checkUserLogin(setUser);
    },[]);

    return <AuthContextUser.Provider value={user}>{children}</AuthContextUser.Provider>
}

function checkUserLogin(setUser){
    const accessTokenUser = getAccessTokenUserApi();

    if(!accessTokenUser){
        const refreshTokenUser = getAccessTokenUserApi();

        if(!refreshTokenUser){
            logoutUser();
            setUser({
                user: null,
                isLoading: false
            });
        }else{
            refreshAccessTokenUserApi(refreshTokenUser)
        }
    }else{
        setUser({
            isLoading: false,
            user: jwtDecode(accessTokenUser)
        });
    }
}