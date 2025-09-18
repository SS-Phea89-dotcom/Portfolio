const title = document.getElementsByTagName("title");
const menu_list = document.querySelector(".menu-list");



// 1. Create the media query object
const mediaQuery = window.matchMedia('(max-width: 432px)');

// 2. Create a function to handle the change
function handleScreenChange(e) {
  // e.matches will be true if the media query is met
  if (e.matches) {
    // Viewport is 432px or less
    // title[0].innerText = "Mobile Mode | Mobile";
    menu_list.style.display = "none";
  } else {
    // Viewport is wider than 432px
    menu_list.style.display = "flex";
    title[0].innerText = "Desktop Mode | Home";
    
  }
}

// 3. Register the event listener
mediaQuery.addEventListener('change', handleScreenChange);

// Optional: Run the function once on page load to set the initial state
handleScreenChange(mediaQuery);
