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
                arrowsBtn: $('.slide-arrows--about').find('.slide-arrows-link'),
                toContactBtn: $('.contact-page-link-button'),

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
                selectedFaq: null,
                faqVariation: $('.faq-variation'),

                // contact
                contactForm: $('.contact-form'),
                contactThankYou: $('.contact-thankyou'),
                contactTitle: $('.contact-title'),

                // careers
                careersButtons: $('.careers-info-toggle'),
                careersSlidingContent: $('.sliding-content'),
                careersSlidingContentClose: $('.sliding-content-close'),
                careersScrollSettings: {
                    cursorcolor:"#333"
                },

                // terms
                termsTextBlock: $('.terms-text'),
                termsScrollSettings: {
                    cursorcolor:"#e17964"
                }
            },

            init: function () {
                // set each screen height to window height
                // mpact.setScreenSizes();

                // scrolling buttons
                mpact.settings.btnFeatures.on('click', mpact.homeSlideRight);
                mpact.settings.btnFindOut.add(mpact.settings.arrowsBtn).add(mpact.settings.toContactBtn).on('click', mpact.slideDown);

                // check current step and set menu class
                mpact.detectStep();
                mpact.setMenuClass();

                // menu button click
                mpact.settings.menuBtn.on('click', mpact.onMenuClick);

                // mousewheel/touchmove events
                $(document).on('touchstart', mpact.getTouchPosition);
                $(document).on('mousewheel touchmove', function (e) {
                    var carouselItems = $('.carousel-section--active').find('.carousel-item');

                    if (e.type === 'touchmove' ) {
                        if (!carouselItems.is(e.target) && carouselItems.has(e.target).length === 0) {
                            mpact.windowScrolling(e);
                        }
                    } else {
                        mpact.windowScrolling(e);
                    }
                });

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

                // on contact form submit
                mpact.settings.contactForm.on('submit', mpact.onContactFormSubmit);

                // on careers buttons click
                mpact.settings.careersButtons.on('click', mpact.onCareersButtonClick);
                mpact.settings.careersSlidingContentClose.on('click', mpact.onCareersSlideClose);

                mpact.settings.careersSlidingContent.niceScroll(mpact.settings.careersScrollSettings);
                mpact.settings.termsTextBlock.niceScroll(mpact.settings.termsScrollSettings);
            },

            // steps functions
            detectStep: function () {
                mpact.settings.screens.each(function () {
                    console.log($(this));
                    console.log($(this).offset().top);
                    if ($(this).offset().top === $(document).scrollTop()) {
                        mpact.settings.currentScreen = mpact.settings.screens.index(this);
                        return {
                            screen: $(this).data('screen'),
                            variation: mpact.selectedVariation
                        };
                    }
                });
            },

            checkHome: function () {
                console.log(mpact.settings.currentScreen);
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

                var carouselItems = $('.carousel-section--active').find('.carousel-item');

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
                        if (mpact.settings.currentScreen < 2 || mpact.settings.currentScreen === 3 || mpact.settings.currentScreen >= 5) {
                            if (mpact.checkHome() && !mpact.settings.homeScreenFull) {
                                mpact.homeSlideRight();
                            } else {
                                mpact.slideDown();
                            }
                        }
                    }
                    setTimeout(function () {
                        mpact.settings.isScrolling = false;
                    }, 800);
                }
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
                var $this = $(this);
                if ($this.hasClass('hovered')) {
                    mpact.slideDown();
                    mpact.settings.selectSection.removeClass('hovered neighbour-hovered');
                } else {
                    if ($(document).width() > 1024) {
                        return;
                    }
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
                var $this = $(this);
                if ($this.hasClass('hovered') || $this.closest('.faq-menu-item').hasClass('hovered')) {
                    $this.addClass('active').removeClass('inactive');
                    $this.siblings(mpact.settings.faqMenuItems).addClass('inactive').removeClass('active');
                }
                if ($(document).width() > 1024) {
                    return;
                }
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
                mpact.settings.screenVariation.add(mpact.settings.faqVariation).add(mpact.settings.contactTitle).removeClass('visible');
                $('.screen-variation--' + mpact.settings.selectedVariation).addClass('visible');
                $('.faq-variation--' + mpact.settings.selectedVariation).addClass('visible');
                $('.contact-title--' + mpact.settings.selectedVariation).addClass('visible');
            },

            onContactFormSubmit: function (e) {
                e.preventDefault();
                mpact.settings.contactThankYou.addClass('visible');
            },

            onCareersButtonClick: function () {
                var selectedContent = $(this).is('.careers-info-toggle--host') ? '.sliding-content__host' : '.sliding-content__advertising';
                mpact.settings.careersSlidingContent.addClass('visible');
                $(selectedContent).addClass('visible').siblings('.sliding-content__section').removeClass('visible');
                setTimeout(function () {
                    mpact.settings.careersSlidingContent.getNiceScroll().resize();
                }, 300);
            },

            onCareersSlideClose: function () {
                mpact.settings.careersSlidingContent.removeClass('visible');
                mpact.settings.careersSlidingContent.getNiceScroll().hide();
            }
        };

        $(function () {
            mpact.init();
        });

    });

}(jQuery));