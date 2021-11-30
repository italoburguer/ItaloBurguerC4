import { basePath, apiVersion } from "./config";

export async function addCarritoApi(token, carrito){
    const url = `${basePath}/${apiVersion}/add-carrito`;

    const params = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(carrito)
    };

    try {
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (err) {
        return err;
    }
}