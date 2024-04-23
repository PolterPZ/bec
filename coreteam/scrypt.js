const headers = document.querySelectorAll("[data-name='spoiler-title']");

let label = document.getElementsByClassName("label__bg");

headers.forEach(function (item) {
  item.addEventListener("click", headerClick);
});

function headerClick() {
  this.nextElementSibling.classList.toggle("spoiler-toggle");
  for(let i = 0; i < label.length; i++){
    label[i].classList.toggle("label__bg--active");
  }
  
  
};

let scrollOffset = 170;
function scroll_1(){
  var scrollDiv = document.getElementById("section-1").offsetTop;
  window.scrollTo({ top: scrollDiv-scrollOffset, behavior: 'smooth'});
}
function scroll_2(){
  var scrollDiv = document.getElementById("section-2").offsetTop;
  window.scrollTo({ top: scrollDiv-scrollOffset + 300, behavior: 'smooth'});
}
function scroll_3(){
  var scrollDiv = document.getElementById("section-3").offsetTop;
  window.scrollTo({ top: scrollDiv-950, behavior: 'smooth'});
}
function scroll_4(){
  var scrollDiv = document.getElementById("section-4").offsetTop;
  window.scrollTo({ top: scrollDiv-scrollOffset, behavior: 'smooth'});
}
function scroll_5(){
  var scrollDiv = document.getElementById("section-5").offsetTop;
  window.scrollTo({ top: scrollDiv-200, behavior: 'smooth'});
}

gsap.to(".section-2__gear", {
  yPercent: -270,
  // ease: "none",
  scrollTrigger: {
    trigger: ".page",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});

gsap.to(".section-3__gear", {
  yPercent: -500,
  // ease: "none",
  scrollTrigger: {
    trigger: ".page",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});
gsap.to(".section-3", {
  yPercent: -230,
  // ease: "none",
  scrollTrigger: {
    trigger: ".page",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});
gsap.to(".section-2", {
  yPercent: 100,
  // ease: "none",
  scrollTrigger: {
    trigger: ".page",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});
