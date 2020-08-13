   <script>
      var slides = document.querySelectorAll('#slides .slide');
      var currentSlide = 0;
      var slideInterval = setInterval(nextSlide,3000);
      
      function nextSlide() {
          slides[currentSlide].className = 'slide';
          currentSlide = (currentSlide+1)%slides.length;
          slides[currentSlide].className = 'slide showing';
      }
      
      
   </script>

      var slideIndex = 1;
      showSlides(slideIndex);
      
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("gallery_mySlides");
        var dots = document.getElementsByClassName("gallery_demo");
        var captionText = document.getElementById("gallery_caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
      }
