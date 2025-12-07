let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    showSlides(true);
}

function showSlides(manual = false) {
    const imageSlide = document.getElementsByClassName("image-slide");
    const detialSLide = document.getElementsByClassName("detail-slide");

    for (let i = 0; i < imageSlide.length; i++) {
        imageSlide[i].style.display = "none";
    }
    for (let i = 0; i < detialSLide.length; i++) {
        detialSLide[i].style.display = "none";
    }

    if (!manual) slideIndex++; // Only auto-increment when NOT clicked manually
    if (slideIndex > imageSlide.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = imageSlide.length;

    imageSlide[slideIndex - 1].style.display = "block";
    detialSLide[slideIndex - 1].style.display = "flex";

    if (!manual) setTimeout(showSlides, 5000);
}
