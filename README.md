<div align="center">
  <h1 align="center">✨ DevFolio Template ✨</h1>
  <h3>A Sleek, Modern, and Highly Customizable Developer Portfolio</h3>

  <p align="center">
    <a href="https://github.com/omarmetman/devfolio-template/stargazers"><img src="https://img.shields.io/github/stars/omarmetman/devfolio-template?style=flat-square&color=00e5ff&logo=github&logoColor=white" alt="Stars" /></a>
    <a href="https://github.com/omarmetman/devfolio-template/network/members"><img src="https://img.shields.io/github/forks/omarmetman/devfolio-template?style=flat-square&color=9d00ff&logo=github&logoColor=white" alt="Forks" /></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-success?style=flat-square&logo=opensourceinitiative&logoColor=white" alt="License"></a>
  </p>

  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fomarmetman%2Fdevfolio-template">
    <img src="https://vercel.com/button" alt="Deploy with Vercel" />
  </a>
</div>

---

## 📸 Preview

<div align="center">
  <img src="https://i.ibb.co/MDTgMwFh/Screenshot-2026-06-04-183329.png" width="49%" alt="Preview 1">
  <img src="https://i.ibb.co/q3Y0vrHM/Screenshot-2026-06-04-183343.png" width="49%" alt="Preview 2">
  <br>
  <br>
  <img src="https://i.ibb.co/hRJJLjsx/Screenshot-2026-06-04-183354.png" width="49%" alt="Preview 3">
  <img src="https://i.ibb.co/VpTXRPVb/Screenshot-2026-06-04-183404.png" width="49%" alt="Preview 4">
</div>

---

## 🚀 About The Project

**DevFolio** is a ready-to-use, single-page application (SPA) portfolio template crafted specifically for developers. It features a modern dark theme with neon cyan and purple accents, glassmorphism elements, and smooth scroll animations. 

The goal is simple: Fork the repo, update your details in a single configuration file, and deploy it to Vercel in seconds. No complex build tools or messy code diving required!

---

## 💎 Key Features

- 🌓 **Dark / Light Mode:** Fully integrated theme toggler with `localStorage` memory and system preference detection.
- ⌨️ **Dynamic Typing Effect:** Eye-catching animated job titles that you can customize easily.
- 🧊 **Glassmorphism UI:** Modern frosted glass effects and beautiful gradient backgrounds.
- 📜 **Scroll Animations:** Elements smoothly reveal themselves as the user scrolls down.
- 📊 **Interactive Stats & Skills:** Animated progress bars and a dynamic stats counter.
- ⏱️ **Experience Timeline:** A clean, professional vertical timeline to showcase your work history and education.
- 📨 **Telegram Contact Form:** A built-in contact form that sends messages directly to your Telegram bot (includes validation).
- 📱 **100% Responsive:** Looks perfect on desktops, tablets, and mobile devices.
- ⚡ **SEO & Performance:** Optimized structure with JSON-LD structured data included.

---

## 🛠️ Quick Start Guide

Follow these steps to get your portfolio up and running locally.

### 1. Clone the Repository
```bash
git clone https://github.com/omarmetman/devfolio-template.git
cd devfolio-template
```

### 2. Personalize Your Data
All major configurations are centralized. Open `script.js` and locate the `CONFIG` object:
```javascript
const CONFIG = {
  name: "Your Name",
  titles: ["Full Stack Developer", "Open Source Enthusiast", "UI/UX Designer"],
  typingSpeed: 80,
  deletingSpeed: 40,
  pauseAfterWord: 2000,
};
```

### 3. Update the HTML Content
Open `index.html` to update:
- Social media links (GitHub, LinkedIn, etc.)
- Project cards (Images, Titles, Descriptions, Links)
- Contact email and phone number
- Website `<title>` and meta descriptions.

### 4. Setup Telegram Form (Optional)
To receive messages directly to your Telegram, update these variables in `script.js`:
```javascript
const BOT_TOKEN = "YOUR_BOT_TOKEN";
const CHAT_ID = "YOUR_CHAT_ID";
```
*If you prefer not to use this feature, simply remove or comment out the related code.*

---

## 🚢 Deployment

This template is optimized for zero-config deployment on **Vercel** via the included `vercel.json` file.

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Personalize portfolio"
   git push origin main
   ```
2. Go to your [Vercel Dashboard](https://vercel.com/dashboard).
3. Click **Add New Project** and import your repository.
4. Click **Deploy**. Your site will be live in seconds!

---

## 📂 Folder Structure

```text
devfolio-template/
├── index.html      # Main HTML and content
├── style.css       # Styling, animations, and theming
├── script.js       # Core logic, config, and form handling
├── vercel.json     # Vercel routing configuration
├── package.json    # Project metadata
├── LICENSE         # MIT License
└── README.md       # Documentation
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. Use it for your personal or commercial projects freely.

<br>

<div align="center">
  <b>Made in Egypt 🇪🇬</b>
  <br><br>
  Developed by <b>Omar M. Etman</b>
  <br><br>
  <a href="https://github.com/omarmetman">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://omarmetman.vercel.app/">
    <img src="https://img.shields.io/badge/Website-000000?style=for-the-badge&logo=Vercel&logoColor=white" alt="Website" />
  </a>
</div>
