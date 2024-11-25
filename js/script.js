document.querySelector('.more-btn').addEventListener('click', function() {
    alert('Переход на страницу с подробной информацией');
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.left = i === index ? '0' : '100%';
    });
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // смена слайдов каждые 3 секунды
