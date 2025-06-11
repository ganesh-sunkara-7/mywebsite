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
        showNotification('Please fill out all fields', 'error');
        return;
      }
      
      if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
      }
      
      // If the form is valid, we would normally submit it to a server
      // For demo purposes, we'll just show a success message
      showNotification('Thanks for your message! I\'ll get back to you soon.', 'success');
      contactForm.reset();
    });
  }
  
  // Email validation helper
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Notification system
  function showNotification(message, type = 'info') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      padding: '12px 24px',
      borderRadius: '8px',
      color: '#fff',
      zIndex: '1000',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      opacity: '0',
      transition: 'opacity 0.3s ease'
    });
    
    // Set background color based on type
    if (type === 'success') {
      notification.style.backgroundColor = 'var(--color-success)';
    } else if (type === 'error') {
      notification.style.backgroundColor = 'var(--color-error)';
    } else {
      notification.style.backgroundColor = 'var(--color-info)';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.opacity = '1';
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 5000);
  }
  
  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.skill-bar__progress');
  
  // Set initial width to 0
  skillBars.forEach(bar => {
    bar.style.width = '0';
  });
  
  // Function to check if an element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to animate skill bars
  function animateSkillBars() {
    skillBars.forEach(bar => {
      if (isInViewport(bar)) {
        const targetWidth = bar.getAttribute('style').split('width:')[1].trim();
        bar.style.width = targetWidth;
      }
    });
  }
  
  // Run animation on scroll
  window.addEventListener('scroll', animateSkillBars);
  
  // Run once on page load
  animateSkillBars();
  
  // Add scroll class to navbar on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = 'var(--shadow-md)';
      navbar.style.padding = '10px 0';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.padding = '';
    }
  });
  
  // Handle form field validation on input
  const formInputs = document.querySelectorAll('.form-control');
  formInputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (this.value.trim() === '') {
        this.style.borderColor = 'var(--color-error)';
      } else {
        this.style.borderColor = 'var(--color-border)';
        
        // Additional validation for email
        if (this.type === 'email' && !isValidEmail(this.value.trim())) {
          this.style.borderColor = 'var(--color-error)';
        }
      }
    });
    
    input.addEventListener('focus', function() {
      this.style.borderColor = 'var(--color-primary)';
    });
  });
});