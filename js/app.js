import { TimelineLite, TweenLite, Power1 } from "gsap";

const flightPath = {
  curvinness: 3.25,
  autoRotate: true,
  values: [
    {
      x: 100,
      y: -20
    },
    {
      x: 400,
      y: 0
    },
    {
      x: 700,
      y: -250
    },
    {
      x: 200,
      y: -20
    },
    {
      x: 1000,
      y: -300
    }
    // {
    //   x: window.innerWidth,
    //   y: -250
    // }
  ]
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".paper-plane", 1, {
    bezier: flightPath,
    ease: Power1.easeInOut
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation",
  duration: 1000,
  triggerHook: 0
})
  .addIndicators()
  .setPin(".animation")
  .addTo(controller)
  .setTween(tween);
