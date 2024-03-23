// Smooth scroll to the "Experience" section
function scrollToExperience() {
  const desiredLocation = document.getElementById('cont');
  if (desiredLocation) {
      desiredLocation.scrollIntoView({ behavior: "smooth" });
  }
}

window.scrollToExperience = scrollToExperience

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

window.scrollToAbout = scrollToAbout

// Smooth scroll to the "Contact" section
function scrollToContact() {
  const contactDesire = document.getElementById('content3');
  if (contactDesire) {
      contactDesire.scrollIntoView({ behavior: "smooth" });
  }
}

window.scrollToContact = scrollToContact

// A function that combines scrolling to the "Experience" section and highlighting
function call(element) {
  scrollToExperience();
  highlightText(element);
}

window.call = call

// Function wrappers to scroll to specific sections
function call1() {
  scrollToAbout();
}

window.call1 = call1

function call2() {
  scrollToContact();
}

window.call2 = call2
