/**
 * File: script.js
 * Description: Javascript for managing dynamic Single
 *  page application.
 * Author: Noah Larchick
 * Date (created): 11/27/2024
 * Date (curr): 11/27/2024
 */

document.addEventListener("DOMContentLoaded", () => {
    makeInvis(document.querySelector(".heading"))
    loadPage('home')
});

function makeInvis(header) {
  const handleScroll = () => {
    if (window.scrollY < 50) {
        header.classList.add("transparent");
    } else {
        header.classList.remove("transparent");
    }
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();
}

function loadPage(pageName) {
  fetch(`${pageName}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('content').innerHTML = data;
    })
    .catch(error => {
      console.error(`Could not fetch ${pageName}.html...`, error);
  });
}

document.getElementById('load-home').addEventListener('click', function(event) {
  event.preventDefault();
  const pageName = 'home';
  loadPage(pageName);
  window.history.pushState({}, '', this.getAttribute('href'));
});

document.getElementById('load-about').addEventListener('click', function(event) {
  event.preventDefault();
  const pageName = this.getAttribute('href').substring(1);
  loadPage(pageName);
  window.history.pushState({}, '', this.getAttribute('href'));
});

document.getElementById('load-media').addEventListener('click', function(event) {
  event.preventDefault();
  const pageName = this.getAttribute('href').substring(1);
  loadPage(pageName);
  window.history.pushState({}, '', this.getAttribute('href'));
});

document.getElementById('load-sources').addEventListener('click', function(event) {
  event.preventDefault();
  const pageName = this.getAttribute('href').substring(1);
  loadPage(pageName);
  window.history.pushState({}, '', this.getAttribute('href'));
});