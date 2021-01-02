"use strict";
$(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: [`<img src="img/left.svg">`, `<img src="img/right.svg">`],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1.3,
      },
    },
  });
});

// let btn = document.getElementById("cta");
// let btn2 = document.getElementById("cta2");
// btn.onclick = function () {
//   anime({
//     targets: " .polymorph",
//     points: [
//       {
//         value: "226,117 0,117.5 0,0.5 0,0 39.9,0 72,83",
//       },
//       // {
//       //   value: "70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369",
//       // },
//       // {
//       //   value: "70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369",
//       // },
//     ],
//     easing: "easeOutQuad",
//     duration: 1200,
//     loop: false,
//   });
// };
