let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
} 

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  //use for loop to loop through each slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // console.log(slides);
    // console.log(dots);

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    //accessing first image index = 0
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // to change image every 2 seconds.
    //console.log(slides[i]);
  }
}

showSlides(slideIndex);
