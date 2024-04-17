document.addEventListener('DOMContentLoaded', function() {
        var currentIndex = 0;
        var slides = document.querySelectorAll('.slide');
        var totalSlides = slides.length;
      
        function showSlide(index) {
          slides.forEach(function(slide, i) {
            if (i === index) {
              slide.style.opacity = 1;
            } else {
              slide.style.opacity = 0;
            }
          });
        }
      
        function nextSlide() {
          currentIndex = (currentIndex + 1) % totalSlides;
          showSlide(currentIndex);
      
          if (currentIndex === 0) {
            setTimeout(function() {
              showSlide(0);
            }, 500);
          }
        }
      
        
        setInterval(nextSlide, 3000);
      
        
        showSlide(currentIndex);
      });
      