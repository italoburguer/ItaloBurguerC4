
import {basePath, apiVersion} from "./config"

export async function getPlatoApi(){
    const url = `${basePath}/${apiVersion}/get-plato`;

    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (err) {
        return err;
    }
}

export async function deletePlatoApi(token, id){
    const url = `${basePath}/${apiVersion}/delete-plato/${id}`;

    const params = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: token  
        }
    };
    
    try {
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (err) {
        return err;
    }
}

export async function addPlatoApi(token, plato){
    const url = `${basePath}/${apiVersion}/add-plato`;

    const params = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(plato)
    };

    try {
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (err) {
        return err;
    }
}

export async function updatePlatoApi(token, id, data){
    const url = `${basePath}/${apiVersion}/update-plato/${id}`

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token  
        },
        body: JSON.stringify(data)
    };
    try {
        const response = await fetch(url, params);
        const result= await response.json();
        return result;
    } catch (err) {
        return err;
    }
}