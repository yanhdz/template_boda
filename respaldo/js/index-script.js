$(function() {

/*--------------------------------------------------------------
  PopUp pages
--------------------------------------------------------------*/
    (function() {
        var popupWeddingCeremony = $('#popup-wedding-ceremony'),
            popupReciptionCeremony = $('#popup-reciption-ceremony'),
            showWeddingCeremony = $('#show-wedding-ceremony'),
            showReciptionCeremony = $('#show-reciption-ceremony'),
            colseBtn = $('.ceremony .close');

            showWeddingCeremony.click(function(e) {
                e.preventDefault();
                popupWeddingCeremony.fadeIn(500);


                colseBtn.click(function() {
                    popupWeddingCeremony.fadeOut(500);
                })
            })

            showReciptionCeremony.click(function(e) {
                e.preventDefault();
                popupReciptionCeremony.fadeIn(500);


                colseBtn.click(function() {
                    popupReciptionCeremony.fadeOut(500);
                })
            })

    }());



/*--------------------------------------------------------------
    show hide menu on mobile
--------------------------------------------------------------*/
var link = $('header .nav li > a:not(".dropdown > a")');

link.click(function() {
     $('header .navbar-collapse').removeClass('in');
});



/*--------------------------------------------------------------
    Smooth-scrolling click menu item
--------------------------------------------------------------*/
    $(function() {
        $('#navbar > ul > li > a:not(".dropdown-toggle")').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700);
                    return false;
                }
            }
        });
    });



/*--------------------------------------------------------------
    Nice scroll
--------------------------------------------------------------*/
    $('.ceremony').niceScroll({
        autohidemode: 'false',     
        cursorborderradius: '0px', 
        background: 'transparent',     
        cursorwidth: '0px',       
        background: 'transparent',
        cursorcolor: 'transparent'    
    });




/*--------------------------------------------------------------
    Hero slider
--------------------------------------------------------------*/

	$(".hero-slider").owlCarousel({
		'singleItem': true,
    'autoPlay': true,
		'pagination': false,
		'mouseDrag': false
	});



/*--------------------------------------------------------------
    Couple
--------------------------------------------------------------*/
    $('.couple .frame-wrapper a').nivoLightbox({
         effect: 'fall'
    });



/*--------------------------------------------------------------
    Gallery
--------------------------------------------------------------*/
    $('.gallery .hover-content a').nivoLightbox({
         effect: 'fall'
    });




/*--------------------------------------------------------------
    Meet slider
--------------------------------------------------------------*/
	$(".meet-slider").owlCarousel({
		'singleItem': true,
		'navigation': true,
		'navigationText': ["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"],
		'mouseDrag': false	
	});



/*--------------------------------------------------------------
    Conversation slider
--------------------------------------------------------------*/
	$(".left-conversation-slider").owlCarousel({
		'singleItem': true,
		'autoPlay': 2500,
        'mouseDrag': false  
	});

	$(".right-conversation-slider").owlCarousel({
        'singleItem': true,
        'autoPlay': 2500,
        'mouseDrag': false  
	});



/*--------------------------------------------------------------
    Coming soon clock
--------------------------------------------------------------*/
	$('#clock').countDown({  
        targetDate: {
            'day'   : 14,
            'month' : 10,
            'year'  : 2023,
            'hour'  : 6,
            'min'   : 0,
            'sec'   : 0
        },
        omitWeeks: true
    });



/*--------------------------------------------------------------
    RSVP
--------------------------------------------------------------*/
 $('.rsvp .bird').css({
    'opacity': 0
 });

$('.rsvp .bird').each(function () {
    var $this = $(this);

    $this.appear(function() {
        $('.rsvp .bird').addClass('birdFadeInRight');
    });
});
    





}); // end of document.ready