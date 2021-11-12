import {basePath, apiVersion} from "./config"

export function loginApi(data){
    const url = `${basePath}/${apiVersion}/login`;

const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(url, params).then(response => {
       return response.json();
    }).then(result => {
        return result;
    }).catch(err =>{
        return err.message;
    });
}