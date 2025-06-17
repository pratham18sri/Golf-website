var crsr=document.querySelector("#cursor")
var crsrback=document.querySelector("#cursor-blur")
// document.addEventListener("mousemove",function(dets){
//     crsr.style.left=dets.x+"px"
//     crsr.style.top=dets.y+"px"
//     crsrback.style.left=dets.x-50+"px"
//     crsrback.style.top=dets.y-50+"px"
// })
gsap.to("#nav",{
    backgroundColor: "#000",
    heigth: "100px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller:"body",
        // markers: true,
        start: "top top",
        end: "100px top",
        scrub: 1,
    }
})



gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller:"body",
        // markers: true,
        start: "top -50%",
        end: "top -80%",
        scrub: 3,
    }
})

gsap.to('#about-us img','#about-us-in', {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 60%",
    end: "top 50%",
    scrub: 3
  }
});

