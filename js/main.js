$(document).ready(function () {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    function mobNavToggle () {
        var mobNav = $('.header .nav-wrap');
        var burger = $('.burger-btn');
        var body = $('body');

        burger.click(function (e) {
            $(this).addClass('active');
            mobNav.addClass('active');
            body.addClass('hidden');
        });

        $('.mob-nav-close').click(function (e) {
            burger.removeClass('active');
            mobNav.removeClass('active');
            body.removeClass('hidden');
        });
    }

    mobNavToggle();

    var stickyNav = $('.header');
    var introSectionHeight = $('.intro-section');

    stickyNav.affix({
        offset: {
            top: 10
        }
    });

    // animate effects
    function sectionAnim () {
        (function($) {
            $.fn.animated = function(inEffect, outEffect) {
                $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
                    if (dir === "down") {
                        $(this).addClass(inEffect).css("opacity", "1");
                    } else {
                        $(this).addClass(outEffect).css("opacity", "1");
                    }
                }, {
                    offset: "80%"
                });

                if(inEffect === 'play') {
                    $('.video-anim video').get(0).play();
                }
            };
        })($);

        $(".fromLeft").animated("fadeInLeft");
        $(".fromRight").animated("fadeInRight");
        $(".fromDown").animated("fadeInUp");
        $(".video-anim").animated("play");
    }

    if($.waypoints) {
        sectionAnim();
    }

    //tabs
    $('.page-tabs-nav a').click(function (e) {
        e.preventDefault();
        var tabId = $(this).attr('href');

        $('.page-tabs-nav a').removeClass('active');
        $('.tab-content').removeClass('active').hide();
        $(this).addClass('active');
            $(tabId).fadeIn(600).addClass('active');
    });
});