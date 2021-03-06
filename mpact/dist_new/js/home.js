(function($){

    $(function () {

        var mpact = {

            // check if touch device
            isTouch: ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0),
            lastWindowWidth: $(window).width(),
            lastWindowHeight: $(window).height(),

            settings: {
                // screen elements and current screen
                screens: $('.screen'),
                currentScreen: null,
                currentScreenName: null,
                menuBlock: $('.menu-block'),

                menuNavButtons: $('[data-section-menu]'),

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
                selectedVariation: 'host',

                // faq
                faqMenuItems: $('.faq-menu-item'),
                selectedFaq: null,
                faqVariation: $('.faq-variation'),

                // contact
                contactForm: $('.contact-form'),
                contactThankYou: $('.contact-thankyou'),
                contactTitle: $('.contact-title'),
                inputContainer: $('.input-container'),

                // careers
                careersButtons: $('.careers-info-toggle'),
                careersSlidingContent: $('.sliding-content'),
                careersSlidingContentContainer: $('.sliding-content__container'),
                careersSlidingContentClose: $('.sliding-content-close'),
                careersScrollSettings: {
                    cursorcolor:"#333"
                },

                // terms
                termsTextBlock: $('.terms-text'),
                termsScrollSettings: {
                    cursorcolor:"#e17964"
                },

                touchScrollBlockedContent: $('.touch-scroll-block-content'),

                movingContent: $('.moving-content')
            },

            init: function () {

                // scrolling buttons
                mpact.settings.btnFeatures.on('click', mpact.homeSlideRight);
                mpact.settings.btnFindOut.add(mpact.settings.arrowsBtn).add(mpact.settings.toContactBtn).on('click', mpact.slideDown);

                // check current step and set menu class
                mpact.detectStep();
                mpact.setMenuClass();

                // menu button click
                mpact.settings.menuBtn.on('click', mpact.onMenuClick);

                // menu outside click
                $(document).on('click', mpact.onOutsideMenuClick);

                // menu navigation
                mpact.settings.menuNavButtons.on('click', mpact.navigateToSection);

                // mousewheel/touchmove events
                $(document).on('touchstart', mpact.getTouchPosition);
                $(document).on('mousewheel touchmove', function (e) {
                    e.preventDefault();
                });
                $(document).on('mousewheel.fancyScroll touchmove.fancyScroll', mpact.manageScroll);

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
                mpact.settings.inputContainer.find('input').on('focus', mpact.onInputFocus);
                mpact.settings.inputContainer.find('input').on('blur', mpact.onInputBlur);

                // return to top of contact section on window close
                $(window).resize(mpact.onKeyboardClose);

                // on careers buttons click
                mpact.settings.careersButtons.on('click', mpact.onCareersButtonClick);
                mpact.settings.careersSlidingContentClose.on('click', mpact.onCareersSlideClose);

                // custom scroll bars
                mpact.settings.careersSlidingContentContainer.niceScroll(mpact.settings.careersScrollSettings);
                console.log(mpact.settings.careersSlidingContentContainer);
                mpact.settings.termsTextBlock.niceScroll(mpact.settings.termsScrollSettings);

                $(window).on('load', mpact.homeScreenContentAppear);
            },

            manageScroll: function (e) {
                var carouselItems = $('.faq-menu-item.active').find('.carousel-item');

                if (e.type === 'touchmove' ) {
                    if (!carouselItems.is(e.target) && carouselItems.has(e.target).length === 0
                        && !mpact.settings.touchScrollBlockedContent.is(e.target)
                        && mpact.settings.touchScrollBlockedContent.has(e.target).length === 0) {
                        mpact.windowScrolling(e);
                    }
                } else {
                    if (!mpact.settings.touchScrollBlockedContent.is(e.target)
                        && mpact.settings.touchScrollBlockedContent.has(e.target).length === 0) {
                        mpact.windowScrolling(e);
                    }
                }
            },

            // steps functions
            detectStep: function () {
                mpact.settings.screens.each(function () {
                    if ($(this).offset().top === $(document).scrollTop()) {
                        mpact.settings.currentScreen = mpact.settings.screens.index(this);
                        mpact.settings.currentScreenName = $(this).attr('data-screen');
                        // console.log(mpact.settings.currentScreen, mpact.settings.currentScreenName);
                    }
                });
                mpact.animateContent();
            },

            animateContent: function () {
                var animatedElement = null;
                switch (mpact.settings.currentScreenName) {
                    case 'about':
                        animatedElement = $('.about-content');
                        break;
                    case 'host_advertiser':
                        animatedElement = mpact.settings.selectSection.children();
                        break;
                    case 'host_advertiser-content':
                        animatedElement = mpact.settings.screenVariationMain.children();
                        break;
                    case 'faq_menu':
                        animatedElement = mpact.settings.faqMenuItems.children('h2');
                        break;
                    case 'contact':
                        animatedElement = $('.contact-content');
                        break;
                    case 'careers':
                        animatedElement = $('.careers-bottom').children();
                        break;
                    default:
                        break;
                }

                (animatedElement && !animatedElement.hasClass('appears')) && animatedElement.addClass('appears');
            },

            checkHome: function () {
                // console.log(mpact.settings.currentScreen);
                return mpact.settings.currentScreen === 0;
            },

            setMenuClass: function () {
                if (mpact.settings.currentScreen === 0) {
                    mpact.settings.menuBtn.removeClass('menu-btn--white');
                } else {
                    mpact.settings.menuBtn.addClass('menu-btn--white');
                }

                mpact.settings.menuNavButtons.removeClass('selected');
                var currentMenuItem = $('[data-section-menu="' + mpact.settings.currentScreenName + '"]');

                if (mpact.settings.currentScreenName === 'host_advertiser-content') {
                    currentMenuItem = $('[data-menu-variation="' + mpact.settings.selectedVariation + '"]');
                }

                if (currentMenuItem) {
                    currentMenuItem.addClass('selected');
                }
            },

            // menu button click
            onMenuClick: function (e) {
                e.preventDefault();
                mpact.settings.menuBtn.toggleClass('menu-btn--cross');
                mpact.settings.menuBlock.toggleClass('menu-block--visible');
            },

            onOutsideMenuClick: function (e) {
                if (mpact.settings.menuBlock.hasClass('menu-block--visible')) {
                    if (!mpact.settings.menuBlock.is(e.target) && mpact.settings.menuBlock.has(e.target).length === 0
                            && !mpact.settings.menuBtn.is(e.target) && mpact.settings.menuBtn.has(e.target).length === 0) {
                        mpact.settings.menuBtn.trigger('click');
                    }
                }
            },

            navigateToSection: function () {
                var $this = $(this),
                    selectedSection = $this.attr('data-section-menu'),
                    selectedVariation = $this.attr('data-menu-variation');

                if (selectedVariation) {
                    mpact.variationSelect(selectedVariation);
                }

                var scrollTo = $('[data-screen="' + selectedSection + '"]').offset().top;

                $('html, body').animate({
                    scrollTop: scrollTo
                }, '500', 'swing', function () {
                    // console.log('navigating to section: ' + selectedSection);
                }).promise().then(function () {
                    mpact.detectStep();
                    mpact.setMenuClass();
                });
            },

            // sliding functions
            homeSlideRight: function () {
                mpact.settings.homeScreen.addClass('screen--home-shifting');
                setTimeout(function () {
                    mpact.settings.homeScreen.removeClass('screen--home-shifting').addClass('screen--home-shifted');
                    $('.dots-block__content').addClass('appears');
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
                    // console.log('sliding down');
                }).promise().then(function () {
                    mpact.detectStep();
                    mpact.setMenuClass();
                });

                mpact.onCareersSlideClose();
            },

            slideUp: function () {
                $('html, body').animate({
                    scrollTop: $(document).scrollTop() - mpact.settings.screens.height()
                }, '500', 'swing', function () {
                    // console.log('sliding up');
                }).promise().then(function () {
                    mpact.detectStep();
                    mpact.setMenuClass();
                });

                mpact.onCareersSlideClose();
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
                if ($this.hasClass('inactive')) {
                    $this.addClass('active').removeClass('inactive');
                    $this.siblings(mpact.settings.faqMenuItems).addClass('inactive').removeClass('active');
                }
                if ($this.hasClass('hovered') && !$this.hasClass('active')) {
                    $this.addClass('active').removeClass('inactive');
                    $this.siblings(mpact.settings.faqMenuItems).addClass('inactive').removeClass('active');
                    mpact.settings.faqMenuItems.removeClass('hovered neighbour-hovered');
                }
                if ($(document).width() > 1024) {
                    return;
                }
                if (!$this.hasClass('hovered')) {
                    $this.siblings(mpact.settings.faqMenuItems).removeClass('hovered').addClass('neighbour-hovered');
                    $this.addClass('hovered').removeClass('neighbour-hovered');
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

            variationSelect: function (variation) {
                if ($(this).is('[data-variation-select]')) {
                    mpact.settings.selectedVariation = $(this).data('variation-select');
                } else {
                    mpact.settings.selectedVariation = variation;
                }
                mpact.settings.screenVariation.add(mpact.settings.faqVariation).add(mpact.settings.contactTitle).removeClass('visible');
                $('.screen-variation--' + mpact.settings.selectedVariation).addClass('visible');
                $('.faq-variation--' + mpact.settings.selectedVariation).addClass('visible');
                $('.contact-title--' + mpact.settings.selectedVariation).addClass('visible');
            },

            onInputFocus: function () {
                var $this = $(this),
                    $thisContainer = $this.closest('.input-container');
                if (!$thisContainer.hasClass('filled')) {
                    $thisContainer.addClass('filled');
                }
                $('.container').addClass('no-overflow');
                $(document).off('touchmove.fancyScroll');
            },

            onInputBlur: function () {
                var $this = $(this),
                    $thisContainer = $this.closest('.input-container');
                if ($this.val() === '') {
                    $thisContainer.removeClass('filled');
                }
                $('.container').removeClass('no-overflow');
                var scrollTo = $('[data-screen="contact"]').offset().top;
                $(document).scrollTop(scrollTo);
                $(document).on('touchmove.fancyScroll', mpact.manageScroll);
            },

            onContactFormSubmit: function (e) {
                e.preventDefault();
                mpact.settings.contactThankYou.addClass('visible');
                mpact.onInputBlur.call(document.querySelector('.input-container input'));
            },

            onKeyboardClose: function () {
                var newWindowWidth = $(window).width(),
                    newWindowHeight = $(window).height();

                if( newWindowHeight > mpact.lastWindowHeight && newWindowWidth === mpact.lastWindowWidth ) {
                    mpact.onInputBlur.call(document.querySelector('.input-container input'));
                }

                mpact.lastWindowWidth = newWindowWidth;
                mpact.lastWindowHeight = newWindowHeight;
            },

            onCareersButtonClick: function () {
                var selectedContent = $(this).is('.careers-info-toggle--host') ? '.sliding-content__host' : '.sliding-content__advertising';
                mpact.settings.careersSlidingContent.addClass('visible');
                $(selectedContent).addClass('visible').siblings('.sliding-content__section').removeClass('visible');
                setTimeout(function () {
                    mpact.settings.careersSlidingContentContainer.getNiceScroll().resize();
                }, 500);
            },

            onCareersSlideClose: function () {
                mpact.settings.careersSlidingContent.removeClass('visible');
            },

            homeScreenContentAppear: function () {
                $('.screen--home').find(mpact.settings.movingContent).addClass('appears');
            }
        };

        $(function () {
            mpact.init();
        });

    });

}(jQuery));