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

function willExpireTokenUser(token){
    const seconds = 60;
    const metaToken = jwtDecode(token);
    const {exp} = metaToken;
    const now = (Date.now() + seconds) / 1000;
    return now > exp;
}