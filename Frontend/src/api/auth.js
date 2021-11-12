import { basePath, apiVersion } from './config';
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../utils/constants";
import jwtDecode from 'jwt-decode';

export function getAccesTokenApi(){
    const accessTokenAdmin = localStorage.getItem(ACCESS_TOKEN);

    if(!accessTokenAdmin || accessTokenAdmin === "null"){
        return null;
    }

    return expireToken(accessTokenAdmin) ? null: accessTokenAdmin;
};

export function getRefreshTokenApi(){
    const refreshTokenAdmin = localStorage.getItem(REFRESH_TOKEN);

    if(!refreshTokenAdmin || refreshTokenAdmin === "null"){
        return null;
    }

    return expireToken(refreshTokenAdmin) ? null: refreshTokenAdmin;
}

export function refreshAccessTokenApi(refreshToken){
    const url = `${basePath}/${apiVersion}/refresh-access-token`;
    const bodyObj = {
        refreshToken: refreshToken
    }

    const params = {
        method: "POST",
        body: JSON.stringify(bodyObj),
        Headers: {
            "Content-Type": "applicaton/json"
        }
    };

    fetch(url, params).then(respone => {
        if(respone.status !== 200){
            return null;
        }
        return respone.json();
    }).then(result =>{
        if(!result){
            logout();
        }else{
            const {accessTokenAdmin, refreshTokenAdmin } = result;
            localStorage.setItem(ACCESS_TOKEN, accessTokenAdmin);
            localStorage.setItem(REFRESH_TOKEN, refreshTokenAdmin);
        }
    });
}

export function logout(){
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
}

function expireToken(token){
    const seconds = 60;
    const metaToken = jwtDecode(token);
    const { exp } = metaToken;
    const now = (Date.now() + seconds) / 1000;
    return now > exp;
}