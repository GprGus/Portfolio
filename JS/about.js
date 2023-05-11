document.addEventListener('DOMContentLoaded', function() {
  const aboutLink = document.querySelector('a[href="#about"]');
  aboutLink.addEventListener('click', function() {
      const offcanvas = document.querySelector('.offcanvas');
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      offcanvasInstance.hide();
  });
});