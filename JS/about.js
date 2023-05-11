const aboutLink = document.querySelector('.nav-link[href="#about"]');
aboutLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default behavior of the link
  const offcanvas = document.querySelector('.offcanvas');
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  offcanvas.classList.remove('show'); // Close the offcanvas menu
  const targetOffset = document.body.scrollHeight - window.innerHeight;
  window.scrollTo({ top: targetOffset, behavior: 'smooth' }); // Smoothly scroll the page to the bottom
});
