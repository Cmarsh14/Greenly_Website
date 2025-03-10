// JavaScript for Quiz Button
document.getElementById('quiz-button').addEventListener('click', function() {
    alert('Welcome to the Gardening Quiz!');
});

// JavaScript for Carousel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.display = 'block';
}

setInterval(showNextImage, 3000);

// Initially display the first image
images[currentIndex].style.display = 'block';