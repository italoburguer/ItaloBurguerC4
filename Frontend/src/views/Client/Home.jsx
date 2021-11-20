import React from "react";
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home(){
    return(
       <div>
           <div class='preloader'><div class='loaded'>&nbsp;</div></div>
	<header id="home" class="header">
		<div class="main_menu_bg navbar-fixed-top wow slideInDown" data-wow-duration="1s">
			<div class="container">
				<div class="row">
					<div class="nave_menu">
					<nav class="navbar navbar-default">
					  <div class="container-fluid">
						<div class="navbar-header">
						<div className="logoHeader">
               			     ITALO BURGUER<FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>
               			 </div>
						  
						</div>

						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						  
						  <ul class="nav navbar-nav navbar-right">
						  <li class="active"><a href="/">Home</a></li>
						  <li><a href="/menu">MENU</a></li>
						  <li><a href="/pedidos">MIS PEDIDOS</a></li>
						  <li><a href="/login">INICIAR SESIÓN</a></li>
							
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
							<p>Veggies es bonus vobis, proinde vos postulo essum.</p>
							
							<div class="separetor"></div>
						</div>
					</div>
					
					
					<div class="scrolldown">
						<a href="#special" class="scroll_btn"></a>
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
							<h5>Turnip greens</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat. </p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="sinle_features wow slideInUp" data-wow-duration="1.5s">
							<img src="images/icon1.png" alt="" />
							<h5>Turnip greens</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat. </p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="sinle_features wow slideInUp" data-wow-duration="2s">
							<img src="images/icon1.png" alt="" />
							<h5>Turnip greens</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat. </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>	
	
	<section id="special" class="special sections">
		<div class="container">
			<div class="row">
				<div class="head_title text-center wow slideInLeft" data-wow-duration="1.5s">
					<h2>This month specials</h2>
					<div class="separetor"></div>
				</div>
				<div class="main_special text-center wow slideInUp" data-wow-duration="3s">
					
					<div class="col-md-2 col-sm-3 col-xs-6 single_special">
						<div class="single_special_img">
							<img src="images/s1.png" alt="" />
							<div class="single_special_overlay text-center">
								<h3>Greens fava</h3>
								<div class="overlay_separetor"></div>
								<p>Lorem ipsum dolor sit Pellentesque vel enim a</p>
								<p>17$</p>
							</div>
						</div>
					</div>
					<div class="col-md-2 col-sm-3 col-xs-6 single_special">
						<div class="single_special_img">
							<img src="images/p2.jpg" alt="" />
							<div class="single_special_overlay text-center">
								<h3>Greens fava</h3>
								<div class="overlay_separetor"></div>
								<p>Lorem ipsum dolor sit Pellentesque vel enim a</p>
								<p>17$</p>
							</div>							
						</div>
					</div>
					<div class="col-md-2 col-sm-3 col-xs-6 single_special">
						<div class="single_special_img">
							<img src="images/p3.jpg" alt="" />
							<div class="single_special_overlay text-center">
								<h3>Greens fava</h3>
								<div class="overlay_separetor"></div>
								<p>Lorem ipsum dolor sit Pellentesque vel enim a</p>
								<p>17$</p>
							</div>							
						</div>
					</div>
					<div class="col-md-2 col-sm-3 col-xs-6 single_special">
						<div class="single_special_img">
							<img src="images/p4.jpg" alt="" />
							<div class="single_special_overlay text-center">
								<h3>Greens fava</h3>
								<div class="overlay_separetor"></div>
								<p>Lorem ipsum dolor sit Pellentesque vel enim a</p>
								<p>17$</p>
							</div>							
						</div>
					</div>
					<div class="col-md-2 col-sm-3 col-xs-6 single_special">
						<div class="single_special_img">
							<img src="images/p5.jpg" alt="" />
							<div class="single_special_overlay text-center">
								<h3>Greens fava</h3>
								<div class="overlay_separetor"></div>
								<p>Lorem ipsum dolor sit Pellentesque vel enim a</p>
								<p>17$</p>
							</div>							
						</div>
					</div>
					<div class="col-md-2 col-sm-3 col-xs-6 single_special">
						<div class="single_special_img">
							<img src="images/p6.jpg" alt="" />
							<div class="single_special_overlay text-center">
								<h3>Greens fava</h3>
								<div class="overlay_separetor"></div>
								<p>Lorem ipsum dolor sit Pellentesque vel enim a</p>
								<p>17$</p>
							</div>							
						</div>
					</div>
					<div class="col-md-2 col-sm-3 col-xs-6 single_special">
						<div class="single_special_img">
							<img src="images/p6.jpg" alt="" />
							<div class="single_special_overlay text-center">
								<h3>Greens fava</h3>
								<div class="overlay_separetor"></div>
								<p>Lorem ipsum dolor sit Pellentesque vel enim a</p>
								<p>17$</p>
							</div>							
						</div>
					</div>
					<div class="col-md-2 col-sm-3 col-xs-6 single_special">
						<div class="single_special_img">
							<img src="images/p5.jpg" alt="" />
							<div class="single_special_overlay text-center">
								<h3>Greens fava</h3>
								<div class="overlay_separetor"></div>
								<p>Lorem ipsum dolor sit Pellentesque vel enim a</p>
								<p>17$</p>
							</div>							
						</div>
					</div>
					<div class="col-md-2 col-sm-3 col-xs-6 single_special">
						<div class="single_special_img">
							<img src="images/p4.jpg" alt="" />
							<div class="single_special_overlay text-center">
								<h3>Greens fava</h3>
								<div class="overlay_separetor"></div>
								<p>Lorem ipsum dolor sit Pellentesque vel enim a</p>
								<p>17$</p>
							</div>							
						</div>
					</div>
					<div class="col-md-2 col-sm-3 col-xs-6 single_special">
						<div class="single_special_img">
							<img src="images/p3.jpg" alt="" />
							<div class="single_special_overlay text-center">
								<h3>Greens fava</h3>
								<div class="overlay_separetor"></div>
								<p>Lorem ipsum dolor sit Pellentesque vel enim a</p>
								<p>17$</p>
							</div>							
						</div>
					</div>
					<div class="col-md-2 col-sm-3 col-xs-6 single_special">
						<div class="single_special_img">
							<img src="images/p2.jpg" alt="" />
							<div class="single_special_overlay text-center">
								<h3>Greens fava</h3>
								<div class="overlay_separetor"></div>
								<p>Lorem ipsum dolor sit Pellentesque vel enim a</p>
								<p>17$</p>
							</div>							
						</div>
					</div>
					<div class="col-md-2 col-sm-3 col-xs-6 single_special">
						<div class="single_special_img">
							<img src="images/s1.png" alt="" />
							<div class="single_special_overlay text-center">
								<h3>Greens fava</h3>
								<div class="overlay_separetor"></div>
								<p>Lorem ipsum dolor sit Pellentesque vel enim a</p>
								<p>17$</p>
							</div>							
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
								<h2>About us</h2>
								<div class="separetor"></div>
							</div>
							
							<p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
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