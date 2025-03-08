document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const dots = document.querySelectorAll('.dot');
    let index = 0;
    const totalSlides = track.children.length;
    let autoSlide;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    // Auto-slide toutes les 3 secondes
    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            index = i;
            updateCarousel();
            startAutoSlide();
        });
    });

    updateCarousel();
    startAutoSlide();
});
