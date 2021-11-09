import React from "react";
import "./signIn.css";
import ImgForm from "../../../assets/img/jpg/imgLogin.jpg";
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignIn(){
    return(
      <div className="container">
          <section>
          <div className="containerLogin">
              <div className="imgLogin">
              <img className="menu-top__logo"
                    src={ImgForm}
                    alt=""
                />
              </div>
              <div className="formLogin">
                <div className="title">
                <label className="titleFormLogin"><span className="titleFormLogin-color">ADMIN&nbsp;</span>ITALO BURGUER&nbsp;&nbsp;<FontAwesomeIcon icon={faHamburger}/></label>
                </div>
                <div className="inputsFormLogin">
                    <h2 className="titleInput">INICIA SESIÓN</h2>
                    <form className="formLoginInputs">
                        <label className="labelForm">Correo electronico</label><br/>
                        <input type="email" 
                        name="email"
                        placeholder="example@example.com"
                        className="inputForm"/><br/>
                        <label className="labelForm">Contraseña</label><br/>
                        <input type="password"
                        name="password"
                        placeholder="Ingrese contraseña"
                        className="inputForm"/>
                    </form>
                </div>
              </div>
          </div>
      </section>
      </div>
    )
}