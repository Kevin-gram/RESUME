document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const menuList = document.getElementById("menu-list");

    // Add a click event listener to the menu icon
    menuIcon.addEventListener("click", function () {
        // Hide the menu icon
        menuIcon.classList.add("hide");
        // Show the menu list
        menuList.classList.add("show");
    });

    // Add a click event listener to the menu list
    menuList.addEventListener("click", function () {
        // Hide the menu list
        menuList.classList.remove("show");
        // Show the menu icon
        menuIcon.classList.remove("hide");
    });

    // Add a scroll event listener to hide the menu list and show the menu icon
    window.addEventListener("scroll", function () {
        // Hide the menu list
        menuList.classList.remove("show");
        // Show the menu icon
        menuIcon.classList.remove("hide");
    });
});
