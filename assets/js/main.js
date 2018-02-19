jQuery(document).ready(function () {
    jQuery('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    function mobNavToggle () {
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

    // animate effects
    function sectionAnim () {
        (function(jQuery) {
            jQuery.fn.animated = function(inEffect, outEffect) {
                jQuery(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
                    if (dir === "down") {
                        jQuery(this).addClass(inEffect).css("opacity", "1");
                    } else {
                        jQuery(this).addClass(outEffect).css("opacity", "1");
                    }
                }, {
                    offset: "80%"
                });

                if(inEffect === 'play') {
                    $('.video-anim video').get(0).play();
                }
            };
        })(jQuery);

        jQuery(".fromLeft").animated("fadeInLeft");
        jQuery(".fromRight").animated("fadeInRight");
        jQuery(".fromDown").animated("fadeInUp");
        jQuery(".video-anim").animated("play");
    }

    if(jQuery.waypoints) {
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