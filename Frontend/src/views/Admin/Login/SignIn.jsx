import React, { useState } from "react";
import "./signIn.css";
import {Descriptions, notification} from "antd";
import ImgForm from "../../../assets/img/jpg/imgLogin.jpg";
import { faHamburger, faEnvelope, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAccesTokenApi } from '../../../api/auth'
import {loginApi} from '../../../api/admin';
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../../../utils/constants';
import { Redirect, useParams } from "react-router";

export default function SignIn(){

    
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const changeForm = e =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const login = async e =>{
        e.preventDefault();
        
        const result = await loginApi(inputs);

        if(result.message){
            const authError = result.message;
            notification.open({
                type: "error",
                message: "Error al inicar sesion",
                description: authError
            });
        }else{
           
           const { accessTokenAdmin, refreshTokenAdmin }  = result;
           localStorage.setItem(ACCESS_TOKEN, accessTokenAdmin);
           localStorage.setItem(REFRESH_TOKEN, refreshTokenAdmin); 
           window.location.href = "/admin"
        }
    };

    if(getAccesTokenApi()){
        return <Redirect to="/admin" />
    }

    return(
      <div className="containerSignIn">
          <section className="SignIn">
          <div className="containerLogin">
              <div className="imgLogin">
              <img className="menu-top__logo"
                    src={ImgForm}
                    alt=""
                />
              </div>
              <div className="formLogin" onSubmit={login}>
                <div className="title">
                <label className="titleFormLogin"><span className="titleFormLogin-color">ADMIN&nbsp;</span>ITALO BURGUER&nbsp;&nbsp;<FontAwesomeIcon icon={faHamburger}/></label>
                </div>
                <div className="inputsFormLogin">
                    <h2 className="titleInput">INICIA SESIÓN</h2>
                    <form className="formLoginInputs" onChange={changeForm}>
                       <div className="containerInput">
                            <div className="labelInput">
                                <label>Ingrese su email</label>
                            </div>
                            <div className="inputForm">
                            <FontAwesomeIcon icon={faEnvelope}/>&nbsp;&nbsp;
                                <input type="email"
                                name="email"
                                placeholder="example@example.com"
                                className="Input"/>
                            </div>
                       </div>
                       <div className="containerInput">
                            <div className="labelInput">
                                <label>Ingrese su contraseña</label>
                            </div>
                            <div className="inputForm">
                            <FontAwesomeIcon icon={faLock}/>&nbsp;&nbsp;
                                <input type="password"
                                name="password"
                                placeholder="password"
                                className="Input"/>
                            </div>
                       </div>
                       <div className="containerButton">
                           <button type="submit" className="btnForm">
                               Log In &nbsp;&nbsp;<FontAwesomeIcon icon={faSignInAlt}/>
                           </button>
                       </div>
                       
                    </form>
                </div>
              </div>
          </div>
      </section>
      </div>
    )
}