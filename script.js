// Animate heading
anime({
  targets: 'h1.text-4xl',
  translateY: [0, -10],
  duration: 2000,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine'
});


// Animate profile image
// anime({
//   targets: '.picture',
//   scale: [0.8, 1],
//   opacity: [0, 1],
//   duration: 1000,
//   delay: 400,
//   easing: 'easeOutBack'
// });
anime({
  targets: '.picture',
  scale: [0.95, 1],
  easing: 'easeInOutSine',
  duration: 1000,
  direction: 'alternate',
  loop: true
});


// Animate sections with staggered reveal
anime({
  targets: 'section',
  opacity: [0, 1],
  translateY: [20, 0],
  duration: 800,
  delay: anime.stagger(150, { start: 600 }),
  easing: 'easeOutCubic'
});


anime({
  targets: '.section-title',
  opacity: [0, 1],
  translateX: [-100, 0],
  delay: anime.stagger(100),
  duration: 800,
  easing: 'easeOutExpo'
});

anime({
  targets: 'tbody tr td',
  opacity: [0, 1],
  translateX: [-80, 0],
  delay: anime.stagger(300),
  duration: 1500,
  easing: 'easeOutElastic(1, .6)' // Bouncy finish for flair
});


 const jobText = "Anstellung als Junior-Fachinformatiker Fachrichtung: Anwendungsentwicklung";

  let i = 0;
  // const speed = 75; // typing speed in ms
  const speed = 55; // typing speed in ms
  function typeWriter() {
    if (i < jobText.length) {
      document.getElementById("jobTitle").innerHTML += jobText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  window.addEventListener('load', typeWriter);
  console.log("typing speed: ", speed);