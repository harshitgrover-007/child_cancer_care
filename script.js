// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  function adjustTextSize() {
    const textContainer = document.querySelector('.text');
    const circle = document.querySelector('.circle');
    const circleWidth = circle.offsetWidth;
    const textWidth = textContainer.offsetWidth;
  
    if (textWidth > circleWidth) {
      const scaleFactor = circleWidth / textWidth;
      textContainer.style.transform = `rotate(-90deg) scale(${scaleFactor})`;
    }
  }
  
  window.addEventListener('resize', adjustTextSize);
  adjustTextSize();
  
  
  
  

  