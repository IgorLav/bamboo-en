$(document).ready(function () {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    function mobNavToggle () {
        var mobNav = $('.header .nav-wrap');
        var burger = $('.burger-btn');
        var body = $('.body');

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
});