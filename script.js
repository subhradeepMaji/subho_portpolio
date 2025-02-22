// // Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Back to Top Button
  const backToTopButton = document.createElement('button');
  backToTopButton.innerHTML = '↑';
  backToTopButton.classList.add('back-to-top');
  document.body.appendChild(backToTopButton);
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  // Typing Animation for Header Tagline
  const tagline = document.querySelector('header p');
  const text = tagline.textContent;
  tagline.textContent = '';
  
  let index = 0;
  const typingSpeed = 100; // Adjust typing speed (in milliseconds)
  
  function type() {
    if (index < text.length) {
      tagline.textContent += text.charAt(index);
      index++;
      setTimeout(type, typingSpeed);
    }
  }
  
  type();