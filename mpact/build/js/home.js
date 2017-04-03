(function($){

    $(function () {

        var mpactHome = {

            settings: {
                homeScreen: $('.screen--home'),
                homeContent: $('.home-content'),
                homeDots: $('.dots-block')
            }
        }

    });

    $(function () {

        var isHome = true,
            isHomeRight = false,
            isScrolling = false,
            screens = ['home', 'about', 'host_advertiser'],
            currentScreen = 0;

        // get screen on document load and adjust menu class
        $('[data-screen]').each(function () {
            if ($(this).offset().top === $(document).scrollTop()) {
                currentScreen = screens.indexOf($(this).data('screen'));
                if (currentScreen !== 0) {
                    isHome = false;
                }
                adjustMenuClass();
                console.log(currentScreen);
            }
        });

        // chech isHome
        function checkHome() {
            return currentScreen === 0;
        }

        // change menu class depending on screen number
        function adjustMenuClass() {
            if (currentScreen === 0) {
                $('.menu-btn').removeClass('menu-btn--white');
            } else {
                $('.menu-btn').addClass('menu-btn--white');
            }
        }

        // home slide right function
        function homeMoveRight() {
            $('.screen--home').addClass('screen--home-shifting');
            $('.btn-find-out').css('display', 'inline-block');
            setTimeout(function () {
                $('.screen--home').removeClass('screen--home-shifting').addClass('screen--home-shifted');
            }, 300);
            setTimeout(function () {
                $('.dots-block__arrows').addClass('dots-block__arrows--extending');
            }, 600);
            setTimeout(function () {
                $('.arrow-circle--outer').addClass('arrow-circle--outer-visible');
            }, 1400);

            isHomeRight = true;
        }

        // home slide left function
        function homeMoveLeft() {
            $('.screen--home').removeClass('screen--home-shifted');
            $('.btn-find-out').css('display', 'none');
            $('.dots-block__arrows').removeClass('dots-block__arrows--extending');
            $('.arrow-circle--outer').removeClass('arrow-circle--outer-visible');

            isHomeRight = false;
        }

        // home btn firing sliding to the right function
        $('.btn-features').on('click', function (e) {
            e.preventDefault();
            homeMoveRight();
        });

        // home btn sliding to next screen
        $('.btn-find-out').on('click', function (e) {
            e.preventDefault();
            slideDown();
        });

        // sliding to the next screen
        function slideDown() {
            $('html, body').animate({
                scrollTop: $(window).height()
            }, '500', 'swing', function () {
                console.log('sliding down');
            }).promise().then(function () {
                if (currentScreen !== (screens.length - 1))
                currentScreen += 1;
                isHome = checkHome();
                adjustMenuClass();
            });
        }

        // sliding to previous screen
        function slideUp() {
            $('html, body').animate({
                scrollTop: -($(window).height())
            }, '500', 'swing', function () {
                console.log('sliding up');
            }).promise().then(function () {
                if (currentScreen !== 0) {
                    currentScreen -= 1;
                    isHome = checkHome();
                    adjustMenuClass();
                }
            });
        }

        // scrolling up and down
        $(window).bind('mousewheel', function (e) {
            e.preventDefault();
            if (!isScrolling) {
                isScrolling = true;
                if (e.originalEvent.wheelDelta >= 0) {
                    if (isHome && isHomeRight) {
                        homeMoveLeft();
                    } else {
                        slideUp();
                    }
                } else {
                    if (isHome && !isHomeRight) {
                        homeMoveRight();
                    } else {
                        slideDown();
                    }
                }
                setTimeout(function () {
                    isScrolling = false;
                }, 1000);
            }

            console.log(isHome);
            console.log(currentScreen);
        });
    });

}(jQuery));