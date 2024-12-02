/**
 * File: script.js
 * Description: Javascript for managing dynamic Single
 *  page application.
 * Author: Noah Larchick
 * Date (created): 11/27/2024
 * Date (curr): 11/27/2024
 */

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".heading");

    const handleScroll = () => {
        if (window.scrollY < 50) {
            header.classList.add("transparent");
        } else {
            header.classList.remove("transparent");
        }
    };

    window.addEventListener("scroll", handleScroll);

    // Run the function on page load
    handleScroll();
});