$(function () {
  $(".slider__inner").slick({
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/next.png" alt="next arrow"></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/prev.png" alt="prev arrow"></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1200,
    asNavFor: ".slider__nav"
  });

  $(".slider__nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider__inner",
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".header__menu-btn").on("click", function () {
    $(".header__menu ul").slideToggle();
  });
});
