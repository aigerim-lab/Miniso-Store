function toggleBio(bioId, button) {
    const bioDetails = document.getElementById(bioId);
    bioDetails.classList.toggle('expanded');
    button.classList.toggle('expanded');
  }
  
  document.addEventListener('keydown', function (event) {
    const navLinks = document.querySelectorAll('.navbar-nav2 .nav-link');
    const currentIndex = Array.from(navLinks).indexOf(document.activeElement);
  
    if (event.key === 'ArrowRight') {
        // Move focus to the next item
        const nextIndex = (currentIndex + 1) % navLinks.length;
        navLinks[nextIndex].focus();
        navLinks[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        event.preventDefault();
    } else if (event.key === 'ArrowLeft') {
        // Move focus to the previous item
        const prevIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
        navLinks[prevIndex].focus();
        navLinks[prevIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        event.preventDefault();
    }
  });