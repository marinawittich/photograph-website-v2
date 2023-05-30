
const scrollBtn = document.querySelector('.scrBtn');
console.log(scrollBtn);
scrollBtn.onclick = () =>{
    window.scrollTo (0,0);
}

$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 4, 
    nav: true,
    loop: true, 
    lazyLoad:  true,
    margin: 5,
    padding: 5,
    stagePadding:5,
    responsive: {
      0 : {
        items: 1,
        dots: false
      },
      800 : {
        items: 2,
        dots: true
      },
      1000 : {
        items: 3,
        dots: true
      },
      1800 : {
        items: 4,
        dots: true
      },

    }
  })


