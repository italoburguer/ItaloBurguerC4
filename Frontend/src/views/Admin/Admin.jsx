import React, {useState} from "react";
import { notification } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt, faLock, faSignInAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { signUpApi } from "../../api/admin";

import "./Admin.css";


export default function Admin(){
    const [inputs, setInputs] = useState({
        usuario: "",
        email: "",
        password: "",
        pass2: "",
    });
    const [formValid, setFormValid] = useState({
        usuario: false,
        email: false,
        password: false,
        pass2: false
    });
    
    const changeForm = e => {
          setInputs({
            ...inputs,
            [e.target.name]: e.target.value
          });
    }
    const register = async e => {
        e.preventDefault();
        const usuarioVal = inputs.usuario;
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const pass2Val = inputs.pass2;
    
        if (!usuarioVal || !emailVal || !passwordVal || !pass2Val) {
          notification["error"]({
            message: "Rellene todos los campos, son obligatorios."
          });
        } else {
          if (passwordVal !== pass2Val) {
            notification["error"]({
              message: "Las contraseñas tienen coincidir."
            });
          } else {
            const result = await signUpApi(inputs);
            if (!result.ok) {
              notification["error"]({
                message: result.message
              });
            } else {
              notification["success"]({
                message: result.message
              });
              resetForm();
            }
          }
        }
    };
    
    const resetForm = () => {
        const inputs = document.getElementsByTagName("input");
    
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].classList.remove("success");
          inputs[i].classList.remove("error");
        }
    
        setInputs({
          usuario: "",
          email: "",
          password: "",
          pass2: "",
        });
    
        setFormValid({
          usuario: false,
          email: false,
          password: false,
          pass2: false,
        });
    };
    return (
        <section id="admin-panel">
            <div className="formNewAdmin">
                                <div className="formLogin">
                              <form onChange={changeForm} onSubmit={register}>
                                <div className="tittleAdminRegister">
                                    NUEVO ADMIN
                                </div>
                                <div className="containerFormAdmin">
                                <div className="inputsAdminContainer">
                                  <div className="titleAdminInput">Nombre de usuario:</div>
                                  <div className="inputAdminFoem"><FontAwesomeIcon icon={faUserAlt}/>&nbsp;&nbsp;<input type="text" name="usuario" value={inputs.usuario} /></div>
                                </div>
                                <div className="inputsAdminContainer">
                                  <div className="titleAdminInput">Correo electronico:</div>
                                  <div className="inputAdminFoem"><FontAwesomeIcon icon={faEnvelope}/>&nbsp;&nbsp;<input type="email" name="email" value={inputs.email}/></div>
                                </div>
                                <div className="inputsAdminContainer">
                                  <div className="titleAdminInput">Contraseña:</div>
                                  <div className="inputAdminFoem"><FontAwesomeIcon icon={faLock}/>&nbsp;&nbsp;<input type="password" name="password" value={inputs.password}/></div>
                                </div>
                                <div className="inputsAdminContainer">
                                  <div className="titleAdminInput">Repita contraseña:</div>
                                  <div className="inputAdminFoem"><FontAwesomeIcon icon={faLock}/>&nbsp;&nbsp;<input type="password" name="pass2" value={inputs.pass2}/></div>
                                </div>
                                <div className="buttonFormAdmin">
                                  <button type="submit">Registrar cuenta &nbsp;&nbsp;<FontAwesomeIcon icon={faSignInAlt}/></button>
                                </div>
                                </div>
                              </form>
                        </div>
            </div>
        </section>
    )
}