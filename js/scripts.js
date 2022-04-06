// GSAP included in `index.html`
console.log("(＾• ω •＾)");

gsap.to("#tail-1", {
  y: -5,
  rotation: (10, 10, 10),
  duration: 2,
  repeat: -1,
  yoyo: true,
  transformOrigin: "50%"
});

gsap.to("#tail-2", {
  x: -5,
  rotation: 3,
  duration: 1.75,
  repeat: -1,
  yoyo: true,
  transformOrigin: "50%"
});

gsap.to("#yarn", {
  x: 10,
  rotation: (10, 10, 10),
  duration: 3,
  repeat: -1,
  yoyo: true,
  transformOrigin: "50%",
  ease: "power2.out"
});
