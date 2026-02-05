# 🚀 QUICK START GUIDE

## ⚡ Get Your Portfolio Running in 3 Steps

### Step 1: Test Locally (2 minutes)

**Option A - Using Python:**
```bash
cd portfolio
python -m http.server 8000
```
Then open: http://localhost:8000

**Option B - Double-click index.html**
Just open the `index.html` file in your browser!

---

### Step 2: Customize Your Content (15 minutes)

**Essential Updates:**

1. **Personal Links** - Open `index.html` and search for:
   - `work.gurpreetk@gmail.com` → Replace with YOUR email
   - `gurpreet-kaurdata-analyst` → Replace with YOUR LinkedIn username
   - `https://github.com/gurpreetkaur` → Replace with YOUR GitHub profile

2. **YouTube Videos** - Find the YouTube section (around line 795) and replace:
   - `https://www.youtube.com/watch?v=example1` → Your actual video URLs

3. **Projects** - Update GitHub links in Projects section (around line 240)

4. **Colors (Optional)** - Open `styles.css` and edit lines 8-18 for custom colors

---

### Step 3: Deploy to AWS Amplify (10 minutes)

**Method 1: Via GitHub (Recommended)**

1. Create a new repository on GitHub
2. Run these commands:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "My portfolio website"
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
3. Go to AWS Amplify Console
4. Click "New app" → "Host web app" → Select GitHub
5. Choose your repository → Click "Save and Deploy"
6. Done! Your site is live! 🎉

**Method 2: Direct Upload (Fastest)**

1. Zip all files (index.html, styles.css, script.js, amplify.yml)
2. Go to AWS Amplify Console
3. Click "New app" → "Deploy without Git"
4. Drag & drop your zip file
5. Done! Your site is live! 🎉

---

## 📁 File Structure

```
portfolio/
├── index.html       ← All your content is here
├── styles.css       ← All styling and colors
├── script.js        ← All animations and interactivity
├── amplify.yml      ← AWS Amplify configuration
└── README.md        ← Detailed documentation
```

---

## 🎨 Quick Customization Tips

### Change Main Colors
Edit `styles.css` lines 8-18:
```css
--color-primary: #ff7eb3;  /* Your main color */
--color-secondary: #c77dff; /* Your accent color */
```

### Add Your Photo
1. Create an `images` folder
2. Add your photo (e.g., `profile.jpg`)
3. In the About section, add:
   ```html
   <img src="images/profile.jpg" alt="Gurpreet Kaur" />
   ```

### Update Contact Info
Find these lines in `index.html`:
- Line 1055: Email address
- Line 1067: LinkedIn URL
- Line 1079: GitHub URL

---

## 🐛 Common Issues

**Problem: Fonts look weird**
- Solution: Check internet connection (fonts load from Google Fonts)

**Problem: Animations not working**
- Solution: Make sure JavaScript is enabled

**Problem: Layout broken on phone**
- Solution: Clear cache and reload

---

## 📞 Need Help?

- Read the full README.md for detailed instructions
- Test locally first before deploying
- Make sure all links are updated with YOUR information

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure you've updated:
- [ ] Email address (index.html line 1055)
- [ ] LinkedIn URL (index.html line 1067)
- [ ] GitHub URL (index.html line 1079)
- [ ] All project GitHub links (index.html lines 240-370)
- [ ] YouTube video links (index.html lines 795-870)
- [ ] Any placeholder content with your actual information

---

**You're all set! Your portfolio is ready to impress! 🌟**
