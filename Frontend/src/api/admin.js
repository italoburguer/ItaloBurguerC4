import {basePath, apiVersion} from "./config"

export async function loginApi(data){
    const url = `${basePath}/${apiVersion}/login`;

const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (err) {
        return err.message;
    }
}

export async function signUpApi(data) {
    const url = `${basePath}/${apiVersion}/registro`;
    const params = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    try {
        const response = await fetch(url, params);
        const result = await response.json();
        if (result.admin) {
            return { ok: true, message: "Nueva cuenta de administrador creada correctamente" };
        }
        return { ok: false, message: result.message };
    } catch (err) {
        return { ok: false, message: err.message };
    }
}