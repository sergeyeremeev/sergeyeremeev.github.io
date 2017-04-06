(function($){

    $(function () {

        var mpact = {

            settings: {
                // screen elements and current screen
                screens: $('.screen'),
                currentScreen: null,
                menuBlock: $('.menu-block'),

                // home screen, home state, buttons
                homeScreen: $('.screen--home'),
                homeScreenFull: false,


                // home screen animating elements
                btnFeatures: $('.btn-features'),
                btnFindOut: $('.btn-find-out'),
                dotsArrows: $('.dots-block__arrows'),
                arrowsCircles: $('.arrow-circle--outer'),

                // other buttons
                menuBtn: $('.menu-btn'),
                arrowsBtn: $('.slide-arrows-link'),

                // scrolling state
                isScrolling: false,
                startY: 0,

                // host and advertiser
                selectionScreen: $('.screen--host_advertiser'),
                selectSection: $('.select-section'),
                locationLinks: $('.variations-link-btn'),
                screenVariation: $('.screen-variation'),
                screenVariationMain: $('.screen-variation__main'),
                variationLinks: $('[data-variation-select]'),
                selectedVariation: null,

                // faq
                faqMenuItems: $('.faq-menu-item'),
                faqMenuArrows: $('.slide-arrows--faq'),
                selectedFaq: null
            },

            init: function () {
                // set each screen height to window height
                mpact.setScreenSizes();

                // scrolling buttons
                mpact.settings.btnFeatures.on('click', mpact.homeSlideRight);
                mpact.settings.btnFindOut.add(mpact.settings.arrowsBtn).on('click', mpact.slideDown);

                // check current step and set menu class
                mpact.detectStep();
                mpact.setMenuClass();

                // menu button click
                mpact.settings.menuBtn.on('click', mpact.onMenuClick);

                // mousewheel/touchmove events
                $(document).on('touchstart', mpact.getTouchPosition);
                $(document).on('mousewheel touchmove', mpact.windowScrolling);

                // hovering/clicking select sections
                mpact.settings.selectSection.hover(mpact.sectionHover, mpact.sectionUnHover);
                mpact.settings.selectSection.on('click', mpact.sectionClick);

                // hovering/clicking faq sections
                mpact.settings.faqMenuItems.hover(mpact.faqHover, mpact.faqUnHover);
                mpact.settings.faqMenuItems.on('click', mpact.faqClick);

                // selecting host vs advertiser
                mpact.settings.variationLinks.on('click', mpact.variationSelect);

                // location links click
                mpact.settings.locationLinks.on('click', mpact.locationLinkClick);
                mpact.settings.screenVariationMain.on('click', mpact.screenVariationMainClick);
            },

            setScreenSizes: function () {
                mpact.settings.screens.height($(window).height());
            },

            // steps functions
            detectStep: function () {
                mpact.settings.screens.each(function () {
                    if ($(this).offset().top === $(document).scrollTop()) {
                        mpact.settings.currentScreen = mpact.settings.screens.index(this);
                        return {
                            screen: $(this).data('screen'),
                            variation: mpact.selectedVariation
                        };
                    }
                });

                console.log($(this));
            },

            updateMenu: function () {

            },

            checkHome: function () {
                return mpact.settings.currentScreen === 0;
            },

            setMenuClass: function () {
                if (mpact.checkHome()) {
                    mpact.settings.menuBtn.removeClass('menu-btn--white');
                } else {
                    mpact.settings.menuBtn.addClass('menu-btn--white');
                }
            },

            // menu button click
            onMenuClick: function (e) {
                e.preventDefault();
                mpact.settings.menuBtn.toggleClass('menu-btn--cross');
                mpact.settings.menuBlock.toggleClass('menu-block--visible');
            },

            // sliding functions
            homeSlideRight: function () {
                mpact.settings.homeScreen.addClass('screen--home-shifting');
                setTimeout(function () {
                    mpact.settings.homeScreen.removeClass('screen--home-shifting').addClass('screen--home-shifted');
                }, 300);
                setTimeout(function () {
                    mpact.settings.dotsArrows.addClass('dots-block__arrows--extending');
                }, 600);
                setTimeout(function () {
                    mpact.settings.arrowsCircles.addClass('arrow-circle--outer-visible');
                }, 1400);

                mpact.settings.homeScreenFull = true;
            },

            homeSlideLeft: function () {
                mpact.settings.homeScreen.removeClass('screen--home-shifted');
                mpact.settings.dotsArrows.removeClass('dots-block__arrows--extending');
                mpact.settings.arrowsCircles.removeClass('arrow-circle--outer-visible');

                mpact.settings.homeScreenFull = false;
            },

            slideDown: function () {
                $('html, body').animate({
                    scrollTop: $(document).scrollTop() + mpact.settings.screens.height()
                }, '500', 'swing', function () {
                    console.log('sliding down');
                }).promise().then(function () {
                    if (mpact.settings.currentScreen !== (mpact.settings.screens.length - 1)) {
                        mpact.settings.currentScreen += 1;
                    }
                    mpact.setMenuClass();
                });
            },

            slideUp: function () {
                $('html, body').animate({
                    scrollTop: $(document).scrollTop() - mpact.settings.screens.height()
                }, '500', 'swing', function () {
                    console.log('sliding up');
                }).promise().then(function () {
                    if (mpact.settings.currentScreen !== 0) {
                        mpact.settings.currentScreen -= 1;
                    }
                    mpact.setMenuClass();
                });
            },

            getTouchPosition: function (e) {
                mpact.settings.startY = e.originalEvent.touches[0].clientY;
            },

            // reworked scrolling
            windowScrolling: function (e) {
                e.preventDefault();

                if (!mpact.settings.isScrolling) {
                    mpact.settings.isScrolling = true;

                    var scrollDown = false,
                        currentY;

                    if (e.type === 'mousewheel') {
                        scrollDown = e.originalEvent.wheelDelta >= 0;
                    } else if (e.type === 'touchmove') {
                        currentY = e.originalEvent.touches[0].clientY;
                        scrollDown = currentY > mpact.settings.startY;
                    }

                    if (scrollDown) {
                        if (mpact.checkHome() && mpact.settings.homeScreenFull) {
                            mpact.homeSlideLeft();
                        } else {
                            mpact.slideUp();
                        }
                    } else {
                        if (mpact.checkHome() && !mpact.settings.homeScreenFull) {
                            mpact.homeSlideRight();
                        } else {
                            if (mpact.settings.currentScreen === 2 && mpact.settings.selectedVariation !== null) {
                                mpact.slideDown();
                            } else if (mpact.settings.currentScreen !== 2) {
                                mpact.slideDown();
                            }
                        }
                    }
                    setTimeout(function () {
                        mpact.settings.isScrolling = false;
                    }, 800);
                }

                mpact.updateMenu();

                // console.log(mpact.checkHome());
                // console.log(mpact.settings.currentScreen);
            },

            // hovering host/advertiser sections
            sectionHover: function () {
                if ($(document).width() <= 1024) {
                    return;
                }
                mpact.settings.selectSection.removeClass('hovered').addClass('neighbour-hovered');
                $(this).addClass('hovered').removeClass('neighbour-hovered');
            },

            sectionUnHover: function () {
                if ($(document).width() <= 1024) {
                    return;
                }
                mpact.settings.selectSection.removeClass('hovered neighbour-hovered');
            },

            sectionClick: function () {
                if ($(document).width() > 1024) {
                    return;
                }
                var $this = $(this);
                if ($this.hasClass('hovered') || $this.closest('.select-section').hasClass('hovered')) {
                    mpact.settings.selectSection.removeClass('hovered neighbour-hovered');
                } else {
                    mpact.settings.selectSection.removeClass('hovered').addClass('neighbour-hovered');
                    if ($this.is('.select-section')) {
                        $this.addClass('hovered').removeClass('neighbour-hovered');
                    } else {
                        $this.closest('.select-section').addClass('hovered').removeClass('neighbour-hovered');
                    }
                }
            },

            // hovering faq sections
            faqHover: function () {
                if ($(document).width() <= 1024) {
                    return;
                }
                mpact.settings.faqMenuItems.removeClass('hovered').addClass('neighbour-hovered');
                $(this).addClass('hovered').removeClass('neighbour-hovered');
            },

            faqUnHover: function () {
                if ($(document).width() <= 1024) {
                    return;
                }
                mpact.settings.faqMenuItems.removeClass('hovered neighbour-hovered');
            },

            faqClick: function () {
                if ($(document).width() > 1024) {
                    return;
                }
                var $this = $(this);
                if ($this.hasClass('hovered') || $this.closest('.faq-menu-item').hasClass('hovered')) {
                    mpact.settings.faqMenuItems.removeClass('hovered neighbour-hovered');
                } else {
                    mpact.settings.faqMenuItems.removeClass('hovered').addClass('neighbour-hovered');
                    if ($this.is('.faq-menu-item')) {
                        $this.addClass('hovered').removeClass('neighbour-hovered');
                    } else {
                        $this.closest('.select-section').addClass('hovered').removeClass('neighbour-hovered');
                    }
                }
            },

            // host/advertiser location links
            locationLinkClick: function () {
                var $this = $(this);
                if ($this.hasClass('variations-link-btn--selected')) {
                    $this.removeClass('variations-link-btn--selected');
                } else {
                    mpact.settings.locationLinks.removeClass('variations-link-btn--selected');
                    $this.addClass('variations-link-btn--selected');
                }

                if ($('.variations-link-btn--selected').length > 0) {
                    mpact.settings.screenVariation.addClass('screen-variation--toggled');
                } else {
                    mpact.settings.screenVariation.removeClass('screen-variation--toggled');
                }
            },

            screenVariationMainClick: function () {
                var $thisScreenVariation = $(this).closest('.screen-variation');
                if ($thisScreenVariation.hasClass('screen-variation--toggled')) {
                    $thisScreenVariation.removeClass('screen-variation--toggled');
                    $('.variations-link-btn--selected').removeClass('variations-link-btn--selected');
                }
            },

            variationSelect: function () {
                mpact.settings.selectedVariation = $(this).data('variation-select');
                mpact.settings.screenVariation.hide();
                $('.screen-variation--' + mpact.settings.selectedVariation).show();
                mpact.slideDown();
            }
        };

        $(function () {
            mpact.init();
        });

    });

}(jQuery));