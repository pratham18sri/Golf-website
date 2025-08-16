document.addEventListener("DOMContentLoaded", function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");
  
  mobileMenuBtn.addEventListener("click", function() {
      mobileMenu.classList.add("active");
      document.body.style.overflow = "hidden";
  });
  
  closeMenu.addEventListener("click", function() {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "auto";
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  
  // Arrow down click event
  const arrowDown = document.getElementById("arrow-down");
  if (arrowDown) {
      arrowDown.addEventListener("click", function() {
          document.getElementById("page2").scrollIntoView({
              behavior: 'smooth'
          });
      });
  }
  
  // Cursor effects
  const cursor = document.getElementById("cursor");
  const cursorBlur = document.getElementById("cursor-blur");
  
  document.addEventListener("mousemove", function(dets) {
      cursor.style.left = dets.x + "px";
      cursor.style.top = dets.y + "px";
      cursorBlur.style.left = dets.x - 150 + "px";
      cursorBlur.style.top = dets.y - 150 + "px";
  });
  
  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);
  
  // Navbar animation on scroll
  gsap.to("#nav", {
      backgroundColor: "#000",
      height: "80px",
      duration: 0.5,
      scrollTrigger: {
          trigger: "#nav",
          scroller: "body",
          start: "top -10%",
          end: "top -11%",
          scrub: 1,
      }
  });
  
  // Logo scale animation on scroll
  gsap.to("#nav-img", {
      scale: 0.8,
      scrollTrigger: {
          trigger: "#nav",
          scroller: "body",
          start: "top -10%",
          end: "top -11%",
          scrub: 1,
      }
  });
  
  // Page 1 animations
  gsap.from("#page1 h1", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5
  });
  
  gsap.from("#page1 h2", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 1
  });
  
  gsap.from("#page1 p", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 1.5
  });
  
  gsap.from("#arrow-down", {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 2,
      ease: "power2.out"
  });
  
  // Scroller animation
  const scroller = document.querySelector("#scroller");
  const scrollerInner = document.querySelector("#scroller-in");
  
  // Duplicate the content for seamless looping
  scrollerInner.innerHTML += scrollerInner.innerHTML;
  
  function animateScroller() {
      if (scroller.scrollLeft >= scrollerInner.scrollWidth / 2) {
          scroller.scrollLeft = 0;
      } else {
          scroller.scrollLeft += 1;
      }
      requestAnimationFrame(animateScroller);
  }
  
  // Start the animation
  animateScroller();
  
  // About Us animations
  gsap.from("#about-us img", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
          trigger: "#about-us",
          scroller: "body",
          start: "top 70%",
          end: "top 50%",
          scrub: 1
      }
  });
  
  gsap.from("#about-us-in", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
          trigger: "#about-us",
          scroller: "body",
          start: "top 70%",
          end: "top 50%",
          scrub: 1
      }
  });
  
  // Cards animations
  gsap.from(".card", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
          trigger: "#cards-container",
          scroller: "body",
          start: "top 80%",
          end: "top 60%",
          scrub: 1
      }
  });
  
  // Green div animation
  gsap.from("#green-div", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
          trigger: "#green-div",
          scroller: "body",
          start: "top 80%",
          end: "top 70%",
          scrub: 1
      }
  });
  
  // Page 5 animations
  gsap.from("#page5 img", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
          trigger: "#page5",
          scroller: "body",
          start: "top 80%",
          end: "top 70%",
          scrub: 1
      }
  });
  
  gsap.from("#page5-content", {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
          trigger: "#page5",
          scroller: "body",
          start: "top 80%",
          end: "top 70%",
          scrub: 1
      }
  });
  
  // Testimonial animation
  gsap.from("#testimonial", {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
          trigger: "#page3",
          scroller: "body",
          start: "top 80%",
          end: "top 70%",
          scrub: 1
      }
  });
  
  // Quote marks animation
  gsap.from("#quote-left", {
      x: -50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
          trigger: "#page3",
          scroller: "body",
          start: "top 80%",
          end: "top 70%",
          scrub: 1
      }
  });
  
  gsap.from("#quote-right", {
      x: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
          trigger: "#page3",
          scroller: "body",
          start: "top 80%",
          end: "top 70%",
          scrub: 1
      }
  });
  
  // Page 4 animations
  gsap.from("#page4 h1", {
      y: -50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
          trigger: "#page4",
          scroller: "body",
          start: "top 90%",
          end: "top 80%",
          scrub: 1
      }
  });
  
  gsap.from(".elem", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
          trigger: "#page4",
          scroller: "body",
          start: "top 80%",
          end: "top 60%",
          scrub: 1
      }
  });
  
  // Footer animation
  gsap.from("#footer", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
          trigger: "#footer",
          scroller: "body",
          start: "top 90%",
          end: "top 80%",
          scrub: 1
      }
  });
  
  // Hover effects for cards
  document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("mouseenter", () => {
          gsap.to(card, {
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out"
          });
      });
      
      card.addEventListener("mouseleave", () => {
          gsap.to(card, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
          });
      });
  });
  
  // Hover effects for navigation items
  document.querySelectorAll("#nav h4").forEach(item => {
      item.addEventListener("mouseenter", () => {
          gsap.to(cursor, {
              scale: 3,
              backgroundColor: "#95C11E",
              duration: 0.3
          });
      });
      
      item.addEventListener("mouseleave", () => {
          gsap.to(cursor, {
              scale: 1,
              backgroundColor: "#95C11E",
              duration: 0.3
          });
      });
  });
  
  // Hover effects for buttons
  document.querySelectorAll(".cta-button").forEach(button => {
      button.addEventListener("mouseenter", () => {
          gsap.to(cursor, {
              scale: 4,
              backgroundColor: "#000",
              duration: 0.3
          });
      });
      
      button.addEventListener("mouseleave", () => {
          gsap.to(cursor, {
              scale: 1,
              backgroundColor: "#95C11E",
              duration: 0.3
          });
      });
  });
  
  // Responsive adjustments
  function handleResize() {
      if (window.innerWidth < 992) {
          // Tablet and mobile adjustments
          gsap.set("#green-div img", { display: "none" });
      } else {
          // Desktop adjustments
          gsap.set("#green-div img", { display: "block" });
      }
  }
  
  window.addEventListener("resize", handleResize);
  handleResize(); // Initial check
});
