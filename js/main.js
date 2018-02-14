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

    var setOffset =  function(){ return  1;}

    stickyNav.affix({
        offset: {
            top: setOffset()
        }
    });

    // anime effects
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
        };
    })($);



    $(".feature-section .description-wrap, .partnership-section .img-wrap img").animated("fadeInLeft");
    $(".hero .text-box, .partnership-section .description-wrap").animated("fadeInRight");
});