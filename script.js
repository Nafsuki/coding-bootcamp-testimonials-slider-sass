const prev = document.getElementById('prev');
const next = document.getElementById('next');
const tContainer = document.getElementById('testimonials-container');
const testimonialOne = document.getElementById('testimonial-1');

const nextCard = () => {
  testimonialOne.style.transform = `translateX(-100%)`;
}

const prevCard = () => {
  testimonialOne.style.transform = `translateX(0rem)`;
}

// Event listener
next.addEventListener('click', () => {
  nextCard();
})

prev.addEventListener('click', () => {
  prevCard();
})