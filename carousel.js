document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    document.querySelector('.carousel-next').addEventListener('click', () => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalSlides;
        slides[currentIndex].classList.add('active');
        updateCarousel();
    });

    document.querySelector('.carousel-prev').addEventListener('click', () => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        slides[currentIndex].classList.add('active');
        updateCarousel();
    });

    function updateCarousel() {
        const container = document.querySelector('.carousel-container');
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});
