# How to Edit Your Portfolio Website

This guide will help you make changes to your new portfolio website. I've designed the website to be easy to update, even if you don't have much coding experience.

## Basic File Structure

Your website consists of three main files:

1. `index.html` - Contains the structure and content of your website
2. `style.css` - Controls the appearance (colors, fonts, layout)
3. `app.js` - Controls interactive elements (menu, animations, form)

## How to Edit Text Content

Most of the changes you'll want to make will be to the text content in the `index.html` file. Here's how:

### Step 1: Open the HTML File

Open the `index.html` file in a text editor. Good free options include:
- Visual Studio Code (recommended): https://code.visualstudio.com/
- Sublime Text: https://www.sublimetext.com/
- Notepad++ (Windows only): https://notepad-plus-plus.org/

### Step 2: Locate the Section You Want to Edit

The HTML file is organized into sections, each with an ID matching its purpose:
- `<section id="home">` - Hero/intro section
- `<section id="about">` - About me section
- `<section id="education">` - Education history
- `<section id="skills">` - Skills section
- `<section id="projects">` - Projects section
- `<section id="certifications">` - Certifications section
- `<section id="contact">` - Contact information

### Step 3: Edit the Text

Look for text between tags like `<p>` (paragraph), `<h1>`, `<h2>`, etc. For example:

```html
<p class="hero__text">I am an enthusiastic and technically skilled individual...</p>
```

Simply change the text between the opening and closing tags to update your content.

### Step 4: Save and View Changes

After making changes, save the file and open it in a web browser to see your updates.

## Common Text Editing Tasks

### Update Your Name/Title

Find this section near the top of the HTML file:

```html
<h1 class="hero__title">Ganesh Sunkara</h1>
<h2 class="hero__subtitle">Mechanical Engineering Student & Python Developer</h2>
```

Change the text between the tags to update your name and title.

### Update About Me Section

Find the about section:

```html
<section id="about" class="about">
  <!-- Content here -->
</section>
```

Edit the paragraph text between the `<p>` tags.

### Add a New Project

To add a new project, locate the projects section and copy an existing project card:

```html
<div class="project-card">
  <div class="project-card__content">
    <h3 class="project-card__title">Project Name</h3>
    <p class="project-card__description">Project description goes here...</p>
    <!-- More content -->
  </div>
</div>
```

Paste it within the projects container and update the details.

### Update Skills

Find the skills section:

```html
<div class="skills__category">
  <h3 class="skills__category-title">Programming Languages</h3>
  <div class="skills__items">
    <!-- Skill items here -->
  </div>
</div>
```

To add a new skill, copy an existing skill item and paste it within the appropriate category's `skills__items` div.

### Update Contact Information

Find the contact section and update your email, phone, etc.:

```html
<div class="contact__info">
  <div class="contact__info-item">
    <i class="fas fa-envelope"></i>
    <p>ganeshsunkara55@gmail.com</p>
  </div>
  <!-- More contact info -->
</div>
```

## Changing Colors and Styling

If you want to change colors, fonts, or other visual elements, you'll need to edit the `style.css` file.

### Main Color Scheme

At the top of the `style.css` file, you'll find color variables:

```css
:root {
  /* Colors */
  --color-background: rgba(252, 252, 249, 1);
  --color-surface: rgba(255, 255, 253, 1);
  --color-text: rgba(19, 52, 59, 1);
  --color-primary: rgba(33, 128, 141, 1);
  /* More colors */
}
```

You can change these values to update the entire color scheme of your website. For example, to change the primary color (used for buttons and accents), update the `--color-primary` value.

### Dark Mode

The website uses a dark mode by default. To switch to light mode, find this line in the `<body>` tag:

```html
<body data-color-scheme="dark">
```

Change it to:

```html
<body data-color-scheme="light">
```

## Adding Images

### Profile Picture

To add your profile picture:

1. Prepare a square image (recommended size: 300x300 pixels)
2. Place the image file in the same folder as your HTML file
3. Find the profile image section in the about section:

```html
<div class="about__image">
  <img src="profile-placeholder.jpg" alt="Ganesh Sunkara">
</div>
```

4. Update the `src` attribute with your image filename:

```html
<img src="your-photo.jpg" alt="Ganesh Sunkara">
```

### Project Images

To add images to your projects:

1. Prepare your project images (recommended size: 800x450 pixels)
2. Place them in the same folder as your HTML file
3. Find the project card where you want to add an image
4. Add an image tag before the project content:

```html
<div class="project-card__image">
  <img src="your-project-image.jpg" alt="Project Name">
</div>
```

## Hosting and Publishing Your Website

If you want to host your website on GitHub Pages for free:

1. Create a GitHub account if you don't have one
2. Create a new repository named `username.github.io` (replace 'username' with your GitHub username)
3. Upload your HTML, CSS, and JS files to this repository
4. Your website will be available at `https://username.github.io`

For more detailed instructions on hosting with GitHub Pages, see: https://pages.github.com/

## Advanced Customization

If you want to make more advanced changes like modifying the layout or adding new sections, you may need some HTML/CSS knowledge. Consider resources like:

- FreeCodeCamp: https://www.freecodecamp.org/
- W3Schools: https://www.w3schools.com/
- MDN Web Docs: https://developer.mozilla.org/

## Getting Help

If you get stuck or need assistance with more complex changes, consider:
- Using ChatGPT or similar AI assistants for coding help
- Hiring a freelancer for specific modifications on platforms like Fiverr or Upwork
- Joining web development communities like Stack Overflow or Reddit's r/webdev

Good luck with your website! Remember to keep it updated as you gain new skills and complete new projects.