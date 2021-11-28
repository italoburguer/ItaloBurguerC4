import { Tabs, notification } from "antd";
import React, {useState} from "react";
import { Redirect } from "react-router";
import AppHeader from "../../../components/client/appHeader/appHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signUpApi } from "../../../api/user";
import { faEnvelope, faLock, faSignInAlt, faUserAlt, faPhone, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

import "./sigIn.css";

export default function SignIn(){

    const [inputs, setInputs] = useState({
        nombre: "",
        apellido:"",
        email: "",
        password: "",
        pass2: "",
        telefono: "",
        direccion: ""
      });
      const [formValid, setFormValid] = useState({
        nombre: false,
        apellido:false,
        email: false,
        password: false,
        pass2: false,
        telefono: false,
        direccion: false,
      });
    
      const changeForm = e => {
          setInputs({
            ...inputs,
            [e.target.name]: e.target.value
          });
        }
    
      const register = async e => {
        e.preventDefault();
        const nombreVal = inputs.nombre;
        const apellidoVal = inputs.apellido;
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const pass2Val = inputs.pass2;
        const telefonoVal = inputs.telefono;
        const direccionVal = inputs.direccion;
    
        if (!nombreVal || !apellidoVal || !emailVal || !passwordVal || !pass2Val || !telefonoVal || !direccionVal) {
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
          nombre: "",
          apellido: "",
          email: "",
          password: "",
          pass2: "",
          telefono: "",
          direccion: "",
        });
    
        setFormValid({
          nombre: false,
          apellido: false,
          email: false,
          password: false,
          pass2: false,
          telefono: false,
          direccion: false,
        });
      };
    

    return(
        <div>
            <AppHeader />
            <div className="containerLoginUser">
            <div className="containerForm">
                <div className="formLoginUser">
                    <Tabs>
                        <Tabs.TabPane tab={<span>Entrar</span>} key="1">
                            <div className="formLogin">
                              <form>
                                <label>INICIA SESIÓN</label>
                                <div className="inputsLabelStyle">
                                    <div className="labelFormLoginUser">
                                        <label>Ingrese su email</label>
                                    </div>
                                    <div className="inputsLoginUser">
                                        <div className="inputsIcon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div>
                                        <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="inputsLabelStyle">
                                    <div className="labelFormLoginUser">
                                        <label>Ingrese su contraseña</label>
                                    </div>
                                    <div className="inputsLoginUser">
                                        <div className="inputsIcon">
                                        <FontAwesomeIcon icon={faLock} />
                                        </div>
                                        <div>
                                        <input type="password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="buttonLoginUser">
                                    <button className>Iniciar Sesion &nbsp;&nbsp;<FontAwesomeIcon icon={faSignInAlt}/></button>
                                </div>
                              </form>
                            </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab={<span>Registrate</span>}key="2">
                        <div className="formLogin">
                              <form onChange={changeForm} onSubmit={register}>
                                <label>REGISTRATE</label>
                                <div className="inputsLabelStyle">
                                    <div className="labelFormLoginUser">
                                        <label>Ingrese su nombre</label>
                                    </div>
                                    <div className="inputsLoginUser">
                                        <div className="inputsIcon">
                                        <FontAwesomeIcon icon={faUserAlt} />
                                        </div>
                                        <div>
                                        <input type="text" name="nombre" value={inputs.nombre} />
                                        </div>
                                    </div>
                                </div>
                                <div className="inputsLabelStyle">
                                    <div className="labelFormLoginUser">
                                        <label>Ingrese su apellido</label>
                                    </div>
                                    <div className="inputsLoginUser">
                                        <div className="inputsIcon">
                                        <FontAwesomeIcon icon={faUserAlt} />
                                        </div>
                                        <div>
                                        <input type="text" name="apellido" value={inputs.apellido}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="inputsLabelStyle">
                                    <div className="labelFormLoginUser">
                                        <label>Ingrese su email</label>
                                    </div>
                                    <div className="inputsLoginUser">
                                        <div className="inputsIcon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div>
                                        <input type="email" name="email" value={inputs.email}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="inputsLabelStyle">
                                    <div className="labelFormLoginUser">
                                        <label>Ingrese su contraseña</label>
                                    </div>
                                    <div className="inputsLoginUser">
                                        <div className="inputsIcon">
                                        <FontAwesomeIcon icon={faLock} />
                                        </div>
                                        <div>
                                        <input type="password" name="password" value={inputs.password} />
                                        </div>
                                    </div>
                                </div>
                                <div className="inputsLabelStyle">
                                    <div className="labelFormLoginUser">
                                        <label>Confirme su contraseña</label>
                                    </div>
                                    <div className="inputsLoginUser">
                                        <div className="inputsIcon">
                                        <FontAwesomeIcon icon={faLock} />
                                        </div>
                                        <div>
                                        <input type="password" name="pass2" value={inputs.pass2}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="inputsLabelStyle">
                                    <div className="labelFormLoginUser">
                                        <label>Ingrese su telefono</label>
                                    </div>
                                    <div className="inputsLoginUser">
                                        <div className="inputsIcon">
                                        <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <div>
                                        <input type="text" name="telefono" value={inputs.telefono}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="inputsLabelStyle">
                                    <div className="labelFormLoginUser">
                                        <label>Ingrese su dirección</label>
                                    </div>
                                    <div className="inputsLoginUser">
                                        <div className="inputsIcon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                        </div>
                                        <div>
                                        <input type="text" name="direccion" value={inputs.direccion}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttonLoginUser">
                                    <button type="submit">Registrarse &nbsp;&nbsp;<FontAwesomeIcon icon={faSignInAlt}/></button>
                                </div>
                              </form>
                            </div>
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
        </div>
    );
}
