function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".section").forEach(function (section) {
    section.classList.add("d-none");
  });

  // Remove active class from all tabs
  document.querySelectorAll(".nav-link").forEach(function (tab) {
    tab.classList.remove("active");
  });

  // Show the clicked section
  document.getElementById(sectionId + "-section").classList.remove("d-none");

  // Add active class to the clicked tab
  document.getElementById(sectionId + "-tab").classList.add("active");
}
