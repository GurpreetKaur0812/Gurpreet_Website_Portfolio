# Gurpreet Kaur - Portfolio Website

A whimsical, angelic, and tech-savvy portfolio website showcasing expertise in Analytics Engineering, Data Science, and AI/ML.

## 🎨 Design Philosophy

This portfolio features a unique **whimsical angelic aesthetic** with:
- Soft pink and purple color gradients
- Floating animated background orbs
- Smooth animations and transitions
- Modern flashcard-style project displays
- Interactive hover effects
- Responsive design for all devices

## 📁 Folder Structure

```
portfolio/
│
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS with custom properties for easy editing
├── script.js           # JavaScript for interactivity and animations
└── README.md          # This file - setup and deployment instructions
```

## 🚀 Features

### Sections Included:
1. **Hero Section** - Name, roles, and call-to-action buttons
2. **About** - Professional summary with key metrics
3. **Experience** - Timeline-style work history with impact badges
4. **Projects** - Flashcard-style project cards with GitHub links
5. **Skills** - Animated progress bars organized by category
6. **Education** - Degree information and certifications
7. **Leadership** - Leadership roles and community impact
8. **Hobbies** - Personal interests with colorful cards
9. **YouTube** - Video thumbnails with clickable links
10. **Case Studies** - Detailed project breakdowns with metrics
11. **Contact** - Email, LinkedIn, and GitHub links
12. **Navigation** - Smooth scrolling sticky navbar

### Interactive Features:
- ✨ Smooth scroll navigation
- 🎯 Active section highlighting in navbar
- 📊 Animated skill progress bars
- 🎨 Card hover effects with subtle tilt
- 🌊 Parallax background orbs
- 👁️ Intersection Observer animations
- 📱 Fully responsive design

## 🖥️ Running Locally

### Option 1: Simple Local Server (Recommended)

1. **Navigate to the project folder:**
   ```bash
   cd /path/to/your/portfolio
   ```

2. **Start a local server using Python:**
   
   For Python 3.x:
   ```bash
   python -m http.server 8000
   ```
   
   For Python 2.x:
   ```bash
   python -m SimpleHTTPServer 8000
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

### Option 2: Using Node.js

1. **Install http-server globally:**
   ```bash
   npm install -g http-server
   ```

2. **Navigate to project folder and run:**
   ```bash
   http-server -p 8000
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

### Option 3: Using VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## ☁️ AWS Amplify Deployment

### Prerequisites:
- AWS Account
- GitHub/GitLab/Bitbucket account (or can deploy directly)
- Git installed on your computer

### Method 1: Deploy from Git Repository

1. **Initialize Git Repository:**
   ```bash
   cd /path/to/your/portfolio
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on AWS Amplify:**
   - Log in to AWS Console
   - Navigate to AWS Amplify
   - Click "New app" → "Host web app"
   - Select your Git provider (GitHub)
   - Authorize AWS Amplify to access your repository
   - Select the repository and branch
   - Click "Save and Deploy"

4. **Build Settings (Automatic):**
   AWS Amplify will automatically detect that this is a static website and use these settings:
   ```yaml
   version: 1
   frontend:
     phases:
       build:
         commands: []
     artifacts:
       baseDirectory: /
       files:
         - '**/*'
     cache:
       paths: []
   ```

### Method 2: Manual Deploy (Drag & Drop)

1. **Zip your files:**
   - Select all files (index.html, styles.css, script.js)
   - Create a zip archive

2. **Deploy on AWS Amplify:**
   - Log in to AWS Console
   - Navigate to AWS Amplify
   - Click "New app" → "Host web app"
   - Select "Deploy without Git provider"
   - Drag and drop your zip file
   - Click "Save and Deploy"

### Amplify Configuration (Optional)

If you need custom headers or redirects, create an `amplify.yml` file:

```yaml
version: 1
frontend:
  phases:
    build:
      commands:
        - echo "Building static site"
  artifacts:
    baseDirectory: /
    files:
      - '**/*'
  cache:
    paths: []
customHeaders:
  - pattern: '**/*'
    headers:
      - key: 'Cache-Control'
        value: 'public, max-age=31536000, immutable'
      - key: 'X-Content-Type-Options'
        value: 'nosniff'
