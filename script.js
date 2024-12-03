/**
 * File: script.js
 * Description: Javascript for managing dynamic Single
 *  page application.
 * Author: Noah Larchick
 * Date (created): 11/27/2024
 * Date (curr): 11/27/2024
 */

function loadContent(file) {
    const container = document.getElementById("content-container");
  
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(htmlContent => {
        container.innerHTML = htmlContent;
      })
      .catch(error => {
        console.error("Error loading content:", error);
        container.innerHTML = "<p>Failed to load content.</p>";
      });
  }

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

    loadContent("home.html");

    document.getElementById("load-home").addEventListener("click", () => {
        loadContent("home.html");
    });

    document.getElementById("load-favorites").addEventListener("click", () => {
        loadContent("favorites.html");
    });

    document.getElementById("load-history").addEventListener("click", () => {
        loadContent("history.html");
    });

    document.getElementById("load-citations").addEventListener("click", () => {
        loadContent("citations.html");
    });
});