/* Main stylesheet for Ganesh Sunkara's portfolio */

/* Base styles and variables */
:root {
  /* Colors - Dark Theme */
  --dark-bg-primary: #121212;
  --dark-bg-secondary: #1f1f1f;
  --dark-text-primary: #ffffff;
  --dark-text-secondary: #b3b3b3;
  --dark-accent: #4fc3dc;
  --dark-accent-hover: #3da8be;
  --dark-border: #333333;
  --dark-card-bg: #2a2a2a;
  
  /* Colors - Light Theme */
  --light-bg-primary: #ffffff;
  --light-bg-secondary: #f5f5f5;
  --light-text-primary: #333333;
  --light-text-secondary: #666666;
  --light-accent: #2a7dbe;
  --light-accent-hover: #1c6299;
  --light-border: #dddddd;
  --light-card-bg: #ffffff;
  
  /* Font sizes */
  --font-size-xs: 0.75rem;   /* 12px */
  --font-size-sm: 0.875rem;  /* 14px */
  --font-size-base: 1rem;    /* 16px */
  --font-size-md: 1.125rem;  /* 18px */
  --font-size-lg: 1.25rem;   /* 20px */
  --font-size-xl: 1.5rem;    /* 24px */
  --font-size-2xl: 1.875rem; /* 30px */
  --font-size-3xl: 2.25rem;  /* 36px */
  --font-size-4xl: 3rem;     /* 48px */
  
  /* Spacing */
  --spacing-xs: 0.25rem;  /* 4px */
  --spacing-sm: 0.5rem;   /* 8px */
  --spacing-md: 1rem;     /* 16px */
  --spacing-lg: 1.5rem;   /* 24px */
  --spacing-xl: 2rem;     /* 32px */
  --spacing-2xl: 3rem;    /* 48px */
  --spacing-3xl: 4rem;    /* 64px */
  
  /* Border radius */
  --border-radius-sm: 0.25rem;  /* 4px */
  --border-radius-md: 0.5rem;   /* 8px */
  --border-radius-lg: 1rem;     /* 16px */
  --border-radius-full: 9999px; /* Full rounded */
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
  
  /* Box shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  
  /* Container max width */
  --container-max-width: 1200px;
  
  /* Set current theme (default is dark) */
  --bg-primary: var(--dark-bg-primary);
  --bg-secondary: var(--dark-bg-secondary);
  --text-primary: var(--dark-text-primary);
  --text-secondary: var(--dark-text-secondary);
  --accent: var(--dark-accent);
  --accent-hover: var(--dark-accent-hover);
  --border: var(--dark-border);
  --card-bg: var(--dark-card-bg);
}

/* Light theme variables */
[data-color-scheme="light"] {
  --bg-primary: var(--light-bg-primary);
  --bg-secondary: var(--light-bg-secondary);
  --text-primary: var(--light-text-primary);
  --text-secondary: var(--light-text-secondary);
  --accent: var(--light-accent);
  --accent-hover: var(--light-accent-hover);
  --border: var(--light-border);
  --card-bg: var(--light-card-bg);
}

/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--spacing-md);
}

p {
  margin-bottom: var(--spacing-md);
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--accent-hover);
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Container */
.container {
  width: 90%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

/* Section styles */
section {
  padding: var(--spacing-3xl) 0;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.section-header__title {
  font-size: var(--font-size-3xl);
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  text-transform: uppercase;
}

.section-header__underline {
  height: 4px;
  width: 70px;
  background-color: var(--accent);
  margin: 0 auto;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  border: none;
  outline: none;
}

.btn--primary {
  background-color: var(--accent);
  color: white;
}

.btn--primary:hover {
  background-color: var(--accent-hover);
  color: white;
}

.btn--secondary {
  background-color: transparent;
  color: var(--text-primary);
  border: 2px solid var(--accent);
}

.btn--secondary:hover {
  background-color: var(--accent);
  color: white;
}

/* Navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--bg-primary);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-md) 0;
  transition: all var(--transition-normal);
}

.navbar__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar__logo {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--accent);
}

.navbar__menu {
  display: flex;
  align-items: center;
}

.navbar__item {
  margin-left: var(--spacing-lg);
}

.navbar__link {
  color: var(--text-primary);
  font-weight: 600;
  position: relative;
}

.navbar__link:hover {
  color: var(--accent);
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent);
  transition: width var(--transition-fast);
}

.navbar__link:hover::after {
  width: 100%;
}

.navbar__toggle {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all var(--transition-fast);
  background-color: var(--text-primary);
}

/* Hero Section */
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--bg-secondary);
  overflow: hidden;
  padding-top: 80px; /* Account for navbar */
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, var(--accent), transparent 40%);
  opacity: 0.1;
  z-index: 0;
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.hero__title {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
}

.hero__subtitle {
  font-size: var(--font-size-xl);
  color: var(--accent);
  margin-bottom: var(--spacing-lg);
}

.hero__text {
  font-size: var(--font-size-md);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
}

.hero__buttons {
  display: flex;
  gap: var(--spacing-md);
}

/* About Section */
.about {
  background-color: var(--bg-primary);
}

.about__content {
  display: flex;
  gap: var(--spacing-2xl);
  align-items: center;
}

