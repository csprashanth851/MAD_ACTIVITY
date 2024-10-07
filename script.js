let currentSlide = 1;
const totalSlides = 6;

document.addEventListener('DOMContentLoaded', function () {
    showSlide(currentSlide);
});

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n - 1].classList.add('active');

    document.getElementById('prevBtn').disabled = n === 1;
    document.getElementById('nextBtn').disabled = n === totalSlides;
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        showSlide(currentSlide);
    }
}
