// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const headers = document.querySelectorAll("[data-name='spoiler-title']");

let label = document.getElementsByClassName("label__bg");

headers.forEach(function (item) {
  item.addEventListener("click", headerClick);
});

function headerClick() {
  this.nextElementSibling.classList.toggle("spoiler-toggle");
  for(let i = 0; i < 2; i++){
    label[i].classList.toggle("label__bg--active");
  }

    label[2].classList.toggle("label__bg--active1");
    label[3].classList.toggle("label__bg--active2");
    label[4].classList.toggle("label__bg--active3");
  
};

let scrollOffset = 170;
function scroll_1(){
  var scrollDiv = document.getElementById("section-1").offsetTop;
  window.scrollTo({ top: scrollDiv-scrollOffset, behavior: 'smooth'});
}
function scroll_2(){
  var scrollDiv = document.getElementById("section-2").offsetTop;
  window.scrollTo({ top: scrollDiv-scrollOffset + 200, behavior: 'smooth'});
}
function scroll_3(){
  var scrollDiv = document.getElementById("section-3").offsetTop;
  window.scrollTo({ top: scrollDiv-950, behavior: 'smooth'});
}
function scroll_4(){
  var scrollDiv = document.getElementById("section-4").offsetTop;
  window.scrollTo({ top: scrollDiv-500, behavior: 'smooth'});
}
function scroll_5(){
  var scrollDiv = document.getElementById("section-5").offsetTop;
  window.scrollTo({ top: scrollDiv-200, behavior: 'smooth'});
}

gsap.to(".section-2__gear", {
  yPercent: -100,
  // ease: "none",
  scrollTrigger: {
    trigger: ".section-3",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});

gsap.to(".section-3__gear", {
  yPercent: -400,
  // ease: "none",
  scrollTrigger: {
    trigger: ".section-1",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});
gsap.to(".section-3", {
  yPercent: -135,
  // ease: "none",
  scrollTrigger: {
    trigger: ".section-1",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});
gsap.to(".section-2", {
  yPercent: 190,
  // ease: "none",
  scrollTrigger: {
    trigger: ".page",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});

gsap.to("#panel-1_title", {
  yPercent: 60,
  // ease: "none",
  scrollTrigger: {
    trigger: ".section-4",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});



let panelsSection = document.querySelector("#panels"),
	panelsContainer = document.querySelector("#panels-container"),
	tween;
document.querySelectorAll(".anchor").forEach(anchor => {
	anchor.addEventListener("click", function(e) {
		e.preventDefault();
		let targetElem = document.querySelector(e.target.getAttribute("href")),
			y = targetElem;
		if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
			let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
				totalMovement = (panels.length - 1) * targetElem.offsetWidth;
			y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
		}
		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false
        
			},
			duration: 0.3,
      markers: true
		});
	});
});

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
	xPercent: -100 * ( panels.length - 1 ),
	ease: "none",
	scrollTrigger: {
		trigger: "#panels-container",
		pin: true,
		start: "top top",
		scrub: 1,
		snap: {
			snapTo: 1 / (panels.length - 1),
			inertia: false,
			duration: {min: 0.1, max: 0.1}
		},
		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
	}
});