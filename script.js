function smoothscroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".scrollcontainer"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".scrollcontainer", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".scrollcontainer").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

smoothscroll();

let tl = gsap.timeline();

tl.from(".main-text h1 span", {
  x: () => gsap.utils.random(-300, 300),
  y: () => gsap.utils.random(-300, 300),
  rotation: () => gsap.utils.random(-180, 180),
  opacity: 0,
  scale: 0.5,
  stagger: 0.12,
  duration: 1.5,
  ease: "power4.out",
  delay: 0.3,
});

tl.from(
  ".main-text h3 span",
  {
    scale: 0,
    rotation: 360,
    opacity: 0,
    stagger: 0.08,
    duration: 0.6,
    ease: "back.out(2)",
  },
  "-=0.9"
);

gsap.to(".story-head h1", {
  y: 0,
  duration: 1.2,
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".story-head",
    scroller: ".scrollcontainer",
    start: "top 78%",
    toggleActions: "play none none none",
  },
});

gsap.to(".story .underline", {
  width: "55vw",
  duration: 0.7,
  ease: "linear",
  scrollTrigger: {
    trigger: ".story .underline",
    scroller: ".scrollcontainer",
    start: "top 78%",
    toggleActions: "play none none none",
  },
});

gsap.utils.toArray(".masked-para").forEach((para, i) => {
  gsap.to(para, {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: para,
      scroller: ".scrollcontainer",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  });
});

gsap.to(".vision-head h1", {
  y: 0,
  duration: 1.2,
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".vision-head",
    scroller: ".scrollcontainer",
    start: "top 78%",
    toggleActions: "play none none none",
  },
});

gsap.to(".vision .underline", {
  width: "55vw",
  duration: 0.7,
  ease: "linear",
  scrollTrigger: {
    trigger: ".vision .underline",
    scroller: ".scrollcontainer",
    start: "top 78%",
    toggleActions: "play none none none",
  },
});

gsap.utils.toArray(".vision-line").forEach((line) => {
  gsap.fromTo(
    line,
    {
      y: -35, // comes from higher up
      opacity: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", // top clipped
    },
    {
      y: 0,
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: line,
        scroller: ".scrollcontainer",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
});

gsap.to(".vision-image", {
  height: "55vh",
  duration: 0.8,
  ease: "linear",
  scrollTrigger: {
    trigger: ".vision-image",
    scroller: ".scrollcontainer",
    start: "top 60%",
    end: "top -40%",
  },
});

gsap.to(".about-head h1", {
  y: 0,
  duration: 1.2,
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".about-head",
    scroller: ".scrollcontainer",
    start: "top 78%",
    toggleActions: "play none none none",
  },
});

gsap.to(".about-us .underline", {
  width: "55vw",
  duration: 0.7,
  ease: "linear",
  scrollTrigger: {
    trigger: ".about-us .underline",
    scroller: ".scrollcontainer",
    start: "top 78%",
    toggleActions: "play none none none",
  },
});

gsap.to(".about-us h2 span", {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power3.out",
  stagger: 0.08,
  scrollTrigger: {
    trigger: ".about-text",
    scroller: ".scrollcontainer",
    start: "top 80%", 
    toggleActions: "play none none none",
  },
});

gsap.to(".footer-head h1", {
  y: 0,
  duration: 1.2,
  ease: "expo.out",
  scrollTrigger: {
    trigger: ".footer-head",
    scroller: ".scrollcontainer",
    start: "top 78%",
    toggleActions: "play none none none",
  },
});

gsap.to(".footer .underline", {
  width: "61vw",
  duration: 0.7,
  ease: "linear",
  scrollTrigger: {
    trigger: ".footer .underline",
    scroller: ".scrollcontainer",
    start: "top 78%",
    toggleActions: "play none none none",
  },
});

gsap.to(".storyimage", {
  height: "83vh",
  duration: 1,
  ease: "linear",
  scrollTrigger: {
    trigger: ".storyimage",
    scroller: ".scrollcontainer",
    start: "top 50%",
    end: "top -40%",
  },
});

gsap.to(".banner .left, .banner .right", {
  width: "50%",
  duration: 1.5,
  ease: "linear", 
  scrollTrigger: {
    trigger: ".banner",
    scroller: ".scrollcontainer",
    // markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  }
})