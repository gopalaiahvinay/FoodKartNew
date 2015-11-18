var $devicewidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var $deviceheight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
var $bodyel = jQuery("body");

var $lgWidth = 1199;
var $mdWidth = 991;
var $smWidth = 767;
var $xsWidth = 479;

Template.home.rendered = function(){

	/*console.log('Template Rendered');
	var scriptsArray = ['<script src="assets/js/jquery.min.js" type="text/javascript"></script>','<script src="assets/bootstrap/js/bootstrap.min.js"></script>','<script src="assets/js/jquery.placeholder.min.js"></script>','<script src="assets/js/jquery.easing.1.3.js"></script>','<script src="assets/js/device.min.js"></script>','<script src="assets/js/jquery.browser.min.js"></script>','<script src="assets/js/snap.min.js"></script>','<script src="assets/js/jquery.appear.js"></script>','<script src="assets/js/masonry.min.js"></script>','<script src="assets/plugins/owl/owl.carousel.min.js"></script>','<script src="assets/plugins/owl/init.js"></script>',
'<script src="assets/js/portfolio/imagesloaded.js"></script>','<script src="assets/js/image-box/init.js"></script>','<script src="assets/js/retina.js"></script>','<script src="assets/plugins/magnific-popup/jquery.magnific-popup.min.js"></script>','<script src="assets/js/select2/select2.js"></script>','<script src="assets/js/main.js"></script>'];

	var bodyE = document.getElementsByTagName('body');
	console.log('bodyE is:', bodyE);
	_.each(scriptsArray, function(script){
		console.log('Appending:',script);
		$('body').append(script);
		console.log('Body after appending:',bodyE);
	});*/

if(document.getElementById('ct-js-wrapper')){
	var snapper = new Snap({
		element: document.getElementById('ct-js-wrapper')
	});

	snapper.settings({
		disable: "right",
		easing: 'linear',
		addBodyClasses: true
	});
}
if ($().pageScroller) {

	if($devicewidth < 1200){
		$('body').pageScroller({
			navigation: '.ct-restaurantMenu .onepage', sectionClass: 'section', scrollOffset: -70
		});
	} else{
		$('.ct-content').pageScroller({
			navigation: '.ct-restaurantMenu .onepage', sectionClass: 'section', scrollOffset: -70
		});
	}
}
	//Magnific Popup///////////////////////////////////////////////////////////////////////////////////////////
	if(jQuery().magnificPopup){
	            jQuery('.ct-js-popupGallery').each(function() { // the containers for all your galleries
	            	jQuery(this).magnificPopup({
	            		disableOn: 700,
	            		type: 'image',
	            		mainClass: 'ct-magnificPopup--image',
	            		removalDelay: 160,
	            		preloader: true,
	            		delegate: '.ct-js-popup',
	            		closeBtnInside: true,
	            		closeOnContentClick: false,
	            		closeOnBgClick: true,
	            		gallery: {
	            			enabled: true
	            		}
	            	});
	            });
	        }
	//Magnific Popup///////////////////////////////////////////////////////////////////////////////////////////
	if(jQuery().magnificPopup){
	            jQuery('.ct-js-popupGallery').each(function() { // the containers for all your galleries
	            	jQuery(this).magnificPopup({
	            		disableOn: 700,
	            		type: 'image',
	            		mainClass: 'ct-magnificPopup--image',
	            		removalDelay: 160,
	            		preloader: true,
	            		delegate: '.ct-js-popup',
	            		closeBtnInside: true,
	            		closeOnContentClick: false,
	            		closeOnBgClick: true,
	            		gallery: {
	            			enabled: true
	            		}
	            	});
	            });
	        }
	// Snap Navigation in Mobile // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	if ($devicewidth > 767 && document.getElementById('ct-js-wrapper')) {
	    snapper.disable();
	}

	$(".navbar-toggle").on("click",function () {
	    if($bodyel.hasClass('snapjs-left')){
	        snapper.close();

	    } else{
	        snapper.open('left');

	    }
	});

	$('.ct-menuMobile .ct-menuMobile-navbar .dropdown > a').on("click",function(e) {
	    return false; // iOS SUCKS
	})
	$('.ct-menuMobile .ct-menuMobile-navbar .dropdown > a').on("click",function(e){
	    var $this = $(this);
	    if($this.parent().hasClass('open')){
	        $(this).parent().removeClass('open');
	    } else{
	        $('.ct-menuMobile .ct-menuMobile-navbar .dropdown.open').toggleClass('open');
	        $(this).parent().addClass('open');
	    }
	})

	$('.ct-menuMobile .ct-menuMobile-navbar .onepage > a').on("click",function(e) {
	    snapper.close();
	})



	    };