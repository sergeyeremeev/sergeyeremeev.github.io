(function($){

    var carousel = {

        settings: {
            wrapper: $('.carousel-container'),
            item: $('.carousel-item'),
            controls: {
                btnPrev: $('.carousel-prev'),
                btnNext: $('.carousel-next')
            }
        },

        init: function () {
            carousel.createControls();
            $(document).on('click', '.ctrl-btn', carousel.onDotClick);
            carousel.settings.item.on('click', carousel.onItemClick);

            carousel.settings.controls.btnPrev.on('click', carousel.rotatePrev);
            carousel.settings.controls.btnNext.on('click', carousel.rotateNext);
        },

        createControls: function () {
            var activeSection = $('.carousel-section--active'),
                activeSectionDots = activeSection.find('.carousel-controls__dots'),
                controlsLength = activeSection.find('.carousel-item').length,

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

            $('.carousel-section--active').find('.ctrl-btn:nth-child(' + selectedItem + ')').trigger('click');
        },

        onDotClick: function () {
            var $this = $(this),
                currentItem = $this.siblings('.active').index() + 1,
                activeSection = $('.carousel-section--active'),
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
            var activeSection = $('.carousel-section--active'),
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
            var activeSection = $('.carousel-section--active'),
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
        }
    };

    $(function () {
        carousel.init();
    });

})(jQuery);