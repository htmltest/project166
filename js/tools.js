$(document).ready(function() {

    $('.links-item a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length == 1) {
            $('html, body').animate({'scrollTop': $().offset().top});
        }
        e.preventDefault();
    });

    $('.up-link').click(function(e) {
        $('html, body').animate({'scrollTop': 0});
        e.preventDefault();
    });

});

$(window).on('load resize', function() {

    if ($('.welcome-slider').hasClass('slick-slider')) {
        $('.welcome-slider').slick('unslick');
    }

    if ($(window).width() > 1140) {
        $('.links-inner').each(function() {
            var curList = $(this);
            if (curList.hasClass('slick-slider')) {
                curList.slick('unslick');
            }
        });

        var newSliderHTML = '';
        for (var i = 0; i < $('.welcome-item').length; i++) {
            var curItem = $('.welcome-item[data-desktopsort="' + i + '"]');
            console.log(curItem);
            newSliderHTML += '<div class="welcome-item" data-desktopsort="' + curItem.attr('data-desktopsort') + '" data-mobilesort="' + curItem.attr('data-mobilesort') + '">' + curItem.html() + '</div>';
        }
        $('.welcome-slider').html(newSliderHTML);
    } else {
        $('.links-inner').each(function() {
            var curList = $(this);
            if (!curList.hasClass('slick-slider')) {
                curList.slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                });
            }
        });

        var newSliderHTML = '';
        for (var i = 0; i < $('.welcome-item').length; i++) {
            var curItem = $('.welcome-item[data-mobilesort="' + i + '"]');
            newSliderHTML += '<div class="welcome-item" data-desktopsort="' + curItem.attr('data-desktopsort') + '" data-mobilesort="' + curItem.attr('data-mobilesort') + '">' + curItem.html() + '</div>';
        }
        $('.welcome-slider').html(newSliderHTML);
    }

    $('.welcome-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        dots: false
    });

});

$(window).on('load resize scroll', function() {
    if ($(window).scrollTop() > $(window).height()) {
        $('.up-link').addClass('visible');
    } else {
        $('.up-link').removeClass('visible');
    }

});