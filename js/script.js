gsap.registerPlugin(ScrollTrigger);

gsap.timeline().to(".preimg1", {
    opacity: "100%",
    scale: 1,
    duration: .5,
    delay: 1,
    ease: "power2.out"   
}).to(".preimg2", {
    opacity: "100%",
    scale: 1,
    duration: .5,
    ease: "power2.out"     
}).to(".preimg3", {
    opacity: "100%",
    scale: 1,
    duration: .5 ,
    ease: "power2.out"   
  
}).to(".preimg1", {
    rotation: 0,
    duration: .5,
    ease: "power2.out"   
}, "same").to(".preimg2", {
    rotation: 0,
    duration: .5,
    ease: "power2.out"   
}, "same").to(".preimg3", {
    rotation: 0,
    duration: .5,
    ease: "power2.out"   
}, "same")
.to(".preimg1", {
    width: "33%",
    bottom: "0%",
    height: "60%",

    duration: .5,
    ease: "power2.out"   
}, "rotate").to(".preimg2", {
    width: "33%",
    height: "60%",
    bottom: "0%",

    duration: .5,
    ease: "power2.out"   
}, "rotate").to(".preimg3", {
    width: "33%",
    height: "60%",
    bottom: "0%",

    duration: .5,
    ease: "power2.out"   
}, "rotate")
.to(".preimg1", {
    left: "0%",
    duration: .5,
    ease: Power1.easeOut
}, "position")
.to(".preimg3", {
    right: "0%",
    duration: .5,
    ease: Power1.easeOut
}, "position")
.to(".preloader_wrapper", {
    opacity: 0,
    duration: .3,

}).to(".preloader_wrapper", {
    delay: .1,      
    display: "none",
}).fromTo(".nav-btn", {
    delay: .1,
    y: "-100px",
    duration: .5,
    ease: Power1.easeOut

},
{
    y: "0px",
    duration: .5,
    ease: Power1.easeOut

}, "slide")
.fromTo(".logo_img", {
    delay: .5,
    y: "-200px",
    duration: .5,
    ease: Power1.easeOut

},
{
    y: "0px",
    duration: .5,
    ease: Power1.easeOut

}, "slide")
.fromTo(".search", {
    delay: .5,
    y: "-100px",
    duration: .5,
    ease: Power1.easeOut

},
{
    y: "0px",
    duration: .5,
    ease: Power1.easeOut

}, "slide").fromTo(".person", {
    y: "-100px",
    duration: .5,
    ease: Power1.easeOut

},
{
    y: "0px",
    duration: .5,
    ease: Power1.easeOut

}, "slide").fromTo(".like", {
    y: "-100px",
    duration: .5,
    ease: Power1.easeOut

},
{
    y: "0px",
    duration: .5,
    ease: Power1.easeOut

}, "slide").fromTo(".bag", {
    y: "-100px",
    duration: .5,
    ease: Power1.easeOut

},
{
    y: "0px",
    duration: .5,
    ease: Power1.easeOut

}, "slide")
.fromTo(".h1_slide", {
    y: "-150px",
    duration: .5,
    ease: Power1.easeOut

},
{
    y: "0px",
    duration: .5,
    ease: Power1.easeOut

}, "title").fromTo(".h2_slide", {
    y: "-150px",
    duration: .7,
    ease: Power1.easeOut

},
{
    y: "0px",
    duration: .7,
    ease: Power1.easeOut

}, "title");

this.tl= new gsap.timeline({
    scrollTrigger: {
        trigger: ".head",
        start: "top top",
        end: "+=100",
        scrub: true,
    }
});
this.tl.to(".main__image", {
    height: "100%"
})

