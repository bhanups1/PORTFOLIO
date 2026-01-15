# Certification Section Setup

## Overview
Your certification section now displays certificates with institution logos in a modern, responsive card layout.

## File Structure
```
assets/
├── education_logo/
│   ├── udemy-logo.png
│   ├── coursera-logo.png
│   └── linkedin-learning-logo.png
└── certification/
    ├── frontend-cert.pdf (or .png/.jpg)
    ├── react-cert.pdf (or .png/.jpg)
    └── javascript-cert.pdf (or .png/.jpg)
```

## How to Add Your Certificates

### 1. **Institution Logos**
   - Place institution logos in `assets/education_logo/`
   - Supported formats: PNG, JPG, SVG
   - Recommended size: 500x500px or larger
   - The logos will be automatically scaled to fit

   **Currently expected logos:**
   - `udemy-logo.png` - For Udemy courses
   - `coursera-logo.png` - For Coursera courses
   - `linkedin-learning-logo.png` - For LinkedIn Learning courses

### 2. **Certificate Images**
   - Place certificate images in `assets/certification/`
   - Supported formats: PNG, JPG (PDFs won't display as images)
   - Recommended size: 200x250px or larger
   - These will appear as thumbnails with a hover zoom effect

   **Currently expected certificates:**
   - `frontend-cert.png` - Frontend Development certificate
   - `react-cert.png` - React Mastery certificate
   - `javascript-cert.png` - JavaScript Advanced certificate

### 3. **Customize the Certification Data**
   Edit the HTML in `index.html` to update:
   - Course names
   - Institution names
   - Descriptions
   - Image paths

   Find the section with id="certification" and modify as needed.

## Features
- **Responsive Design**: Adapts to desktop, tablet, and mobile screens
- **Hover Effects**: Border color changes and certificate zooms on hover
- **Clean Layout**: Institution logo, course info, and certificate thumbnail in organized grid
- **Professional Styling**: Matches your portfolio's dark theme with yellow accents

## Responsive Behavior
- **Desktop (1025px+)**: 3-column layout (logo | info | certificate)
- **Tablet (1024px-769px)**: Scaled down version of desktop layout
- **Mobile (768px and below)**: Full-width stacked layout for easy viewing

## Color Scheme
- Background: #1e1e1e and #2a2a2a
- Text: #e0e0e0 (headings), #a0a0a0 (body)
- Accent: #FFBF00 (yellow highlights)
- Border: #3a3a3a with #FFBF00 on hover

## Tips
1. Use high-quality certificate images for better appearance
2. Ensure institution logos have transparent backgrounds (PNG format recommended)
3. Keep certificate images in standard aspect ratios (4:5 or similar)
4. Test on mobile devices to ensure proper layout
