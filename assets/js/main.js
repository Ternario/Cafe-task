$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1111,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
});

let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");
let fourth = document.querySelector("#fourth");

first.innerHTML = 748;
second.innerHTML = 3854;
third.innerHTML = 24;
fourth.innerHTML = 14;

let counterFirst = setInterval(function() {
    first.innerHTML++

    if(first.innerHTML >= 770) {
        clearInterval(counterFirst);
    }
}, 1000)

let counterSecond = setInterval(function() {
    second.innerHTML++

    if(second.innerHTML >= 3900) {
        clearInterval(counterSecond);
    }
}, 1000)

let counterThird = setInterval(function() {
    third.innerHTML++

    if(third.innerHTML >= 50) {
        clearInterval(counterThird);
    }
}, 1000)

let counterFourth = setInterval(function() {
    fourth.innerHTML++

    if(fourth.innerHTML >= 25) {
        clearInterval(counterFourth);
    }
}, 1000)
  