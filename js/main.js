$(document).ready(function () {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    var stickyNav = $('.header');
    var introSectionHeight = $('.intro-section');

    var setOffset =  function(){ return  1;}

    stickyNav.affix({
        offset: {
            top: setOffset()
        }
    });
});