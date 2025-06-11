// Main JavaScript file for Ganesh Sunkara's portfolio

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.navbar__menu');
  
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll('.navbar__link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Calculate navbar height for offset
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
          top: targetPosition - navbarHeight,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Contact form validation and submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Form validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // In a real website, you would send this data to a server
      // For now, we'll just show a success message
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Animate skill bars when they come into view
  const skillBars = document.querySelectorAll('.skills__progress');
  
  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // If the element is in view, add the animation class
        entry.target.style.width = entry.target.style.width;
        
        // Stop observing the element after animation
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  // Observe each skill bar
  skillBars.forEach(bar => {
    // Hide the progress initially
    const width = bar.style.width;
    bar.style.width = '0';
    
    // After a small delay, set the actual width to trigger animation
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
    
    observer.observe(bar);
  });
  
  // Scroll sections active link
  const sections = document.querySelectorAll('section[id]');
  
  function scrollActive() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.navbar__link[href*=' + sectionId + ']').classList.add('active');
      } else {
        document.querySelector('.navbar__link[href*=' + sectionId + ']').classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', scrollActive);
  
  // Optional: Add a back to top button
  const scrollTop = document.createElement('div');
  scrollTop.classList.add('scrollTop');
  scrollTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollTop);
  
  scrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Show/hide back to top button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollTop.classList.add('active');
    } else {
      scrollTop.classList.remove('active');
    }
  });
  
  // Optional: Theme toggle functionality
  const themeToggle = document.createElement('div');
  themeToggle.classList.add('theme-toggle');
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  document.body.appendChild(themeToggle);
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-color-scheme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-color-scheme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme);
  });
  
  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.setAttribute('data-color-scheme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
  }
  
  // Add styles for the theme toggle and back to top button
  const style = document.createElement('style');
  style.textContent = `
    .theme-toggle, .scrollTop {
      position: fixed;
      right: 20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--accent);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: var(--shadow-md);
      transition: all var(--transition-normal);
      z-index: 999;
    }
    
    .theme-toggle {
      bottom: 80px;
    }
    
    .scrollTop {
      bottom: 20px;
      opacity: 0;
      visibility: hidden;
    }
    
    .scrollTop.active {
      opacity: 1;
      visibility: visible;
    }
    
    .theme-toggle:hover, .scrollTop:hover {
      transform: scale(1.1);
    }
  `;
  document.head.appendChild(style);
});