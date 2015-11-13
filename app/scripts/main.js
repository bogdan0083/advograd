console.log('\'Allo \'Allo!');


// MEGA-SLIDER

$(document).ready(function(){
    $('.js-mega-slider').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        dots: false,
        fade: true,
        adaptiveHeight: true,
        draggable: false,
        infinite: true,
        arrows: true,
        prevArrow: '<button class="mega-slider__control-left"></button>',
        nextArrow: '<button class="mega-slider__control-right"></button>'
    });

    // SCROLLBAR
     (function($){
        $(window).load(function(){
            $(".slider_row").mCustomScrollbar({
                theme: "dark",
                //autoDraggerLength: false,
                axis: "x"
            });
        });
    })(jQuery);

    // $('.slider_row').on('scroll', function(e) {
    //     var slider = $('slider_row');
    //     console.log(slider.scrollLeft());
    //     $('.slider_row__shadow').css('left', $('.slider_row').scrollLeft() + 500 - 130 + 'px' )
    // });
    

    // QUESTIONS SLIDER DYNAMIC CHANGE
    $('.slider_row').on('click', function(e) {
        var slider = $('slider_row');

        if (e.target.classList.contains('slide__circle')) {
            var slideIndex = ($('.slide__circle').index(e.target));

            var blocks = $('.questions-block');
            var activeBlock = document.querySelector('.questions-block_active');
            console.log(slideIndex);
            console.log(blocks[slideIndex]);
            console.log(activeBlock);

            activeBlock.classList.remove('questions-block_active');
            setTimeout(function(){
                blocks[slideIndex].classList.add('questions-block_active');
            }, 400);
        }
    });

    // ACCORDEON
    $('.accordeon__heading:first-child').next().addClass('.accordeon__text_opened');
    $('.accordeon__heading:first-child').next().slideDown(300).addClass('accordeon__text_opened');

    $('.accordeon__heading').on('click', function(e) {
        if ($(e.target).next().hasClass('accordeon__text_opened')) {
            console.log('closed');
            $(this).next().removeClass('accordeon__text_opened');
            $(this).next().slideUp(300).removeClass('accordeon__text_opened');

        } else {
        $(this).next().removeClass('accordeon__text_opened');
        $(this).next().slideUp(300).removeClass('accordeon__text_opened');

        $(this).next().addClass('accordeon__text_opened');
        $(this).next().slideDown(300).addClass('accordeon__text_opened');

        } 
    });

    // SHOW CLIENT STORY ON CLICK

    $('.clients-story__client').on('click', function(e) {
        if (e.target.classList.contains('clients-story__show')) {
            console.log(e.target.previousElementSibling);
            e.target.previousElementSibling.style.height = 'auto';
            e.target.style.display = 'none';
            e.preventDefault()
        }
    }); 

    // CLIENT STORIES DYNAMIC CHANGE 

    $('.clients-story__right').on('click', function(e) {

        if (e.target.classList.contains('clients-story__circle')) {
            var storyIndex = $('.clients-story__circle').index(e.target);

            var stories = $('.clients-story__client');
            var activeBlock = document.querySelector('.clients-story__client_active');
            console.log(storyIndex);
            console.log(stories[storyIndex]);
            console.log(activeBlock);

            activeBlock.classList.remove('clients-story__client_active');

            setTimeout(function(){
                stories[storyIndex].classList.add('clients-story__client_active');
            }, 400);
        }
    });

    // YOUTUBE OVERLAY

    $('.clients-story__video').on('click', function(e) {
        var url = $(this).data().href;

        var youtubeOverlay = $('.youtube-overlay');
        var overlayContent = $('.youtube-overlay__content');
        var iframe = document.createElement('iframe');
        iframe.style.width = 420 + 'px';
        iframe.style.height = 315 + 'px';
        iframe.src = url;
        iframe.frameBorder = '0';
        iframe.setAttribute("allowfullscreen", "");
        youtubeOverlay.addClass('youtube-overlay_visible');
        overlayContent.append(iframe);

        youtubeOverlay.on('click', function(e) {

        youtubeOverlay.removeClass('youtube-overlay_visible');

        iframe.remove();

        e.preventDefault();

        });
        e.preventDefault();
    });
});

