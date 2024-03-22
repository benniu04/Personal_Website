document.addEventListener("DOMContentLoaded", function() {
  // Initialize progress and select DOM elements
  let progress = 0;
  const progressBar = document.getElementById("progressbar");
  const percentageDisplay = document.getElementById("percentage");
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  // Ensure all elements exist
  if (progressBar && percentageDisplay && preloader && content) {
      // Start an interval to simulate loading progress
      let interval = setInterval(function() {
          progress += 1;
          progressBar.style.width = progress + "%";
          percentageDisplay.textContent = progress + "%";

          // Once progress reaches 100%, clear the interval and start hiding the preloader
          if (progress >= 100) {
              clearInterval(interval);

              // Begin fade out animation for preloader
              preloader.style.opacity = '0';

              // Wait for the fade out animation to finish before changing display properties
              setTimeout(() => {
                  preloader.style.display = "none";

                  // Ensure content is initially invisible for smooth transition
                  content.style.display = "block";
                  content.style.opacity = '0';

                  // Slightly delay opacity transition for content to ensure it has 'display: block' first
                  setTimeout(() => content.style.opacity = '1', 50); // Start fade in animation for content
              }, 500); // This duration should match the CSS transition time for opacity
          }
      }, 50); // Adjust the interval duration to control the speed of progress
  }
});
