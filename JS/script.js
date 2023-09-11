
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

// animation
gsap.from(".banner-header", { scrollTrigger: {
  trigger:".banner-header",
  toggleActions: "restart restart restart restart"}, 
 y: 20, duration:0.6, delay:0.1, opacity:0})

 gsap.from(".banner-desc", { scrollTrigger: {
  trigger:".banner-desc",
  toggleActions: "restart restart restart restart"}, 
 y: 20, duration:0.6, delay:0.2, opacity:0})

 gsap.from(".btnBanner", { scrollTrigger: {
  trigger:".btnBanner",
  toggleActions: "restart restart restart restart"}, 
 y: 20, duration:0.6, delay:0.3, opacity:0})

gsap.from(".image", { scrollTrigger: {
  trigger:".image",
  toggleActions: "restart restart restart restart"}, 
 y: 20, duration:0.6, delay:0.5, opacity:0})

 gsap.from(".animation-about-text", { scrollTrigger: {
  trigger:".animation-about-text",
  toggleActions: "restart restart restart restart"}, 
 y: 20, stagger:1, duration:0.6, delay:0.8, opacity:0})

 gsap.from(".btnAbout", { scrollTrigger: {
  trigger:".btnAbout",
  toggleActions: "restart restart restart restart"}, 
  x: 10, duration:0.6, delay:1.3, opacity:0})

 gsap.from(".animation-portfolio-text", { scrollTrigger: {
  trigger:".animation-portfolio-text",
  toggleActions: "restart restart restart restart"}, 
  y: 20, duration:0.6, delay:1.1, opacity:0})

  gsap.from(".btnPortfolio", { scrollTrigger: {
    trigger:".btnPortfolio",
    toggleActions: "restart restart restart restart"}, 
    x: 10, duration:0.6, delay:1.5, opacity:0})

    gsap.from(".portfolio-banner img", { scrollTrigger: {
      trigger:".portfolio-banner img",
      toggleActions: "restart restart restart restart"}, 
      y: 20, duration:0.6, delay:1.5, opacity:0})

 gsap.from("#faq", { scrollTrigger: {
  trigger:"#faq",
  toggleActions: "restart restart restart restart"}, 
  y: 20, duration:0.6, delay:0.8, opacity:0})
