const prev = document.getElementById('prev');
const next = document.getElementById('next');
const tContainer = document.getElementById('testimonials-container');
const testimonialOne = document.getElementById('testimonial-1');

// Slide to the next card
const nextCard = () => {
  testimonialOne.style.transform = `translateX(-100%)`;
}

// Slide back to the previous card
const prevCard = () => {
  testimonialOne.style.transform = `translateX(0rem)`;
}

// EVENT LISTENER //

// Slide with Click 
next.addEventListener('click', () => {
  nextCard();
})

prev.addEventListener('click', () => {
  prevCard();
})

// Slide with keyboard arrow keys
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') {
    prevCard();
  } else if (e.key === 'ArrowRight') {
    nextCard();
  }
});

// Slide with swipe on touch screen
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].pageX;
  swipe();
});

document.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].pageX;
  swipe();
});

const swipe = () => {
  if (touchEndX < touchStartX) {
    nextCard();
  } else if (touchEndX > touchStartX) {
    prevCard();
  }
}

// Slide with trackpad swiping
document.addEventListener('wheel', e => {
  if (e.deltaX < 0) {
    prevCard();
  } else if (e.deltaX > 0) {
    nextCard();
  }
});