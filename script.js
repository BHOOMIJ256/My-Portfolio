// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Typing effect
  const text = "Hi I'm,  Bhoomi Jain";
  const typingText = document.querySelector(".typing-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();

  // Set "Welcome!" text
  const typeText = document.querySelector(".type-text");
  if (typeText) {
    typeText.textContent = "Welcome!";
  } else {
    console.warn("Element with class .type-text not found.");
  }
});
