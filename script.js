function toggleMenu() {
    const drawer = document.getElementById('drawer');
    drawer.classList.toggle('open');
  }

  function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    toggleMenu(); // Close menu after navigation
  }

  function togglePopup(element) {
    element.classList.toggle('expanded');
  }