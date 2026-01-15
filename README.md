# Bhanu Partap - Portfolio Website

A modern, responsive portfolio website showcasing skills, education, projects, and certifications. Built with HTML, CSS, and JavaScript with a sleek dark theme.

## 📋 Project Overview

This is a professional portfolio website featuring:
- **About Section**: Personal introduction and professional summary
- **Skills Section**: Technical expertise organized by categories (Frontend, Backend, Languages, Tools)
- **Education Section**: Academic background with institutions and years
- **Portfolio Section**: Showcase of completed projects with descriptions
- **Certification Section**: Professional certifications with institution logos and Google Drive links

## 📁 Project Structure

```
Portfolio-profile/
├── index.html                    # Main HTML file
├── style.css                     # Styling and layout
├── script.js                     # JavaScript functionality
├── README.md                     # This file
├── CERTIFICATION_SETUP.md        # Certification setup guide
└── assets/
    ├── profile-image.png         # Profile picture
    ├── education_logo/           # Institution logos
    │   ├── coursera-logo.png
    │   └── linkedin-learning-logo.png
    ├── project_logo/             # Project logos (if needed)
    ├── tech_logo/                # Technology logos
    └── certification/            # Certificate images
        ├── fullstack-cert.png
        ├── react-cert.png
        └── javascript-cert.png
```

## 🎨 Design Features

### Color Scheme
- **Primary Background**: `#1e1e1e` (Dark gray)
- **Secondary Background**: `#2a2a2a` (Slightly lighter gray)
- **Border Color**: `#3a3a3a`
- **Text Color**: `#a0a0a0` (Gray)
- **Headings**: `#e0e0e0` (Light gray)
- **Accent Color**: `#FFBF00` (Gold/Yellow)

### Layout
- **Responsive Grid Layout**: Sidebar + Main Content
- **Desktop (1025px+)**: Sticky sidebar with main content
- **Mobile (768px and below)**: Single column stacked layout
- **Max Width**: 1200px for optimal readability

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required - pure HTML, CSS, and JavaScript

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Customize the content with your own information

### Customization Guide

#### 1. **Profile Section** (Left Sidebar)
Edit in `index.html`:
```html
<h2>YOUR NAME</h2>
<p>YOUR TITLE</p>
```

Update contact information:
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="tel:+1234567890">+1 234 567 890</a>
```

Update social links:
```html
<a href="https://your-twitter-url" target="_blank">
<a href="https://your-github-url" target="_blank">
<a href="https://your-linkedin-url" target="_blank">
```

Replace profile image: `./assets/profile-image.png`

#### 2. **About Section**
Update the about description in the "About Me" section of `index.html`

#### 3. **Skills Section**
Modify skills in each category (Frontend, Backend, Languages, Tools):
```html
<div class="item">
    <img src="icon-url">
    <h4>Skill Name</h4>
</div>
```

#### 4. **Education Section**
Update education entries with:
- Years of study
- Degree/Course name
- College/Institution name
- Description

#### 5. **Portfolio Section**
Add/edit projects:
```html
<div class="project">
    <img src="project-image-url">
    <div class="card">
        <h3>Project Name</h3>
        <p>Project Description</p>
        <span>Technology 1</span>
        <span>Technology 2</span>
    </div>
</div>
```

#### 6. **Certification Section**
Update certification cards with:
- Institution logo path
- Course/Certification name
- Institution name
- Description
- Google Drive link to certificate

See `CERTIFICATION_SETUP.md` for detailed instructions on adding certificates and logos.

## 📱 Responsive Design

The website is fully responsive and optimizes for all screen sizes:

- **Desktop**: Full 2-column layout with sticky sidebar
- **Tablet (1024px-769px)**: Scaled layout with adjusted spacing
- **Mobile (768px and below)**: Single column stacked layout

## 🔗 Adding Google Drive Links

For certifications, you can link to Google Drive documents:

1. Upload certificate to Google Drive
2. Right-click → Share → Make viewable by "Anyone with the link"
3. Get the File ID from the URL: `https://drive.google.com/file/d/FILE_ID/view`
4. Update the link in HTML:
```html
<a href="https://drive.google.com/file/d/YOUR_FILE_ID/view" target="_blank">
    <img src="certificate-image.png" class="cert-thumbnail">
</a>
```

