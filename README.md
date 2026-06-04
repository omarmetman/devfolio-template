<div align="center">

# ✦ DevFolio Template ✦

<p align="center">
  <b>A hyper-minimal, lightning-fast, and highly customizable portfolio template for developers.</b>
</p>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fomarmetman%2Fdevfolio-template)

<br>

<p align="center">
  <a href="https://github.com/omarmetman/devfolio-template/stargazers"><img src="https://img.shields.io/github/stars/omarmetman/devfolio-template?style=for-the-badge&color=000000&logo=github&logoColor=white" alt="Stars" /></a>
  <a href="https://github.com/omarmetman/devfolio-template/network/members"><img src="https://img.shields.io/github/forks/omarmetman/devfolio-template?style=for-the-badge&color=000000&logo=github&logoColor=white" alt="Forks" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-000000?style=for-the-badge&logo=opensourceinitiative&logoColor=white" alt="License"></a>
</p>

</div>

<br>

## 🖼️ Visual Tour

<p align="center">
  <img src="https://i.ibb.co/MDTgMwFh/Screenshot-2026-06-04-183329.png" width="49%" alt="Hero Section" />
  <img src="https://i.ibb.co/q3Y0vrHM/Screenshot-2026-06-04-183343.png" width="49%" alt="About Section" />
</p>
<p align="center">
  <img src="https://i.ibb.co/hRJJLjsx/Screenshot-2026-06-04-183354.png" width="49%" alt="Experience Timeline" />
  <img src="https://i.ibb.co/VpTXRPVb/Screenshot-2026-06-04-183404.png" width="49%" alt="Contact Form" />
</p>

<br>

## 💡 Why DevFolio?

We believe your portfolio should highlight **your work**, not distract from it. DevFolio provides a sleek, dark-themed canvas engineered for performance and aesthetics.

* **Zero Build Tools:** No Webpack, no Babel, no complex setups. Just raw, optimized HTML/CSS/JS.
* **One-File Configuration:** Update your entire site (names, titles, animation speeds) from a single `CONFIG` object.
* **Built-in Integrations:** Direct Telegram contact form mapping without needing a backend server.
* **Instant Deployment:** Natively configured for Vercel. Push to GitHub and go live in seconds.

<br>

## ⚙️ Quick Start

### 1. Clone & Setup
```bash
git clone https://github.com/omarmetman/devfolio-template.git
cd devfolio-template
```

### 2. Configure Global Settings
Open `script.js` and edit the configuration block at the top:
```javascript
const CONFIG = {
  name: "Your Name",
  titles: ["Full Stack Developer", "Open Source Enthusiast", "UI/UX Designer"],
  typingSpeed: 80,
  deletingSpeed: 40,
  pauseAfterWord: 2000,
};
```

### 3. Setup Telegram Forwarding (Optional)
Receive contact form submissions directly to your phone. Inside `script.js`:
```javascript
const BOT_TOKEN = "YOUR_BOT_TOKEN_HERE";
const CHAT_ID = "YOUR_CHAT_ID_HERE";
```

### 4. Deploy
1. Commit your changes and push to your repository.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Click deploy. That's it!

<br>

## 🛠️ Stack & Architecture

<p align="left">
  <img src="https://skillicons.dev/icons?i=html,css,js,github,vercel" alt="Tech Stack" />
</p>

* **Frontend:** HTML5, CSS3 (Custom Properties & Flexbox/Grid), Vanilla JavaScript (ES6+).
* **Animations:** Native CSS Transitions & Intersection Observer API for scroll reveals.
* **Form Handling:** Async/Await Fetch API interacting with Telegram's Bot API.

<br>

## 📝 License & Credits

Released under the [MIT License](LICENSE). 

<div align="center">
  <hr>
  <b>Developed with precision by Omar M. Etman</b><br>
  Proudly Made in Egypt 🇪🇬
  <br><br>
  <a href="https://github.com/omarmetman">GitHub</a> • 
  <a href="https://omarmetman.vercel.app/">Portfolio</a>
</div>
