let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const indicatorsContainer = document.querySelector(".indicators");
slides.forEach((_, i) => {
    const indicator = document.createElement("span");
    indicator.dataset.index = i;
    indicator.addEventListener("click", () => goToSlide(i));
    indicatorsContainer.appendChild(indicator);
});
const indicators = document.querySelectorAll(".indicators span");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        indicators[i].classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
            indicators[i].classList.add("active");
            if (slide.tagName === "VIDEO") {
                slide.play();
            } else {
                slides.forEach(s => { if (s.tagName === "VIDEO") s.pause(); });
            }
        }
    });
}

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
}

function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

showSlide(currentIndex);