## 📂 Asset Management

### Images to Include
- **Profile Image**: `assets/profile-image.png` (140x140px recommended)
- **Institution Logos**: `assets/education_logo/` (500x500px recommended)
- **Certificate Images**: `assets/certification/` (200x250px recommended)
- **Tech Logos**: `assets/tech_logo/` (as needed)
- **Project Images**: `assets/project_logo/` (400x250px recommended)

### Image Formats
- PNG (recommended for logos - supports transparency)
- JPG (good for photos and certificates)
- SVG (scalable vector graphics)

## 🎯 Navigation

The website includes a sticky navigation bar with links to all major sections:
- About
- Skills
- Education
- Portfolio
- Certification

Each section is identified with an ID that corresponds to the navigation links.

## 💻 Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 File Descriptions

### index.html
Main HTML structure containing all sections of the portfolio.

### style.css
Complete styling and responsive design rules. Organized into sections:
- Global reset and base styles
- Layout and grid
- Profile and sidebar
- Contact and social sections
- Skills section
- Education section
- Portfolio section
- Certification section
- Modal section (for expandable content)
- Responsive breakpoints

### script.js
JavaScript functionality for interactive features and navigation.

## 🛠️ Customization Tips

1. **Colors**: All colors are defined in the CSS. Search for hex values to change the theme
2. **Fonts**: Default is `sans-serif`. Change in the `body` CSS rule
3. **Spacing**: Adjust `padding`, `margin`, and `gap` properties for layout changes
4. **Animations**: Hover effects and transitions can be modified in CSS
5. **Icons**: Replace icon URLs with your own or use icon libraries

## 📞 Contact Information

Update the contact section in the sidebar with:
- Email address
- Phone number
- Location
- Social media profiles

## 🔐 Privacy & Security

When sharing links (especially Google Drive):
- Ensure documents are set to "Viewer" permission only
- Don't share sensitive personal information
- Use secure URLs for external links

## 📄 License

This project is free to use and modify for personal use.

## 🚀 Deployment

To host this portfolio online:

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings → Pages → Select `main` branch
4. Site will be available at `username.github.io/repo-name`

### Option 2: Netlify
1. Drag and drop the folder to Netlify.com
2. Get a live URL instantly
3. Connect to GitHub for continuous deployment

### Option 3: Vercel
1. Import the repository from GitHub
2. Deploy with one click
3. Get automatic deployments on updates

### Option 4: Traditional Hosting
1. Upload all files to your web host
2. Point your domain to the hosting
3. Access via your custom domain

## 📊 Performance

- Lightweight and fast loading
- No external dependencies
- Optimized images recommended
- Clean, semantic HTML
- Efficient CSS with no unused styles

## 🎓 Learning Resources

To enhance this portfolio further:
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

## 📞 Support

For help with customization or issues:
1. Check the CERTIFICATION_SETUP.md for certification section help
2. Review the HTML structure in index.html
3. Inspect CSS rules in style.css for styling changes
4. Test responsive design using browser dev tools

## ✨ Features Highlight

✅ Dark theme with professional design
✅ Fully responsive (mobile, tablet, desktop)
✅ Sticky sidebar navigation
✅ Smooth transitions and hover effects
✅ Google Drive integration for certificates
✅ Social media links
✅ Clean, semantic code
✅ No external dependencies
✅ Fast loading times
✅ Easy to customize

---

**Last Updated**: January 15, 2026
**Created by**: Bhanu Partap

