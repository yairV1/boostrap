$(document).ready(function(){
    $('.slider-products').slick({
    dots: false,
    infinite: true,
    arrows:true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
        responsive:[
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                },
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            
        ]
    });
});

$(document).ready(function(){
    $('.slider-reviews').slick({
    dots: false,
    infinite: true,
    arrows:true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: 'ondemand',
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            
        ]
    });
});