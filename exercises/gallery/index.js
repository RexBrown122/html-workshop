/**
 * Simple Gallery
 *
 * Implement a slideshow gallery that can display images one at a time with a caption.
 * Users should be able to move the slides forward manually.
 *
 * OPTIONAL: Make the slideshow automatically play a new image every 3 seconds.
 */
 var slideIndex = 1;
//  showSlides(slideIndex);
 
 // Next/previous controls
 const plusSlides = (n) => {
   showSlides(slideIndex += n);
 }
 
 // Thumbnail image controls
 const currentSlide = (n) => {
   showSlides(slideIndex = n);
 }
 
 const showSlides = (n) => {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");

   if (n > slides.length) {
       slideIndex = 1
    }

   if (n < 1) {
       slideIndex = slides.length
    }

   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }
   
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
 }

 showSlides(slideIndex);