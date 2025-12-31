"use strict";

// const targets = document.querySelectorAll('.text-4-1');
// window.addEventListener('scroll', () => {
//   targets.forEach(el => {
//     const rect = el.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;
//     if (rect < windowHeight * 0.8){
//       el.classList.add('fade');
//     }
//   });
// });

const targets = document.querySelectorAll('.js-scroll');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

targets.forEach(el => observer.observe(el));
