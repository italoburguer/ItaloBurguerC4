import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routes from "./config/routes";
import AuthProviderAdmin from "./provider/AuthProviderAdmin";

function App() {
  return (
     <div>

     
  
   <AuthProviderAdmin>
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
   </AuthProviderAdmin>

   <div class='preloader'><div class='loaded'>&nbsp;</div></div>
	<header id="home" class="header">
		<div class="main_menu_bg navbar-fixed-top wow slideInDown" data-wow-duration="1s">
			<div class="container">
				<div class="row">
					<div class="nave_menu">
					<nav class="navbar navbar-default">
					  <div class="container-fluid">
						<div class="navbar-header">
						  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						  </button>
						  
						</div>

						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						  
						  <ul class="nav navbar-nav navbar-right">
							<li class="active"><a href="#home">Home</a></li>
							<li><a href="#features">FEATURES</a></li>
							<li><a href="#special">PRICINGS</a></li>
							<li><a href="#abouts">CLIENTS</a></li>
							<li><a href="#footer">FAQ</a></li>
							
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
							<img src="public/images/icon1.png" alt="" />
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
	
	<section id="menus" class="menus sections">
		<div class="container">
			<div class="row">
				<div class="main_menus">
					<div class="head_title text-center wow slideInDown" data-wow-duration="2s">
						<h2>Menu</h2>
						<div class="separetor"></div>
					</div>
					
					<div class="menus_top_menu text-center wow slideInDown" data-wow-duration="1.5s">
						<ul>
							<li class="active"><a href="">Starters</a></li>
							<li><a href="">Main Dishes</a></li>
							<li><a href="">Desserts</a></li>
							<li><a href="">Drinks</a></li>
						</ul>
					</div>
					
					<div class="col-md-6 col-sm-6 col-xs-12">
						<div class="single_menus wow slideInLeft" data-wow-duration="1.5s">
							<ul>
								<li> SMOKED RICOTTA TERRINE   ........................................................... 12$ <span> ricotta, shallots, cheddar, capers</span></li>
								<li> SMOKED RICOTTA TERRINE   ........................................................... 12$ <span> ricotta, shallots, cheddar, capers</span></li>
								<li> SMOKED RICOTTA TERRINE   ........................................................... 12$ <span> ricotta, shallots, cheddar, capers</span></li>
								<li> SMOKED RICOTTA TERRINE   ........................................................... 12$ <span> ricotta, shallots, cheddar, capers</span></li>
								<li> SMOKED RICOTTA TERRINE   ........................................................... 12$ <span> ricotta, shallots, cheddar, capers</span></li>
								<li> SMOKED RICOTTA TERRINE   ........................................................... 12$ <span> ricotta, shallots, cheddar, capers</span></li>
								<li> SMOKED RICOTTA TERRINE   ........................................................... 12$ <span> ricotta, shallots, cheddar, capers</span></li>
								
							</ul>
						</div>
					</div>
					
					<div class="col-md-6 col-sm-6 col-xs-12">
						<div class="single_menus wow slideInRight" data-wow-duration="1.5s">
							<ul>
								<li> SMOKED RICOTTA TERRINE   ........................................................... 12$ <span> ricotta, shallots, cheddar, capers</span></li>
								<li> SMOKED RICOTTA TERRINE   ........................................................... 12$ <span> ricotta, shallots, cheddar, capers</span></li>
								<li> SMOKED RICOTTA TERRINE   ........................................................... 12$ <span> ricotta, shallots, cheddar, capers</span></li>
								<li> SMOKED RICOTTA TERRINE   ........................................................... 12$ <span> ricotta, shallots, cheddar, capers</span></li>
								<li> SMOKED RICOTTA TERRINE   ........................................................... 12$ <span> ricotta, shallots, cheddar, capers</span></li>
								<li> SMOKED RICOTTA TERRINE   ........................................................... 12$ <span> ricotta, shallots, cheddar, capers</span></li>
								<li> SMOKED RICOTTA TERRINE   ........................................................... 12$ <span> ricotta, shallots, cheddar, capers</span></li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	

	
	<footer id="footer" class="footer">
		<div class="container">
			<div class="row">
				
				<div class="col-sm-5 col-sm-offset-7 col-xs-10 col-xs-offset-2">
					<div class="contact_area wow slideInLeft" data-wow-duration="2s">
						<div class="head_title text-center">
							<h2>Contact</h2>
							<div class="separetor"></div>
						</div>
						
						<div class="main_contact_content">
							<div class="row">
								<div class="col-sm-6">
									<div class="single_contact text-left">
										<h5>Veggie </h5>
										<span>3428 Magnolia Avenue</span> 
										<span>Hackettstown, NJ 07840</span>
									</div>
								</div>
								
								<div class="col-sm-6">
									<div class="single_contact text-left">
										<h5>Reservations</h5>
										<span>reservations@vegggie.com</span> 
										<span>+48 202-555-0114</span>
									</div>
								</div>
							</div>
							
							<div class="contact_form_area">
								<h3>Contact form</h3>
								<form action="#" id="formid">
									<div class="row">
										<div class="col-sm-6 col-xs-6">
											<div class="form-group">
												<input type="text" class="form-control" name="name" placeholder="first name"/>
											</div>
										</div>

										<div class="col-sm-6 col-xs-6">
											<div class="form-group">
												<input type="email" class="form-control" name="email" placeholder="Email"/>
											</div>
										</div>
									</div>
									
									<div class="row">
										<div class="col-sm-12">
											<div class="form-group">
												<textarea class="form-control" name="message" rows="3" placeholder="Message"></textarea>
											</div>
											
											
										</div>

										<div class="form_btn_area text-center">
											<a href="" class="btn">Send</a>
										</div>
									</div>
								</form>	
							</div>
							
						</div>
						
					</div>
				</div>
			</div>
			
			
			<div class="row">
				<div class="copyright_text_area">
					<div class="col-md-6 col-sm-6 col-xs-12">
						<div class="single_footer text-right wow zoomIn" data-wow-duration="2s">
							<p>Made with <i class="fa fa-heart"></i> by <a href="http://bootstrapthemes.co">Bootstrap Themes</a>2016. All Rights Reserved</p>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-12">
						<div class="single_footer text-right">
							
							<div class="footer_socail wow zoomIn" data-wow-duration="1.5s">
								<a href=""><i class="fa fa-facebook"></i></a>
								<a href=""><i class="fa fa-linkedin"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>



   </div>
  
  );
}

function RouteWithSubRoutes(route){
  return (
    <Route
    path={route.path}
    exact={route.exact}
    render={props => <route.component routes={route.routes} {...props} />}  
    />
  );
}

export default App;
