
const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const headline = document.querySelector(".headline");
const brg = document.querySelector(".brg");

const tl = new TimelineMax({});

tl.fromTo(hero,1,{ height : "0%" },{ height : "80%", ease: Power2.easeInOut})
.fromTo(hero,1.2,{width : "100%"},{width : "80%" , ease: Power2.easeInOut})
.fromTo(slider,1.2,{x : "-100%"},{x : "0%" , ease: Power2.easeInOut} , "-=1.2" )
.fromTo(headline,1.2,{fontSize : '80px',opacity : "0" },{fontSize : '100px',opacity : "1" , ease: Power2.easeInOut} , "-=1.2")
.fromTo(logo,1.2,{x : "-50",opacity : "0"},{x : "0",opacity : "1" , ease: Power2.easeInOut} , "-=1")
.fromTo(brg,1.2,{x : "50",opacity : "0"},{x : "0",opacity : "1" , ease: Power2.easeInOut} , "-=1.2")



