import {basePath, apiVersion} from "./config";

export async function signUpApi(data) {
    const url = `${basePath}/${apiVersion}/registro-user`;
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
        if (result.user) {
            return { ok: true, message: "Usuario registrado correctamente" };
        }
        return { ok: false, message: result.message };
    } catch (err) {
        return { ok: false, message: err.message };
    }
}

export async function signInApi(data) {
  const url = `${basePath}/${apiVersion}/inicio-user`;
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