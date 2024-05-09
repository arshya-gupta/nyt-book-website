document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            if (idx === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    showSlide(currentSlide);

    document.querySelector('.next').addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    document.querySelector('.prev').addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    const imageSelector = document.getElementById('imageSelector');
    const selectedImage = document.getElementById('selectedImage');
    const imageContainer = document.querySelector('.image-container');

    imageSelector.addEventListener('change', function () {
        const selectedOption = imageSelector.options[imageSelector.selectedIndex];
        const imageUrl = selectedOption.value;

        if (imageUrl) {
            selectedImage.src = imageUrl;
            imageContainer.style.display = 'block'; // Show the image container
        } else {
            imageContainer.style.display = 'none'; // Hide the image container if no image is selected
        }
    });
});

