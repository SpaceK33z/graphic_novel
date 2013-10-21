$(function () {

    // Check of de gebruikte browser wel alle functies ondersteund, anders laten we een lelijke waarschuwing zien
    var support_check = $('html').is('.cssanimations, .cssgradients, .csstransforms, .csstransforms3d, .csstransitions, .fontface');

    if (!support_check) {
        $('.slechte-browser').show();
    }

    // Lelijk, maar het werkt.
    function outroLaden() {
        $('#slide7').css('background-image', 'url(../img/eind_foto.jpg)');
    }

	// Docs: https://github.com/peachananr/onepage-scroll
	$(".main").onepage_scroll({
		sectionContainer: "section",
		easing: "ease",
		animationTime: 1000,
		updateURL: false,
        loop: true,
        keyboard: true,
        afterMove: function(index) {
            // Functie wordt aangeroepen zodra de hele 'move' transitie klaar is
            console.log('Verplaatsen klaar.');

            var actieve_slide = $('section.active').data('index');

            console.log('Actieve slide: ' + actieve_slide);

            // Activeer slide-specifieke functies als er wordt gewisseld van slide.
            // TODO: Dit kan beter
            switch (actieve_slide) {
                case 1:
                    acties_slide1();
                break;
                case 2:
                    acties_slide2();
                break;
                case 3:
                    acties_slide3();
                break;
                case 4:
                    acties_slide4();
                break;
                case 5:
                    acties_slide5();
                break;
                case 6:
                    acties_slide6();
                break;
                case 7:
                    acties_slide7();
                break;
            }
        }
	});

	$('.omlaag-hint').click(function () {
	   $('.main').moveDown();
	});

    // Met slide 1 beginnen
	acties_slide1();

    // TODO: Onderstaand kan beter

    // Intro
    function acties_slide1() {
    	console.log('Het begin.');
        $('#slide1-wrapper').addClass('a1');
    }

    // Palen neerzetten
    function acties_slide2() {
        console.log('Slide 2');
        $('#slide2-wrapper').addClass('a2');
    }

    // Hameren
    function acties_slide3() {
        console.log('Slide 3');
        $('#slide3-wrapper').addClass('a3');
    }

    // Zagen
    function acties_slide4() {
        console.log('Slide 4');
        $('#slide4-wrapper').addClass('a4');
        outroLaden();
    }

    // Boren
    function acties_slide5() {
        console.log('Slide 5');
        $('#slide5-wrapper').addClass('a5');
    }

    // Pannen leggen
    function acties_slide6() {
        console.log('Slide 6');
        $('#slide5-wrapper').addClass('a6');
    }

    // Einde
    function acties_slide7() {
        console.log('Laatste slide.');

		$('#slide7-wrapper').addClass('a7');
        outroLaden();
    }

});