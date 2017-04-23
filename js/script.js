$(document).ready(function(){

  $("#slider_conteiner").owlCarousel({
  			// Most important owl features
		items : 2,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		
		singleItem : true,

		itemsScaleUp : false,
		
		
		//Autoplay
		autoPlay : false,
		stopOnHover : false,
		
		// Navigation
		navigation : true,
		navigationText : ["<img src=\"img/iconleft.png\">","<img src=\"img/iconright.png\">"],
		rewindNav : true,
		scrollPerPage : false,
		
		//Pagination
		Pagination : true,
		PaginationNumber:false,

		//Responsive
		Responsive:false,
		ResponsiverefreshRare:200,
		ResponsiveBaseWidth:window,
		
		// CSS Styles
		baseClass : "owl-carousel",
		theme : "owl-theme",
		
		
		//Transitions
		transitionStyle : "backSlide"

  });

});