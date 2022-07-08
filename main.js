
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
  x: 300,
  autoAlpha: 0,
  ease: "elastic.out(1, 1)",
  stagger: {
    each: 0.75,
    amount: 0.5
  }
}, "+=0.50");


let email = document.getElementById('email');

email.addEventListener('focus', function(){
    email.style.background = "#25BAD0";
});
email.addEventListener('blur', function(){
    email.style.background = "none";
})
