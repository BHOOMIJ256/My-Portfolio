// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
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

    const bhoomiContext = `
        You are an AI assistant representing Bhoomi Jain. Use the following details to answer questions about her:
        - Identity: 3rd-year Data Science student at R.A. Podar College (CGPA 10/10). AI Engineer & Data Scientist.
        - Experience:
          1. Hrita Solutions (Current): Built role-based CRM (React/Firebase) and automated local-to-cloud sync pipeline.
          2. Softcell Technologies: Benchmarked MLX vs PyTorch (M4 hardware), built Legal AI system and Resume-JD matching platform.
          3. Unified Mentor: Delivered end-to-end ML projects (Cybersecurity, HR Attrition) with 90%+ accuracy.
        - Projects: 
          1. Sentinel: Autonomous LangGraph research system with hallucination checks.
          2. Vidyut Sanchay: Intelligent power grid orchestrator using LangGraph and Llama-3.
          3. AI Marketplace Assistant: RAG-based tool for local artisans.
          4. Smart Symptom Checker: Medical diagnostic platform.
          5. Context Aware Email Triage: BERT-based enterprise classifier.
        - Achievements: Ranked 1st in FY and SY BSc, Founded CodeCrux (college's first coding competition), Event Head for Eureka, Worked on Budget 2025 seminar.
        - Skills: LangGraph, Python, React, TensorFlow, PyTorch, MLOps, SQL.
        - Goal: Looking for collaborations, freelance, or full-time AI roles.
        
        Answer professionally and highlight her technical depth and academic excellence.
    `;

    const encodedContext = encodeURIComponent(bhoomiContext.trim());

    chatClaude.href = `https://claude.ai/new?q=${encodedContext}`;
    chatGpt.href = `https://chatgpt.com/?q=${encodedContext}`;
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
