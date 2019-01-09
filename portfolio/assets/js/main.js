$("a[href^='#']").on('click', function (e) {

    e.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 250, function () {
        window.location.hash = hash;
    });

});


var offset = 300,
    offset2 = window.innerHeight,
    offset_opacity = 1200,
    scroll_top_duration = 700,
    $large_navbar = $('.navbar'),
    $move1 = $('.icons'),
    $move2 = $('.nameimg'),
    $back_to_top = $('.cd-top');


//hide or show the "back to top" link
$(window).scroll(function () {
    console.log(offset2);
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
    ($(this).scrollTop() > offset2) ? $large_navbar.addClass('small-navbar'): $large_navbar.removeClass('small-navbar');
    ($(this).scrollTop() > offset2) ? $move1.addClass('move-icon'): $move1.removeClass('move-icon');
    ($(this).scrollTop() > offset2) ? $move2.addClass('move-name'): $move2.removeClass('move-name');
});

(function ($) {

    var settings = {

        // Parallax background effect?
        parallax: true,

        // Parallax factor (lower = more intense, higher = less intense).
        parallaxFactor: 20

    };

    skel.breakpoints({
        xlarge: '(max-width: 1800px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $header = $('#header');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            $body.removeClass('is-loading');
        });

        // Touch?
        if (skel.vars.mobile) {

            // Turn on touch mode.
            $body.addClass('is-touch');

            // Height fix (mostly for iOS).
            window.setTimeout(function () {
                $window.scrollTop($window.scrollTop() + 1);
            }, 0);

        }

        $('form').placeholder();

        skel.on('+medium -medium', function () {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        if (skel.vars.browser == 'ie' || skel.vars.mobile)
            settings.parallax = false;

        if (settings.parallax) {

            skel.on('change', function () {

                if (skel.breakpoint('medium').active) {

                    $window.off('scroll.strata_parallax');
                    $header.css('background-position', 'top left, center center');

                } else {

                    $header.css('background-position', 'left 0px');

                    $window.on('scroll.strata_parallax', function () {
                        $header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
                    });

                }

            });

        }
        $window.on('load', function () {
            $('#two').poptrox({
                fadeSpeed: 250,
                popupSpeed: 250, 
                overlayColor: '#2c2c2c',
                overlayOpacity: 0.85,
                popupCloserText: '',
                popupLoaderText: '',
                selector:'.work-item a.image',
                usePopupCaption: false,
                usePopupEasyClose: false,
                usePopupNav: true,
                usePopupLoader: true,
                popupIsFixed: false,
                windowMargin: 100
            });
            $('#one').poptrox({
                fadeSpeed: 250,
                popupSpeed: 250, 
                overlayColor: '#2c2c2c',
                overlayOpacity: 0.85,
                popupCloserText: '',
                popupLoaderText: '',
                selector:'.work-item a.image',
                usePopupCaption: false,
                usePopupEasyClose: false,
                usePopupNav: true,
                usePopupLoader: true,
                popupIsFixed: false,
                windowMargin: 100
            });
            $('#three').poptrox({
                fadeSpeed: 250,
                popupSpeed: 250, 
                overlayColor: '#2c2c2c',
                overlayOpacity: 0.85,
                popupCloserText: '',
                popupLoaderText: '',
                selector:'.work-item a.image',
                usePopupCaption: false,
                usePopupEasyClose: false,
                usePopupNav: true,
                usePopupLoader: true,
                popupIsFixed: false,
                windowMargin: 100
            });
            $('#four').poptrox({
                fadeSpeed: 250,
                popupSpeed: 250, 
                overlayColor: '#2c2c2c',
                overlayOpacity: 0.85,
                popupCloserText: '',
                popupLoaderText: '',
                selector:'.work-item a.image',
                usePopupCaption: false,
                usePopupEasyClose: false,
                usePopupNav: true,
                usePopupLoader: true,
                popupIsFixed: false,
                windowMargin: 100
            });
            $('#five').poptrox({
                fadeSpeed: 250,
                popupSpeed: 250, 
                overlayColor: '#2c2c2c',
                overlayOpacity: 0.85,
                popupCloserText: '',
                popupLoaderText: '',
                selector:'.work-item a.image',
                usePopupCaption: false,
                usePopupEasyClose: false,
                usePopupNav: true,
                usePopupLoader: true,
                popupIsFixed: false,
                windowMargin: 100
            });
            $('#six').poptrox({
                fadeSpeed: 250,
                popupSpeed: 250, 
                overlayColor: '#2c2c2c',
                overlayOpacity: 0.85,
                popupCloserText: '',
                popupLoaderText: '',
                selector:'.work-item a.image',
                usePopupCaption: false,
                usePopupEasyClose: false,
                usePopupNav: true,
                usePopupLoader: true,
                popupIsFixed: false,
                windowMargin: 100
            });
        });

    });

})(jQuery);

jQuery(document).ready(function ($) {

    var jssor_1_SlideshowTransitions = [
        {
            $Duration: 1200,
            $Opacity: 2
        }
            ];

    var jssor_1_options = {
        $AutoPlay: false,
        $SlideshowOptions: {
            $Class: $JssorSlideshowRunner$,
            $Transitions: jssor_1_SlideshowTransitions,
            $TransitionsOrder: 1
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_1_options);
    var jssor_3_slider = new $JssorSlider$("jssor_3", jssor_1_options);
    var jssor_4_slider = new $JssorSlider$("jssor_4", jssor_1_options);
    var jssor_5_slider = new $JssorSlider$("jssor_5", jssor_1_options);

    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 600);
            jssor_1_slider.$ScaleWidth(refSize);
            jssor_2_slider.$ScaleWidth(refSize);
            jssor_3_slider.$ScaleWidth(refSize);
            jssor_4_slider.$ScaleWidth(refSize);
            jssor_5_slider.$ScaleWidth(refSize);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
});
