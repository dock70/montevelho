
$(document).ready(function(){

	//GATEDOOR//
	$("#gateDoor ul li:first-child").click(function(e){
		e.preventDefault();
		$("#gateDoor").hide();
	});
	//END GATEDOOR

	//ISOTOPE
	var $container = $('.isotope');
	$container.isotope({
	  itemSelector: '.item',
	  masonry: {
	  	columnWidth: 100,
	  	gutterWidth: 30,
	  	isFitWidth: true,
	  },
  	});
		// sort items on button click
	$('#filters a').click(function() {
    	var filterValue = $(this).attr('data-filter');
    	if (filterValue == '*') {
    		$container.isotope({ filter: filterValue });
    	}else{
    		$container.isotope({ filter: '.'+filterValue });
    	}
    	$('#filters a').removeClass('active');
    	$(this).addClass('active');
	});

	//END ISOTOPE
	$(window).resize(function(){

        if ($(window).width() <= 767) {  
       		var $container = $('.isotope');
			$container.isotope({
			  masonry: {
			  	isFitWidth: true,
			  },
			});

       }     

	});
});



