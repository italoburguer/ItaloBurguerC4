import { basePath, apiVersion } from "./config";

export async function addCarritoApi(data){
    const url = `${basePath}/${apiVersion}/add-carrito`;

    const params = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (err) {
        return err;
    }
}