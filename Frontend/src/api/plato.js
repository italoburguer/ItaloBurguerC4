import {basePath, apiVersion} from "./config"

export function getPlatoApi(){
    const url = `${basePath}/${apiVersion}/get-plato`;

    return fetch(url).then(response => {
        return response.json()
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    });
}