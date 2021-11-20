import React from "react";
import { faHamburger} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./appHeader.css"

export default function appHeader(){

    let active="";
    let active2="";
    let active3="";

    const ruta = window.location.pathname;
    
    if(ruta === "/menu"){
        active = "active";
    }if(ruta === "/pedidos"){
        active2 = "active"
    }if(ruta === "/login"){
        active3 = "active"
    }

    return(
        <div className="div__fixed__header">
            <nav class="navbar-default">
		  <div class="container-fluid">
			<div class="navbar-header">
                <div className="logoHeader">
                ITALO BURGUER<FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>
                </div>
			</div>
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			  
			  <ul class="nav navbar-nav navbar-right">
				<li><a href="/">Home</a></li>
				<li class={active} ><a href="/menu">MENU</a></li>
				<li class={active2} ><a href="/pedidos">MIS PEDIDOS</a></li>
				<li class={active3} ><a href="/login">INICIAR SESIÓN</a></li>
				
			  </ul>
			</div>
		  </div>
	    </nav>
        </div>
    );
}