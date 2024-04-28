// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const headers = document.querySelectorAll("[data-name='spoiler-title']");

let label = document.getElementsByClassName("label__bg");
let labelName = document.getElementById("labelName");

headers.forEach(function (item) {
  item.addEventListener("click", headerClick);
});

function headerClick() {
  const spoilerTitle = this.textContent.trim();
  console.log(spoilerTitle);
  labelName.textContent = spoilerTitle;
  console.log(labelName.textContent);

  this.nextElementSibling.classList.toggle("spoiler-toggle");

  for (let i = 0; i < 2; i++) {
    label[i].classList.toggle("label__bg--active");
  }

  label[2].classList.toggle("label__bg--active1");
  label[3].classList.toggle("label__bg--active2");
  label[4].classList.toggle("label__bg--active3");

};


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
  yPercent: -100,
  // ease: "none",
  scrollTrigger: {
    trigger: ".page",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  },
});
gsap.to(".gear3-wrapper", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".gear1-wrapper",
    start: "top top",
    end: "50% top",
    scrub: true,

  },

});

gsap.to(".gear3-wrapper", {
  yPercent: -235,

  // ease: "none",
  scrollTrigger: {
    trigger: ".page",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  },
});
gsap.to(".gear2-wrapper", {
  yPercent: 110,
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

let burger = document.querySelector(".menu__burger");
let menu = document.querySelector(".menu__list");
function onClickBurger() {

  burger.classList.toggle("active");
  menu.classList.toggle("active");
}
let links = document.querySelectorAll("menu__item");

links.forEach(function (item) {
  item.addEventListener("click", linkClick);
});

function linkClick() {
  menu.classList = "menu__list";
   burger.classList.toggle("active");
}


let panelsSection = document.querySelector("#panels"),
  panelsContainer = document.querySelector("#panels-container"), tween;
document.querySelectorAll(".anchor").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
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



const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
    snap: {
      snapTo: 1 / (panels.length - 1),
      inertia: false,
      duration: { min: 0.1, max: 0.1 }
    },
    end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
   
  }
});
