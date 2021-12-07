import React from "react";
import { faHamburger, faEnvelope, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAccessTokenUserApi, logoutUser } from "../../api/authUser";
import jwtDecode from "jwt-decode";

export default function Home(){

	const logout = () =>{
		logoutUser();
		window.location.reload();
	  }

	function ChangeButtonLoginLogout(){
		if(getAccessTokenUserApi()){
		  return <li className="logoutButtonUser" onClick={logout}><a ><div className="textLogout">CERRAR SESION</div></a></li>
		}else{
		  return <li><a href="/login">INICIAR SESIÓN</a></li>
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
       <div>
           <div class='preloader'><div class='loaded'>&nbsp;</div></div>
	<header id="home" class="header">
		<div class="main_menu_bg navbar-fixed-top wow slideInDown" data-wow-duration="1s">
			<div class="container">
				<div class="row">
					<div class="nave_menu">
					<nav class="navbar navbar-default">
						<InfoUser />
					  <div class="container-fluid">
						<div class="navbar-header">
						<div className="logoHeader">
               			     ITALO BURGUER<FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>
               			 </div>
						  
						</div>
						<div className="container-nav-item-item">
			  <ul class="nav navbar-nav navbar-right">
				<li><a href="/">HOME</a></li>
				<li><a href="/menu">MENU</a></li>
				<ChangeButtonLoginLogout />
			  </ul>
			</div>
					  </div>
					</nav>
					</div>	
				</div>
				
			</div>
			
		</div>
	</header> 
	
	<section id="banner" class="banner">
		<div class="container">
			<div class="row">
				<div class="main_banner_area text-center">
					<div class="col-md-5 col-sm-5 col-md-offset-7 col-sm-offset-7">
						<div class="single_banner_text wow zoomIn" data-wow-duration="1s">
							<p style={{color: "rgba(255, 255, 255, 0.7)"}}>Disfruta de las mejores hamburguesas!!</p>
							
							<div class="separetor"></div>
						</div>
					</div>
					
					
					<div class="scrolldown">
						<a class="scroll_btn"></a>
					</div>
				</div>
				
				
			</div>
		</div>
	</section>
	
	<section id="features" class="features sections">
		<div class="container">
			<div class="row">
				<div class="features_content text-center">
					<div class="col-md-4">
						<div class="sinle_features wow slideInUp" data-wow-duration="1s">
							<img src="images/icon1.png" alt="" />
							<h5>Servicio de calidad</h5>
							<p>El mejor servicio al cliente que puedas tener, entregas rapidas!! </p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="sinle_features wow slideInUp" data-wow-duration="1.5s">
							<img src="images/icon1.png" alt="" />
							<h5>Calidad de ingredientes</h5>
							<p>Los ingredientes mas frescos los encontraras aqui, para que disfrutes de tu hamburguesa lo mejor posible. </p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="sinle_features wow slideInUp" data-wow-duration="2s">
							<img src="images/icon1.png" alt="" />
							<h5>Super precios</h5>
							<p>Tenemos buenos precios y super promociones. </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>	
	
	<section id="abouts" class="abouts sections">
		<div class="container">
			<div class="row">
				<div class="main_abouts">
					<div class="col-md-6 col-sm-6 col-xs-12">
						<div class="single_abouts wow slideInLeft" data-wow-duration="2s">
							<div class="head_title text-center">
								<h2>Sobre nosotros</h2>
								<div class="separetor"></div>
							</div>
							
							<p>Somos un restaurante donde nuestra prioridad es la satisfación al cliente, ofrecemos productos de buena calidad y a un precio accesible. </p>
							<div class="signature_img text-right">
								<img src="images/signature.png" alt="" />
							</div>
						</div>
					</div>
					
					<div class="col-md-6 col-sm-6 col-xs-12">
						<div class="single_abouts wow slideInRight" data-wow-duration="2s">
							<img src="images/abimg.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

    

    </div>
    )
}