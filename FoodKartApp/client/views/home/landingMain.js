var $devicewidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var $deviceheight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
var $bodyel = jQuery("body");

var $lgWidth = 1199;
var $mdWidth = 991;
var $smWidth = 767;
var $xsWidth = 479;

function parseBoolean(str, $defaultValue) {
    "use strict";
    if (str == 'true') {
        return true;
    } else if (str == "false") {
        return false;
    }
    return $defaultValue;
}

Template.landingMain.rendered = function(){

	owlInit();

};



	function owlInit(){
		console.log('Owl Carousel Init ready function');
        if($().owlCarousel){
            console.log('The length of .ct-js-owl is: ', $('.ct-js-owl').length);
            if ($('.ct-js-owl').length > 0) {

                $(".ct-js-owl").each(function (){
                    console.log('Owl Carousel Init ready function if .ct-js-owl');
                    var $this = $(this);

                    var ctanimations = validatedata($this.attr("data-animations"), false);

                    if($devicewidth < 768 || device.mobile() || device.ipad() || device.androidTablet()){
                        ctanimations = false;
                    }

                    var ctitems = parseInt(validatedata($this.attr("data-items"), 5));
                    var $lgItems = parseInt(validatedata($this.attr("data-lgItems"), 4));
                    var $mdItems = parseInt(validatedata($this.attr("data-mdItems"), 3));
                    var $smItems = parseInt(validatedata($this.attr("data-smItems"), 2));
                    var $xsItems = parseInt(validatedata($this.attr("data-xsItems"), 1));
                    var ctsingleitem = parseBoolean($this.attr("data-single"), true);
                    var ctscaleitems = parseBoolean($this.attr("data-scaleUp"), false);

                    var ctslidespeed = parseInt(validatedata($this.attr("data-slideSpeed"), 200));
                    var ctpagspeed = parseInt(validatedata($this.attr("data-paginationSpeed"), 800));
                    var ctrewindspeed = parseInt(validatedata($this.attr("data-rewindSpeed"), 1000));

                    var ctautoplay = parseBoolean($this.attr("data-autoPlay"), false);
                    if($this.attr("data-autoPlaySpeed") != null){
                        ctautoplay = parseInt(validatedata($this.attr("data-autoPlaySpeed"), 5000));
                    }
                    var ctstophover = parseBoolean($this.attr("data-stopOnHover"), false);

                    var ctnavigation = parseBoolean($this.attr("data-navigation"), false);
                    var ctrewindnav = parseBoolean($this.attr("data-rewindNav"), true);
                    var ctscrollperpage = parseBoolean($this.attr("data-scrollPerPage"), false)

                    var ctpagination = parseBoolean($this.attr("data-pagination"), true);
                    var ctpaginationnumbers = parseBoolean($this.attr("data-paginationNumbers"), false);

                    var ctresponsive = parseBoolean($this.attr("data-responsive"), true);

                    var ctlazyload = parseBoolean($this.attr("data-lazyLoad"), false);

                    var ctautoheight = parseBoolean($this.attr("data-autoHeight"), false);

                    var ctmouse = parseBoolean($this.attr("data-mouse"), true);
                    var cttouch = parseBoolean($this.attr("data-touch"), true);

                    var cttransition = validatedata($this.attr("data-cttransition"), "fade");

                    $this.owlCarousel({
                        // Most important owl features
                        items : ctitems, //This variable allows you to set the maximum amount of items displayed at a time with the widest browser width
                        itemsDesktop : [$lgWidth,$lgItems], //This allows you to preset the number of slides visible with a particular browser width. The format is [x,y] whereby x=browser width and y=number of slides displayed. For example [1199,4] means that if(window<=1199){ show 4 slides per page} Alternatively use itemsDesktop: false to override these settings.
                        itemsDesktopSmall : [$mdWidth,$mdItems], //As above.
                        itemsTablet: [$smWidth,$smItems], // As above.
                        itemsMobile : [$xsWidth,$xsItems], // As above.
                        singleItem : ctsingleitem, // Display only one item.
                        itemsScaleUp : ctscaleitems, // Option to not stretch items when it is less than the supplied items.

                        //Basic Speeds
                        slideSpeed : ctslidespeed, // Slide speed in milliseconds
                        paginationSpeed : ctpagspeed, // Pagination speed in milliseconds
                        rewindSpeed : ctrewindspeed, // Rewind speed in milliseconds

                        //Autoplay
                        autoPlay : ctautoplay, // Change to any integrer for example autoPlay : 5000 to play every 5 seconds. If you set autoPlay: true default speed will be 5 seconds.
                        stopOnHover : ctstophover, // Stop autoplay on mouse hover

                        // Navigation
                        navigation : ctnavigation, // Display "next" and "prev" buttons.
                        navigationText : false, // You can customize your own text for navigation. To get empty buttons use navigationText : false. Also HTML can be used here
                        rewindNav : ctrewindnav, // Slide to first item. Use rewindSpeed to change animation speed.
                        scrollPerPage : ctscrollperpage, // Scroll per page not per item. This affect next/prev buttons and mouse/touch dragging.

                        //Pagination
                        pagination : ctpagination, // Show pagination.
                        paginationNumbers: ctpaginationnumbers, // Show numbers inside pagination buttons

                        // Responsive
                        responsive: ctresponsive, // You can use Owl Carousel on desktop-only websites too! Just change that to "false" to disable resposive capabilities
                        responsiveRefreshRate : 200, // Check window width changes every 200ms for responsive actions
                        responsiveBaseWidth: window, // Owl Carousel check window for browser width changes. You can use any other jQuery element to check width changes for example ".owl-demo". Owl will change only if ".owl-demo" get new width.

                        // CSS Styles
                        baseClass : "owl-carousel", // Automaticly added class for base CSS styles. Best not to change it if you don't need to.
                        theme : "owl-theme", // Default Owl CSS styles for navigation and buttons. Change it to match your own theme

                        //Lazy load
                        lazyLoad : ctlazyload, // Delays loading of images. Images outside of viewport won't be loaded before user scrolls to them. Great for mobile devices to speed up page loadings. IMG need special markup class="lazyOwl" and data-src="your img path". See example.
                        lazyFollow : true, // When pagination used, it skips loading the images from pages that got skipped. It only loads the images that get displayed in viewport. If set to false, all images get loaded when pagination used. It is a sub setting of the lazy load function.
                        lazyEffect : "fade", // Default is fadeIn on 400ms speed. Use false to remove that effect.

                        //Auto height
                        autoHeight : ctautoheight,

                        //JSON
                        jsonPath : false,
                        jsonSuccess : false,

                        //Mouse Events
                        dragBeforeAnimFinish : true,
                        mouseDrag : ctmouse,
                        touchDrag : cttouch,

                        //Transitions
                        transitionStyle : cttransition, // Add CSS3 transition style. Works only with one item on screen.

                        // Other
                        addClassActive : true, // Add "active" classes on visible items. Works with any numbers of items on screen.

                        //Callbacks
                        beforeUpdate : false,
                        afterUpdate : false,
                        beforeInit: function () {

                        },
                        afterInit: function(){

                            if(ctanimations) {
                                $this.css('min-height', $this.attr('data-height'));
                                $this.css('height', $this.attr('data-height'));
                                $this.find('.owl-wrapper-outer').css('min-height', $this.attr('data-height'));
                                $this.find('.owl-wrapper-outer').css('height', $this.attr('data-height'));
                                $this.find('.owl-wrapper').css('min-height', $this.attr('data-height'));
                                $this.find('.owl-wrapper').css('height', $this.attr('data-height'));
                                $this.find(".item").each(function () {
                                    var $slide_item = $(this);
                                    var bg = validatedata($slide_item.attr('data-bg'), false);
                                    if (bg) {
                                        $slide_item.css('background-image', 'url("' + bg + '")');
                                    }
                                })

                                setTimeout(function () {
                                    $this.find(".owl-item.active > .item [data-fx]").each(function () {
                                        var $content = $(this);
                                        if ($content.data('time') != undefined) {
                                            setTimeout(function () {
                                                $content.addClass($content.data('fx')).addClass("activate");
                                            }, $content.data('time'));
                                        } else{
                                            $content.addClass($content.data('fx')).addClass("activate");
                                        }
                                    })
                                }, 650);
                            }
                        },
                        beforeMove: false,
                        afterMove: false,
                        afterAction:  function(){
                            if(ctanimations){
                                $this.find(".owl-item > .item [data-fx]").each(function () {
                                    var $content = $(this);
                                    $content.removeClass($content.data('fx')).removeClass("activate");
                                })
                                setTimeout(function () {
                                    $this.find(".owl-item.active > .item [data-fx]").each(function () {
                                        var $content = $(this);
                                        if ($content.data('time') != undefined) {
                                            setTimeout(function () {
                                                $content.addClass($content.data('fx')).addClass("activate");
                                            }, $content.data('time'));
                                        } else{
                                            $content.addClass($content.data('fx')).addClass("activate");
                                        }
                                    })
                                }, 150);
                            }
                        },
                        startDragging : false,
                        afterLazyLoad : false
                    })
                })
            }
        }
    }

    function validatedata($attr, $defaultValue) {
    "use strict";
    if ($attr !== undefined) {
        return $attr;
    }
    return $defaultValue;
}

