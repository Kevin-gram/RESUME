document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const menuList = document.getElementById("menu-list");

    // Add a click event listener to the menu icon
    menuIcon.addEventListener("click", function () {
        // Toggle the "show" class on the menu list to display or hide it
        menuList.classList.toggle("show");
    });
});
