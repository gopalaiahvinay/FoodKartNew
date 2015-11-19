var $devicewidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var $deviceheight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
var $bodyel = jQuery("body");

var $lgWidth = 1199;
var $mdWidth = 991;
var $smWidth = 767;
var $xsWidth = 479;

function validatedata($attr, $defaultValue) {
    "use strict";
    if ($attr !== undefined) {
        return $attr;
    }
    return $defaultValue;
}

function parseBoolean(str, $defaultValue) {
    "use strict";
    if (str == 'true') {
        return true;
    } else if (str == "false") {
        return false;
    }
    return $defaultValue;
}



Template.navbar.rendered = function(){

	menuSnap();

};

function menuSnap(){
    var state = false;

	   if($('#ct-js-wrapper').length > 0){
	   	console.log('The document contains a ct-js-wrapper');
	    var snapper = new Snap({
	        element: $('ct-js-wrapper')
	    });

	    snapper.settings({
	        disable: "right",
	        easing: 'linear',
            tapToClose: true,
	        addBodyClasses: true
	    });
	}

	 if ($devicewidth > 767 && document.getElementById('ct-js-wrapper')) {
            snapper.disable();
        }

        $(".navbar-toggle").on("click",function () {
            if(!state){
                snapper.open('left');
                state = true;

            } else{
                
                snapper.close();
            }
        });

       /* $('.ct-menuMobile .ct-menuMobile-navbar .dropdown > a').on("click",function(e) {
            return false; // iOS SUCKS
        });
        $('.ct-menuMobile .ct-menuMobile-navbar .dropdown > a').on("click",function(e){
            var $this = $(this);
            if($this.parent().hasClass('open')){
                $(this).parent().removeClass('open');
            } else{
                $('.ct-menuMobile .ct-menuMobile-navbar .dropdown.open').toggleClass('open');
                $(this).parent().addClass('open');
            }
        });

        $('.ct-menuMobile .ct-menuMobile-navbar .onepage > a').on("click",function(e) {
            snapper.close();
        });*/
};