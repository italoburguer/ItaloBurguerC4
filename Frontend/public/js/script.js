
jQuery(document).ready(function() {
	
	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(0).fadeOut("slow");
	});
	jQuery(window).scroll(function () {
	  var top = jQuery(document).scrollTop();
		var height = 300;
	  //alert(batas);
	  
	  if (top > height) {
		jQuery('.navbar-fixed-top').addClass('menu-scroll');
	  } else {
	   jQuery('.navbar-fixed-top').removeClass('menu-scroll');
	  }
	});	
	  
	  
	

//<!-- =============================================== -->
//<!-- ========== scrollTop.js ========== -->
//<!-- =============================================== -->
    
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 2000);
return false;
});




//<!-- =============================================== -->
//<!-- ========== scrollTop.js ========== -->
//<!-- =============================================== -->
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
			
//<!-- =============================================== -->
//<!-- ========== bootstrap scrollspy ========== -->
//<!-- =============================================== -->
    
    
    $('body').scrollspy({
    	target: '.navbar',
    	offset: 160
    });

//<!-- =============================================== -->
//<!-- ========== navbardown.js ========== -->
//<!-- =============================================== -->

$('.nav a').bind('click', function () {
    $('html , body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 80
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});			
			
			

 new WOW().init();


		
		
});






		
  
 


	