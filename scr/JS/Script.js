const title = document.getElementsByTagName("title");
// const menu_list = document.querySelector(".menu-list");
// Get the menu button and the navigation list
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementsByClassName('menu-list');

// Add a click event listener to the menu button
menuToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the nav list
    navList.classList.toggle('active');
});

// Arrey that use in the exersice.html
