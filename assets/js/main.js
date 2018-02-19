jQuery(document).ready(function () {
    jQuery('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    function mobNavToggle() {
        var mobNav = jQuery('.header .nav-wrap');
        var burger = jQuery('.burger-btn');
        var body = jQuery('body');

        burger.click(function (e) {
            jQuery(this).addClass('active');
            mobNav.addClass('active');
            body.addClass('hidden');
        });

        jQuery('.mob-nav-close').click(function (e) {
            burger.removeClass('active');
            mobNav.removeClass('active');
            body.removeClass('hidden');
        });
    }

    mobNavToggle();

    var stickyNav = jQuery('.header');
    var introSectionHeight = jQuery('.intro-section');

    stickyNav.affix({
        offset: {
            top: 10
        }
    });

    function replayVideo() {
        var a = document.getElementById('videoWindow');
        a.currentTime = 2;
        a.play();
        setTimeout(function () {
            replayVideo();
        }, 4000)
    }

    // animate effects
    function windowAnim () {
        $(window).on('scroll load', function() {
            var el = $(".feature-section");
            var top_of_element = el.offset().top * 1.3;
            var bottom_of_element = el.offset().top + el.outerHeight();
            var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
            var top_of_screen = $(window).scrollTop();
            var run = true;
            if(run && (bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                var video = document.getElementById('videoWindow');
                video.play();
                run = false;
                setTimeout(function () {
                    replayVideo()
                }, 8000)
            }
        });
    }

    function sectionAnim() {
        (function (jQuery) {
            jQuery.fn.animated = function (inEffect, outEffect) {
                jQuery(this).css("opacity", "0").addClass("animated").waypoint(function (dir) {
                    if (dir === "down") {
                        jQuery(this).addClass(inEffect).css("opacity", "1");
                    } else {
                        jQuery(this).addClass(outEffect).css("opacity", "1");
                    }
                }, {
                    offset: "80%"
                });
            };
        })(jQuery);

        windowAnim();

        jQuery(".fromLeft").animated("fadeInLeft");
        jQuery(".fromRight").animated("fadeInRight");
        jQuery(".fromDown").animated("fadeInUp");
    }

     var resizeTimer;

    $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            windowAnim();
        }, 200);
    });

    if (jQuery.waypoints) {
        sectionAnim();
    }

    //tabs
    jQuery('.page-tabs-nav a').click(function (e) {
        e.preventDefault();
        var tabId = jQuery(this).attr('href');

        jQuery('.page-tabs-nav a').removeClass('active');
        jQuery('.tab-content').removeClass('active').hide();
        jQuery(this).addClass('active');
        jQuery(tabId).fadeIn(600).addClass('active');
    });
});