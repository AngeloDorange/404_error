// Animation gsap

let tl = gsap.timeline();

tl.from("h4", {
  duration: 1.30,
  y: 150,
  autoAlpha: 0,
  ease: Power3.out,
  stagger: 1.5
}).from(".letter p", {
    duration: 0.5,
    y: 150,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 1.5,
}).from(".medi", {
  duration: 0.75,
  x: 100,
  autoAlpha: 0,
  ease: "elastic.out(1, 1)",
  stagger: {
    each: 0.75,
    amount: 0.5
  }
}, "+=0.50");

/*====CurrentYear====*/

const currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;


// TIMER COUNTDOWN;

let timer = (new Date().getTime() / 1000) + (86400 * 8) + 1;
let flipdown = new FlipDown(timer) // countdown for 24 hours
  .start()
    .ifEnded(() => {
    console.log("The countdown has ended!");
  });
document.getElementById("flipdown").appendChild(flipdown.el);