.about__image {
  flex: 1;
  max-width: 300px;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.about__text {
  flex: 2;
}

.about__details {
  margin-top: var(--spacing-lg);
}

.about__detail {
  margin-bottom: var(--spacing-md);
}

.about__detail h3 {
  font-size: var(--font-size-lg);
  color: var(--accent);
  margin-bottom: var(--spacing-sm);
}

.about__detail ul {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.about__detail li {
  background-color: var(--card-bg);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm);
}

/* Education Section */
.education {
  background-color: var(--bg-secondary);
}

.education__timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.education__timeline::before {
  content: '';
  position: absolute;
  width: 4px;
  background-color: var(--accent);
  top: 0;
  bottom: 0;
  left: 50px;
  margin-left: -2px;
}

.education__item {
  display: flex;
  margin-bottom: var(--spacing-2xl);
  position: relative;
}

.education__year {
  min-width: 100px;
  font-weight: 700;
  color: var(--accent);
  text-align: right;
  padding-right: var(--spacing-md);
  font-size: var(--font-size-md);
  position: relative;
}

.education__year::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  right: -9px;
  background-color: var(--accent);
  border: 4px solid var(--bg-secondary);
  top: 0;
  border-radius: 50%;
  z-index: 1;
}

.education__content {
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  margin-left: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  flex: 1;
}

.education__degree {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xs);
}

.education__institution {
  font-size: var(--font-size-md);
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
  color: var(--text-secondary);
}

.education__location,
.education__grade {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
}

/* Skills Section */
.skills {
  background-color: var(--bg-primary);
}

.skills__content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.skills__category {
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
}

.skills__category-title {
  font-size: var(--font-size-lg);
  color: var(--accent);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.skills__items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.skills__item {
  margin-bottom: var(--spacing-md);
}

.skills__name {
  font-size: var(--font-size-md);
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
}

.skills__bar {
  height: 10px;
  background-color: var(--border);
  border-radius: var(--border-radius-full);
  overflow: hidden;
}

.skills__progress {
  height: 100%;
  background-color: var(--accent);
  border-radius: var(--border-radius-full);
  animation: progressAnimation 1.5s ease-in-out;
}

@keyframes progressAnimation {
  from {
    width: 0;
  }
}

/* Projects Section */
.projects {
  background-color: var(--bg-secondary);
}

.projects__content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
}

.project-card {
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.project-card__image {
  height: 200px;
  overflow: hidden;
}

.project-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.project-card:hover .project-card__image img {
  transform: scale(1.05);
}

.project-card__content {
  padding: var(--spacing-lg);
}

.project-card__title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
  color: var(--accent);
}

.project-card__description {
  margin-bottom: var(--spacing-lg);
  color: var(--text-secondary);
}

.project-card__details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

.project-card__technologies h4,
.project-card__features h4 {
  font-size: var(--font-size-md);
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
}

.project-card__technologies ul,
.project-card__features ul {
  color: var(--text-secondary);
}

.project-card__technologies li,
.project-card__features li {
  position: relative;
  padding-left: var(--spacing-md);
  margin-bottom: var(--spacing-xs);
  font-size: var(--font-size-sm);
}

.project-card__technologies li::before,
.project-card__features li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent);
}

/* Certifications Section */
.certifications {
  background-color: var(--bg-primary);
}

.certifications__content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-xl);
}

.certifications__item {
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  transition: transform var(--transition-normal);
}

.certifications__item:hover {
  transform: translateY(-5px);
}

.certifications__item i {
  font-size: var(--font-size-2xl);
  color: var(--accent);
}

.certifications__text h3 {
  font-size: var(--font-size-md);
  margin-bottom: 0;
}

/* Contact Section */
.contact {
  background-color: var(--bg-secondary);
}

.contact__content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-2xl);
}

.contact__info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.contact__info-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.contact__info-item i {
  font-size: var(--font-size-xl);
  color: var(--accent);
}

.contact__info-item p {
  margin-bottom: 0;
}

.contact__form {
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-sm);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
}

/* Footer */
.footer {
  background-color: var(--bg-primary);
  padding: var(--spacing-xl) 0;
  border-top: 1px solid var(--border);
}

.footer__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__social {
  display: flex;
  gap: var(--spacing-md);
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--card-bg);
  color: var(--text-primary);
  transition: all var(--transition-fast);
}

.footer__social-link:hover {
  background-color: var(--accent);
  color: white;
}

/* Media Queries */
@media (max-width: 992px) {
  .about__content {
    flex-direction: column;
    text-align: center;
  }
  
  .about__image {
    margin-bottom: var(--spacing-xl);
  }
  
  .contact__content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  .contact__info {
    order: 2;
  }
}

@media (max-width: 768px) {
  .navbar__menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: var(--bg-primary);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    padding: var(--spacing-lg) 0;
  }
  
  .navbar__menu.active {
    left: 0;
  }
  
  .navbar__item {
    margin: var(--spacing-md) 0;
  }
  
  .navbar__toggle {
    display: block;
  }
  
  .navbar__toggle.active .bar:nth-child(2) {
    opacity: 0;
  }
  
  .navbar__toggle.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  
  .navbar__toggle.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
  
  .projects__content {
    grid-template-columns: 1fr;
  }
  
  .education__timeline::before {
    left: 20px;
  }
  
  .education__year {
    min-width: 40px;
    text-align: left;
  }
  
  .education__year::after {
    left: 12px;
    right: auto;
  }
  
  .hero__title {
    font-size: var(--font-size-3xl);
  }
  
  .hero__subtitle {
    font-size: var(--font-size-lg);
  }
}

@media (max-width: 576px) {
  .section-header__title {
    font-size: var(--font-size-2xl);
  }
  
  .hero__buttons {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
  
  .education__content {
    padding: var(--spacing-md);
  }
  
  .footer__content {
    flex-direction: column;
    gap: var(--spacing-lg);
    text-align: center;
  }
  
  .skills__content {
    grid-template-columns: 1fr;
  }
}