```

## 🎨 Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css` (lines 8-18):

```css
:root {
    /* Change these colors to customize the theme */
    --color-primary: #ff7eb3;           /* Main pink */
    --color-primary-light: #ffa8cc;     /* Light pink */
    --color-primary-dark: #ff5a9e;      /* Dark pink */
    --color-secondary: #c77dff;         /* Purple */
    --color-accent: #7c6bff;            /* Blue-purple */
    --color-background: #fff5fb;        /* Page background */
    --color-surface: #ffffff;           /* Card backgrounds */
    --color-text-primary: #2d1b3d;     /* Main text */
    --color-text-secondary: #6b5a7a;   /* Secondary text */
}
```

### Changing Content

All content is in `index.html`. Search for the section you want to edit:
- **Line 58-90**: Hero section (name, title, description)
- **Line 93-130**: About section
- **Line 133-230**: Experience section
- **Line 233-380**: Projects section
- **Line 383-520**: Skills section
- **Line 523-620**: Education & Certifications
- **Line 623-710**: Leadership section
- **Line 713-790**: Hobbies section
- **Line 793-870**: YouTube section
- **Line 873-1050**: Case Studies section
- **Line 1053-1090**: Contact section

### Adding Images

To add real images for hobbies:

1. Create an `images` folder in your project
2. Add your images to the folder
3. Replace the gradient backgrounds in HTML:

```html
<!-- Replace this: -->
<div class="hobby-image" style="background: linear-gradient(135deg, #ffc3e1 0%, #ff9ad5 100%);">
    <span class="hobby-icon">📸</span>
</div>

<!-- With this: -->
<div class="hobby-image">
    <img src="images/photography.jpg" alt="Photography" />
</div>
```

4. Add this CSS to `styles.css`:

```css
.hobby-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### Updating Links

Replace all placeholder links with your actual links:

**GitHub Links** - Search and replace:
- `https://github.com/gurpreetkaur` → Your actual GitHub profile

**YouTube Links** - In the YouTube section (lines 793-870):
- `https://www.youtube.com/watch?v=example1` → Your actual video URLs

**Contact Links**:
- Email: Line 1055
- LinkedIn: Line 1067
- GitHub: Line 1079

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- **968px**: Tablet adjustments
- **768px**: Mobile phones

To test responsiveness:
1. Open browser DevTools (F12)
2. Click the device toolbar icon
3. Test different screen sizes

## 🔧 Browser Compatibility

Tested and compatible with:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🎯 Performance Optimization

The website includes:
- CSS animations (GPU accelerated)
- Intersection Observer for lazy animations
- Debounced scroll events
- Minimal external dependencies
- Optimized image loading (when you add images)

## 📝 Future Enhancements

You can easily add:
- **Contact Form**: Add a form section with email integration
- **Blog Section**: Create a blog with article cards
- **Dark Mode**: Toggle button with localStorage
- **Analytics**: Add Google Analytics tracking
- **SEO Meta Tags**: Improve search engine visibility
- **Social Sharing**: Add Open Graph meta tags
- **Real Images**: Replace placeholder gradients with actual photos

## 🐛 Troubleshooting

### Issue: Fonts not loading
**Solution**: Check your internet connection. Fonts are loaded from Google Fonts CDN.

### Issue: Animations not working
**Solution**: Make sure JavaScript is enabled in your browser.

### Issue: Layout broken on mobile
**Solution**: Clear browser cache and reload the page.

### Issue: Smooth scroll not working
**Solution**: Ensure you're using a modern browser. Older browsers may not support smooth scrolling.

## 📄 License

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 🤝 Support

For questions or issues:
- **Email**: work.gurpreetk@gmail.com
- **LinkedIn**: [linkedin.com/in/gurpreet-kaurdata-analyst](https://www.linkedin.com/in/gurpreet-kaurdata-analyst)
- **GitHub**: [@gurpreetkaur](https://github.com/gurpreetkaur)

---

**Built with 💖 by Gurpreet Kaur**

*Last Updated: February 2026*
