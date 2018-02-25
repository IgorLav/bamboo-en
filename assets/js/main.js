jQuery(document).ready(function () {
    var initialWidth = $(window).width();
    jQuery('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    function mobNavToggle() {
        var mobNav = jQuery('.header .nav-wrap'),
            burger = jQuery('.burger-btn'),
            body = jQuery('body');

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

    var stickyNav = jQuery('.header'),
        introSectionHeight = jQuery('.intro-section');

    stickyNav.affix({
        offset: {
            top: 10
        }
    });

    function replayVideo() {
        var a = document.getElementById('videoWindow');
        a.currentTime = 2.4;
        a.play();
        setTimeout(function () {
            replayVideo();
        }, 8000)
    }

    // animate effects
    var runWindowAnim = true;

    function windowAnim() {
        var el = $(".feature-section video");
        if (el.length) {
            jQuery(window).on('scroll ', function () {
                var top_of_element = el.offset().top,
                    bottom_of_element = el.offset().top + el.outerHeight(),
                    bottom_of_screen = $(window).scrollTop() + window.innerHeight,
                    videoDelay = 1700,
                    top_of_screen = $(window).scrollTop();

                if ($(window).width() <= 980) {
                    videoDelay = 100
                }

                if (runWindowAnim && (bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                    var video = document.getElementById('videoWindow');
                    setTimeout(function () {
                        video.play();
                        runWindowAnim = false;
                        setTimeout(function () {
                            replayVideo()
                        }, 8000)
                    }, videoDelay)
                }
            });
        }
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
                    offset: "70%"
                });
            };
        })(jQuery);

        windowAnim();

        jQuery(".fromLeft").animated("fadeInLeft");
        jQuery(".fromRight").animated("fadeInRight");
        jQuery(".fromDown").animated("fadeInUp");
        jQuery(".fade").animated("fadeIn");
    }

    //mobHousesSlider
    function houseSlider(resize) {
        var windowW = jQuery(window).width();

        if (resize && (windowW === initialWidth)) return false;

        var sliderTrack = jQuery('.offer-boxes .inner-container'),
            mobView = windowW <= 980,
            card = jQuery('.offer-boxes .card-box'),
            cardWidth = '',
            currentIndex = 0,
            next = jQuery('.next-btn'),
            prev = jQuery('.prev-btn');


        function resetDimensions() {
            sliderTrack.css('width', '');
            card.css('width', '');
            sliderTrack.css({
                transform: "none"
            });
            card.removeClass('active');
        }

        function setDimensions() {
            card.css({width: ''});
            sliderTrack.css({width: ''});

            cardWidth = card.outerWidth();
            sliderTrack.css({
                width: cardWidth * card.length,
                transform: "translateX(-" + currentIndex * cardWidth + "px)"
            });
            card.css({width: cardWidth});
        }

        function setActiveClass() {
            card.removeClass('active');
            card.eq(currentIndex).addClass('active');
        }

        function hideBtn() {
            $('.offer-slider-btn').removeClass('hidden');
            if (currentIndex <= 0) {
                $('.prev-btn').addClass('hidden')
            }
            if (currentIndex >= card.length - 1) {
                $('.next-btn').addClass('hidden')
            }
        }

        function nextSlide(e) {
            e.preventDefault();
            if (currentIndex >= card.length - 1) {
                currentIndex = card.length - 1;
                return false;
            }
            currentIndex++;

            sliderTrack.css({
                transform: "translateX(-" + currentIndex * cardWidth + "px)"
            });
            setActiveClass();
            hideBtn();
        }

        function prevSlide(e) {
            e.preventDefault();
            if (currentIndex <= 0) {
                currentIndex = 0;
                return false;
            }
            currentIndex--;
            sliderTrack.css({
                transform: "translateX(-" + currentIndex * cardWidth + "px)"
            });
            setActiveClass();
            hideBtn();
        }

        hideBtn();

        if (mobView) {
            resetDimensions();
            setDimensions();
            setActiveClass();

            next.click(function (e) {
                nextSlide(e);
            });
            prev.click(function (e) {
                prevSlide(e);
            });
            sliderTrack.on('swipeleft', function (e) {
                nextSlide(e);
            });
            sliderTrack.on('swiperight', function (e) {
                prevSlide(e);
            });
            return false;
        }
        resetDimensions();
        sliderTrack.on('swipeleft, swiperight', function (e) {
            return false;
        });
    }

    if (jQuery.waypoints) {
        sectionAnim();
    }

    //tabs
    var pageHash = window.location.hash,
        tabNavLinks = jQuery('.tabs-nav-link');

    function scrollToAnchor() {
        if (pageHash) {
            jQuery('html,body').animate({
                scrollTop: 0
            }, 10);
        }
    }

    function hashTabsHandler() {
        jQuery('.page-tabs-nav a[href="' + pageHash + '"]').addClass('active');
        jQuery(pageHash).fadeIn(600).addClass('active');
    }

    function resetTabs() {
        tabNavLinks.removeClass('active');
        jQuery('.tab-content').removeClass('active').hide();
    }

    if (pageHash) {
        resetTabs();
        hashTabsHandler();
    }

    scrollToAnchor();

    jQuery('.main-nav .dropdown-menu a').click(function (e) {
        var url = $(this).attr('href'),
            tabHash = url.slice(url.indexOf('#') + 1);
        var tab = jQuery('#' + tabHash);

        if (tab.length) {
            jQuery('html, body').animate({
                scrollTop: 0
            }, 1000);

            resetTabs();
            tab.fadeIn(600).addClass('active');
            jQuery("[href=\"#" + tabHash + "\"]").addClass('active');
        }
    });

    jQuery('.page-tabs-nav a').click(function (e) {
        e.preventDefault();
        var tabId = jQuery(this).attr('href');
        window.location.hash = tabId;

        resetTabs();
        jQuery(this).addClass('active');
        jQuery(tabId).fadeIn(600).addClass('active');
    });

    var resizeTimer;

    $(window).on('resize', function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            windowAnim();
            houseSlider('resize');
        }, 200);
    });

    houseSlider();
});
