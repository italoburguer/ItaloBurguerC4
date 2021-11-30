import { basePath, apiVersion } from "./config";
import { ACCESS_TOKEN_USER, REFRESH_TOKEN_USER } from "../utils/constantsUser";
import jwtDecode from "jwt-decode";

export function getAccessTokenUserApi(){
    const accessTokenUser = localStorage.getItem(ACCESS_TOKEN_USER);

    if(!accessTokenUser || accessTokenUser === "null"){
        return null;
    }

    return willExpireTokenUser(accessTokenUser) ? null : accessTokenUser;
    
}

export function getRefreshTokenUserApi(){
    const refreshTokenUser = localStorage.getItem(REFRESH_TOKEN_USER);

    if(!refreshTokenUser || refreshTokenUser === "null"){
        return null;
    }
    return willExpireTokenUser(refreshTokenUser) ? null : refreshTokenUser;
}

export function refreshAccessTokenUserApi(refreshTokenUser){
    const url = `${basePath}/${apiVersion}/refresh-access-token-usuario`;
    const bodyObj = {
        refreshTokenUser: refreshTokenUser
    }
    const params = {
        method: "POST",
        body: JSON.stringify(bodyObj),
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch(url,params).then(response => {
        if(response.status !== 200){
            return null;
        }
        return response.json();
    }).then(result => {
        if(!result){
            logoutUser();
        }else{
            const {accessTokenUser, refreshTokenUser } = result;
            localStorage.setItem(ACCESS_TOKEN_USER, accessTokenUser);
            localStorage.setItem(REFRESH_TOKEN_USER, refreshTokenUser);
        }
    });
}

export function logoutUser(){
    localStorage.removeItem(ACCESS_TOKEN_USER);
    localStorage.removeItem(REFRESH_TOKEN_USER);
};

function willExpireTokenUser(token){
    const seconds = 60;
    const metaToken = jwtDecode(token);
    const {exp} = metaToken;
    const now = (Date.now() + seconds) / 1000;
    return now > exp;
};