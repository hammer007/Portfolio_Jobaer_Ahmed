document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetSectionId = link.getAttribute("href");
            const targetSection = document.querySelector(targetSectionId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Image slideshow
    const slideshowImages = [
        "images/landingPage/jobaer-ahmed-cover.jpg",
        "images/landingPage/jobaer-logo.png",
        "images/landingPage/jubuLightHouse.jpg"
    ];

    const slideshow = document.getElementById("slideshow");
    let currentIndex = 0;

    function changeSlide() {
        slideshow.src = slideshowImages[currentIndex];
        currentIndex = (currentIndex + 1) % slideshowImages.length;
    }

    setInterval(changeSlide, 3000); // Change image every 3 seconds
});

