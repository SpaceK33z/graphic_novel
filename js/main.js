$(function () {
	// Docs: https://github.com/peachananr/onepage-scroll
	$(".main").onepage_scroll({
		sectionContainer: "section",
		easing: "ease",
		animationTime: 1000,
		updateURL: true
	});

	$('.omlaag-hint').click(function () {

		  $('.main').moveDown();
	});

	if (window.location.hash == '')
		acties_slide1();

	$(window).on('hashchange', function() {
		var hash = window.location.hash;

    	switch (hash) {
    		case '#1':
    			acties_slide1();
    		break;
    		case '#2':
    			acties_slide2();
    		break;
    		case '#4':
    			acties_slide4();
    		break;
    	}
    });
    $(window).hashchange();


    function acties_slide1() {
    	$('#slide1 .titel').animo( { animation: 'fadeIn', keep: true }, function() {
			$('#slide1 .omlaag-hint').animo( { animation: 'fadeInDown', keep: true } );
    	} );
    }

    function acties_slide2() {

    }

    function acties_slide4() {
		$('#slide4 .titel').animo( { animation: 'fadeInUp', keep: true, duration: 2 }, function () {
			console.log('Het einde is benaderend.');
		} );
    }

});