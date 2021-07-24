new Swiper('.services__slider', {
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },
    // autoHeight: true,
    direction: 'vertical',
    speed: 1000,
    mousewheel: {
        sensitivity: 1,
    },
    slidesPerView: 3,
    spaceBetween: 15,
});
new Swiper('.specialists__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoHeight: true,
});
new Swiper('.reviews__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.reviews__swiper-pagination',
        clickable: true,
    },
    autoHeight: true,
    slidesPerView: 3,
    breakpoints: {
        1015: {
            slidesPerView: 3,
        },
        680: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,

        },
    },
});


$(function() {
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
    });
    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modals');

        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    });
    $(".modals").on("click", function(event) {

        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
    });
    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });
});