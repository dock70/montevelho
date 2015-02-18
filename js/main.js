
$(document).ready(function(){
	$("#gateDoor ul li:first-child").click(function(e){
		e.preventDefault();
		$("#gateDoor").hide();
	});

	var $container = $('#container');
	// init
	$container.isotope({
	  // options
	  itemSelector: '.item',
	  layoutMode: 'masonry'
	});

});



