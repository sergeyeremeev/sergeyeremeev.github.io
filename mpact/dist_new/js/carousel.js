(function($){

    'use strict';

    var carousel = {

        settings: {
            wrapper: $('.carousel-container'),
            item: $('.carousel-item'),
            startX: null,
            isRotating: false,
            activeSection: null
        },

        init: function (section) {
            carousel.settings.activeSection = section;
            carousel.createControls();

            carousel.settings.activeSection.on('click', '.ctrl-btn', carousel.onDotClick);

            if ($(document).width() >= 768) {
                carousel.settings.item.off('click', carousel.onItemClick);
                carousel.settings.item.on('click', carousel.onItemClick);
            }

            carousel.settings.item.off('touchstart', carousel.getStartPosition);
            carousel.settings.item.on('touchstart', carousel.getStartPosition);

            carousel.settings.item.off('touchmove', carousel.carouselRotate);
            carousel.settings.item.on('touchmove', carousel.carouselRotate);
        },

        createControls: function (section) {
            var activeSectionDots = carousel.settings.activeSection.find('.carousel-controls__dots');

            if (activeSectionDots.children().length !== 0) {
                return;
            }

            var controlsLength = carousel.settings.activeSection.find('.carousel-item').length,
                fragment = document.createDocumentFragment(),
                dot = document.createElement('span');

            while (controlsLength--) {
                fragment.appendChild(dot.cloneNode(true));
            }

            activeSectionDots.append(fragment);
            activeSectionDots.children('span').addClass('ctrl-btn').first().addClass('active');
        },

        onItemClick: function () {
            var selectedItem = parseInt($(this).index() + 1);
            console.log($(this));
            console.log(selectedItem);

            carousel.settings.activeSection.find('.ctrl-btn:nth-child(' + selectedItem + ')').trigger('click');
        },

        onDotClick: function () {
            var $this = $(this),
                currentItem = $this.siblings('.active').index() + 1,
                activeSection = carousel.settings.activeSection,
                items = activeSection.find('.carousel-item'),
                selectedItem = $this.index() + 1,
                nextSteps,
                prevSteps,
                reps = 0;

            if (currentItem === 0) {
                return;
            }

            if (selectedItem > currentItem) {
                nextSteps = selectedItem - currentItem;
                prevSteps = currentItem - selectedItem + items.length;
            } else {
                nextSteps = selectedItem - currentItem + items.length;
                prevSteps = currentItem - selectedItem;
            }

            if (nextSteps <= prevSteps) {
                for (reps; reps < nextSteps; reps++) {
                    carousel.rotateNext();
                }
            } else {
                for (reps; reps < prevSteps; reps++) {
                    carousel.rotatePrev();
                }
            }

            $this.siblings().removeClass('active');
            $this.addClass('active');
        },

        rotatePrev: function (e) {
            var activeSection = carousel.settings.activeSection,
                items = activeSection.find('.carousel-item'),
                currentPos,
                $this;

            items.each(function () {
                $this = $(this);
                currentPos = parseInt($this.attr('data-carousel-item'));

                if (currentPos === items.length) {
                    $this.attr('data-carousel-item', 1);
                } else {
                    $this.attr('data-carousel-item', currentPos + 1);
                }
            });
        },

        rotateNext: function () {
            var activeSection = carousel.settings.activeSection,
                items = activeSection.find('.carousel-item'),
                currentPos,
                $this;

            items.each(function () {
                $this = $(this);
                currentPos = parseInt($this.attr('data-carousel-item'));

                if (currentPos === 1) {
                    $this.attr('data-carousel-item', items.length);
                } else {
                    $this.attr('data-carousel-item', currentPos - 1);
                }
            });
        },

        getStartPosition: function (e) {
            carousel.settings.startX = e.originalEvent.touches[0].clientX;
        },

        carouselRotate: function (e) {
            var currentCarousel = carousel.settings.activeSection,
                rotateNext = false,
                currentX;

            if (!carousel.settings.isRotating) {
                carousel.settings.isRotating = true;

                currentX = e.originalEvent.touches[0].clientX;
                rotateNext = currentX < carousel.settings.startX;

                if (rotateNext) {
                    carousel.rotateNext();
                } else {
                    carousel.rotatePrev();
                }

                var currentItem = currentCarousel.find('.carousel-item[data-carousel-item="1"]').index() + 1;
                currentCarousel.find('.ctrl-btn').removeClass('active');
                currentCarousel.find('.ctrl-btn:nth-child(' + currentItem + ')').addClass('active');

                setTimeout(function () {
                    carousel.settings.isRotating = false;
                }, 200);
            }
        }
    };

    $(function () {

        $('.faq-menu-item').on('click', function () {
            carousel.init($(this));
        });
    });

})(jQuery);