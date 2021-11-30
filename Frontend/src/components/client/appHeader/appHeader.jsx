import React from "react";
import { faHamburger, faShoppingCart, faUserAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAccessTokenUserApi } from "../../../api/authUser";
import { logoutUser } from "../../../api/authUser";
import "./appHeader.css";
import jwtDecode from "jwt-decode";

export default function appHeader(props){

   const {count, showModal} = props;

    const logout = () =>{
      logoutUser();
      window.location.reload();
    }

    let active="";
    let active2="";
    let active3="";

    const ruta = window.location.pathname;
    
    if(ruta === "/menu"){
        active = "active";
    }if(ruta === "/misPedidos"){
        active2 = "active"
    }if(ruta === "/login"){
        active3 = "active"
    }

    function ShowCarrito(){
      if(ruta==="/menu"){
       return(
           <li className="iconCart"
              style={{
                  borderRadius:"5px", 
                  padding:"5px", 
                  background:"rgb(10, 25, 41)",
                  color:"#fff",
                  cursor:"pointer"
              }}
              onClick={showModal}>
              <FontAwesomeIcon icon={faShoppingCart}/> <span style={{color:"#87CEEB", borderRadius:"5px", top:"0"}}>{count}</span></li>
       ) 
      }else{
        return(
          <div></div>
        )
      }
    }

    function ChangeButtonLoginLogout(){
      if(getAccessTokenUserApi()){
        return <li className="logoutButtonUser" onClick={logout}><a ><div className="textLogout">CERRAR SESION</div></a></li>
      }else{
        return <li className={active3} ><a href="/login">INICIAR SESIÓN</a></li>
      }
    }

    function InfoUser(){
      if(getAccessTokenUserApi()){
        const data = jwtDecode(getAccessTokenUserApi());

        const nameUser = Object.values({
          "": data.nombre
        })
        const lastNameUser = Object.values({
          "": data.apellido
        })
        const emailUser = Object.values({
          "": data.email
        })

        return <div style={{color: "rgb(10, 25, 41)", marginLeft:"57px",position:"fixed"}}><FontAwesomeIcon icon={faUserAlt}/> {nameUser}&nbsp;{lastNameUser}&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faEnvelope} /> {emailUser}</div>
      }else{
        return <div></div>
      }
    }

    return(
        <div className="div__fixed__header">
            <nav class="navbar-default">
            <InfoUser />
		      <div class="container-fluid">
			    <div class="navbar-header">
                <div className="logoHeader">
                ITALO BURGUER<FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>
                </div>
			</div>
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			  <ul class="nav navbar-nav navbar-right">
				<li><a href="/">HOME</a></li>
				<li className={active} ><a href="/menu">MENU</a></li>
				<li className={active2} ><a href="/misPedidos">MIS PEDIDOS</a></li>
				<ChangeButtonLoginLogout />
        <ShowCarrito />
			  </ul>
			</div>
		  </div>
	    </nav>
        </div>
    );
  }
