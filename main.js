// Smooth scroll to the "Experience" section
function scrollToExperience() {
  const desiredLocation = document.getElementById('cont');
  if (desiredLocation) {
      desiredLocation.scrollIntoView({ behavior: "smooth" });
  }
}

// Highlight the clicked element and remove highlight from others
function highlightText(element) {
  // Query all elements with the class 'highlightable' and remove 'highlighted' class
  document.querySelectorAll('.highlightable').forEach(el => {
      el.classList.remove('highlighted');
  });

  // Add the 'highlighted' class to the clicked element, if it exists
  if (element) {
      element.classList.add('highlighted');
  }
}

// Smooth scroll to the "About" section
function scrollToAbout() {
  const aboutDesire = document.getElementById('content2');
  if (aboutDesire) {
      aboutDesire.scrollIntoView({ behavior: "smooth" });
  }
}

// Smooth scroll to the "Contact" section
function scrollToContact() {
  const contactDesire = document.getElementById('content3');
  if (contactDesire) {
      contactDesire.scrollIntoView({ behavior: "smooth" });
  }
}

// A function that combines scrolling to the "Experience" section and highlighting
function call(element) {
  scrollToExperience();
  highlightText(element);
}

// Function wrappers to scroll to specific sections
function call1() {
  scrollToAbout();
}

function call2() {
  scrollToContact();
}
