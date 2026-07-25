$(function () {
    var owl = $('.testimonials-con .owl-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
});
// wow js
new WOW().init();
// 


// photo gallery script
$(function () {
    var $lightbox = $('#lightbox');
    $(document).on('click', '[data-target="#lightbox"]', function (event) {
        var $img = $(this).find('img'),
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
        $lightbox.find('.modal-dialog').css({
            'width': $img.width()
        });
        $lightbox.find('.close').removeClass('hidden');
    });
});
// photo gallery script for choosing images
var images = [
    "assets/images/gallery-img1.jpg",
    "assets/images/gallery-img2.jpg",
    "assets/images/gallery-img3.jpg",
    "assets/images/gallery-img4.jpg",
    "assets/images/gallery-img5.jpg",

    // Add more image paths as needed
];
var currentIndex = 0;
var popupImage = document.getElementById("popupImage");

if (popupImage) {
    popupImage.addEventListener("click", function () {
        // Update the src attribute with the next image path
        this.src = images[currentIndex];

        // Increment currentIndex or reset to 0 if it reaches the end
        currentIndex = (currentIndex + 1) % images.length;
    });
}