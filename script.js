// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const href = this.getAttribute("href");
    
    // Only smooth scroll if it's a valid internal ID (e.g., #home, not just # or a full URL)
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Typing effect
  const text = "Hi I'm, Bhoomi Jain";
  const typingText = document.querySelector(".typing-text");
  let index = 0;

  if (typingText) {
    function type() {
      if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }
    type();
  }

  // AI Bot Logic
  const botBubble = document.getElementById('bot-bubble');
  const botPanel = document.getElementById('bot-panel');
  const chatClaude = document.getElementById('chat-claude');
  const chatGpt = document.getElementById('chat-gpt');

  if (botBubble && botPanel) {
    botBubble.addEventListener('click', () => {
      const isVisible = botPanel.style.display === 'block';
      botPanel.style.display = isVisible ? 'none' : 'block';
    });

    // Close panel when clicking outside
    document.addEventListener('click', (e) => {
      if (!botBubble.contains(e.target) && !botPanel.contains(e.target)) {
        botPanel.style.display = 'none';
      }
    });

    const bhoomiContext = `Visit https://bhoomij256.github.io/My-Portfolio/ and tell me about Bhoomi Jain — her experience, what she's built, and what she's working on. Be direct and concise.`;

    const encodedContext = encodeURIComponent(bhoomiContext.trim());

    if (chatClaude) chatClaude.href = `https://claude.ai/new?q=${encodedContext}`;
    if (chatGpt) chatGpt.href = `https://chatgpt.com/?q=${encodedContext}`;
  }
});

// Toggle Experience Details
function toggleDetails(button) {
  const content = button.previousElementSibling;
  const icon = button.querySelector('i');
  
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    button.classList.remove('active');
    button.innerHTML = 'Details <i class="fas fa-chevron-down"></i>';
  } else {
    content.classList.add('expanded');
    button.classList.add('active');
    button.innerHTML = 'Close <i class="fas fa-chevron-up"></i>';
  }
}

// Back to Top Logic
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('is-active');
    
    // Animate bars
    const bars = menuToggle.querySelectorAll('.bar');
    if (menuToggle.classList.contains('is-active')) {
      bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
      bars[0].style.transform = 'none';
      bars[1].style.opacity = '1';
      bars[2].style.transform = 'none';
    }
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('is-active');
      const bars = menuToggle.querySelectorAll('.bar');
      bars[0].style.transform = 'none';
      bars[1].style.opacity = '1';
      bars[2].style.transform = 'none';
    });
  });
}
