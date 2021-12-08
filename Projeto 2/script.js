var slideIndex = 0;
Slides();

function Slides() {
  var i;
  var slides = document.getElementsByClassName("carrossel");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(Slides, 2500);
}
