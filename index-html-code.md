<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ganesh Sunkara - Portfolio</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body data-color-scheme="dark">
  <!-- Navigation -->
  <nav class="navbar">
    <div class="container navbar__container">
      <a href="#home" class="navbar__logo">Ganesh Sunkara</a>
      <div class="navbar__toggle" id="mobile-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul class="navbar__menu">
        <li class="navbar__item"><a href="#home" class="navbar__link">Home</a></li>
        <li class="navbar__item"><a href="#about" class="navbar__link">About</a></li>
        <li class="navbar__item"><a href="#education" class="navbar__link">Education</a></li>
        <li class="navbar__item"><a href="#skills" class="navbar__link">Skills</a></li>
        <li class="navbar__item"><a href="#projects" class="navbar__link">Projects</a></li>
        <li class="navbar__item"><a href="#certifications" class="navbar__link">Certifications</a></li>
        <li class="navbar__item"><a href="#contact" class="navbar__link">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="container">
      <div class="hero__content">
        <h1 class="hero__title">Ganesh Sunkara</h1>
        <h2 class="hero__subtitle">Mechanical Engineering Student & Python Developer</h2>
        <p class="hero__text">I am an enthusiastic and technically skilled individual currently pursuing a Bachelor's degree in Engineering in Andhra Pradesh. With a strong foundation in programming languages such as Python and C, I have developed engaging projects like Blackjack and Tic Tac Toe games, which demonstrate my proficiency in Object-Oriented Programming.</p>
        <div class="hero__buttons">
          <a href="#contact" class="btn btn--primary">Contact Me</a>
          <a href="#" class="btn btn--secondary">Download Resume</a>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <h2 class="section-header__title">About Me</h2>
        <div class="section-header__underline"></div>
      </div>
      <div class="about__content">
        <div class="about__image">
          <img src="profile-placeholder.jpg" alt="Ganesh Sunkara">
        </div>
        <div class="about__text">
          <p>I am an enthusiastic and technically skilled individual currently pursuing a Bachelor's degree in Engineering in Andhra Pradesh. With a strong foundation in programming languages such as Python and C, I have developed engaging projects like Blackjack and Tic Tac Toe games, which demonstrate my proficiency in Object-Oriented Programming.</p>
          <p>I have the ability to learn new technologies quickly and thrive in collaborative environments, demonstrating effective teamwork, communication, and problem-solving skills.</p>
          
          <div class="about__details">
            <div class="about__detail">
              <h3>Languages</h3>
              <ul>
                <li>English</li>
                <li>Hindi (intermediate)</li>
                <li>Telugu (native)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Education Section -->
  <section id="education" class="education">
    <div class="container">
      <div class="section-header">
        <h2 class="section-header__title">Education</h2>
        <div class="section-header__underline"></div>
      </div>
      <div class="education__timeline">
        <div class="education__item">
          <div class="education__year">2021 - 2025</div>
          <div class="education__content">
            <h3 class="education__degree">Bachelor of Mechanical Engineering</h3>
            <h4 class="education__institution">Raghu Engineering College, Visakhapatnam</h4>
            <p class="education__location">Andhra Pradesh</p>
            <p class="education__grade">CGPA: 7.12</p>
          </div>
        </div>
        <div class="education__item">
          <div class="education__year">2019 - 2021</div>
          <div class="education__content">
            <h3 class="education__degree">Board of Intermediate Education, MPC</h3>
            <h4 class="education__institution">Sasi Junior College, Sangivalasa</h4>
            <p class="education__location">Andhra Pradesh</p>
            <p class="education__grade">Score: 97.9%</p>
          </div>
        </div>
        <div class="education__item">
          <div class="education__year">2019</div>
          <div class="education__content">
            <h3 class="education__degree">Board of Secondary Education</h3>
            <h4 class="education__institution">Andhra Pradesh Residential School, Bobbili</h4>
            <p class="education__location">Andhra Pradesh</p>
            <p class="education__grade">GPA: 10</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-header">
        <h2 class="section-header__title">Skills</h2>
        <div class="section-header__underline"></div>
      </div>
      <div class="skills__content">
        <div class="skills__category">
          <h3 class="skills__category-title">Programming Languages</h3>
          <div class="skills__items">
            <div class="skills__item">
              <div class="skills__name">C Programming</div>
              <div class="skills__bar">
                <div class="skills__progress" style="width: 80%"></div>
              </div>
            </div>
            <div class="skills__item">
              <div class="skills__name">Python</div>
              <div class="skills__bar">
                <div class="skills__progress" style="width: 90%"></div>
              </div>
            </div>
            <div class="skills__item">
              <div class="skills__name">SQL</div>
              <div class="skills__bar">
                <div class="skills__progress" style="width: 75%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="skills__category">
          <h3 class="skills__category-title">Platforms</h3>
          <div class="skills__items">
            <div class="skills__item">
              <div class="skills__name">Jupyter Notebook</div>
              <div class="skills__bar">
                <div class="skills__progress" style="width: 85%"></div>
              </div>
            </div>
            <div class="skills__item">
              <div class="skills__name">Visual Studio Code</div>
              <div class="skills__bar">
                <div class="skills__progress" style="width: 80%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="skills__category">
          <h3 class="skills__category-title">Soft Skills</h3>
          <div class="skills__items">
            <div class="skills__item">
              <div class="skills__name">Communication</div>
              <div class="skills__bar">
                <div class="skills__progress" style="width: 85%"></div>
              </div>
            </div>
            <div class="skills__item">
              <div class="skills__name">Problem Solving</div>
              <div class="skills__bar">
                <div class="skills__progress" style="width: 90%"></div>
              </div>
            </div>
            <div class="skills__item">
              <div class="skills__name">Teamwork</div>
              <div class="skills__bar">
                <div class="skills__progress" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-header">
        <h2 class="section-header__title">Projects</h2>
        <div class="section-header__underline"></div>
      </div>
      <div class="projects__content">
        <div class="project-card">
          <div class="project-card__content">
            <h3 class="project-card__title">Blackjack Game</h3>
            <p class="project-card__description">Developed a Blackjack game utilizing a standard deck of cards, allowing players to compete against the dealer and enhance their strategic thinking skills.</p>
            <div class="project-card__details">
              <div class="project-card__technologies">
                <h4>Technologies</h4>
                <ul>
                  <li>Python</li>
                  <li>Object-Oriented Programming</li>
                </ul>
              </div>
              <div class="project-card__features">
                <h4>Features</h4>
                <ul>
                  <li>Core game mechanics implementation</li>
                  <li>Hitting, standing, and bust detection</li>
                  <li>Authentic gaming experience</li>
                  <li>User-friendly interface</li>
                  <li>Modular and maintainable code structure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="project-card">
          <div class="project-card__content">
            <h3 class="project-card__title">Tic Tac Toe Game</h3>
            <p class="project-card__description">Developed a Tic Tac Toe game that allows two players to compete against each other on a single computer, enhancing user engagement and interaction.</p>
            <div class="project-card__details">
              <div class="project-card__technologies">
                <h4>Technologies</h4>
                <ul>
                  <li>Python</li>
                  <li>Object-Oriented Programming</li>
                </ul>
              </div>
              <div class="project-card__features">
                <h4>Features</h4>
                <ul>
                  <li>Two-player gameplay</li>
                  <li>Player turn management</li>
                  <li>Win detection system</li>
                  <li>Simple user interface</li>
                  <li>Error handling techniques</li>
                  <li>Clean and efficient code structure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Certifications Section -->
  <section id="certifications" class="certifications">
    <div class="container">
      <div class="section-header">
        <h2 class="section-header__title">Certifications</h2>
        <div class="section-header__underline"></div>
      </div>
      <div class="certifications__content">
        <div class="certifications__item">
          <i class="fas fa-certificate"></i>
          <div class="certifications__text">
            <h3>Python programming on Internshala</h3>
          </div>
        </div>
        <div class="certifications__item">
          <i class="fas fa-certificate"></i>
          <div class="certifications__text">
            <h3>Python bootcamp on Udemy</h3>
          </div>
        </div>
        <div class="certifications__item">
          <i class="fas fa-certificate"></i>
          <div class="certifications__text">
            <h3>SQL on Udemy Platform</h3>
          </div>
        </div>
        <div class="certifications__item">
          <i class="fas fa-certificate"></i>
          <div class="certifications__text">
            <h3>NCC-A certificate</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-header__title">Contact Me</h2>
        <div class="section-header__underline"></div>
      </div>
      <div class="contact__content">
        <div class="contact__info">
          <div class="contact__info-item">
            <i class="fas fa-envelope"></i>
            <p>ganeshsunkara55@gmail.com</p>
          </div>
          <div class="contact__info-item">
            <i class="fas fa-phone"></i>
            <p>+91 9392715070</p>
          </div>
          <div class="contact__info-item">
            <i class="fab fa-linkedin"></i>
            <p>www.linkedin.com/in/sunkara-ganesh-2509452b1</p>
          </div>
        </div>
        <div class="contact__form">
          <form id="contactForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn--primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <p>&copy; 2025 Ganesh Sunkara. All rights reserved.</p>
        <div class="footer__social">
          <a href="#" class="footer__social-link"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/sunkara-ganesh-2509452b1" class="footer__social-link"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="footer__social-link"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  </footer>

  <script src="app.js"></script>
</body>
</html>