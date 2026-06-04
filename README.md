<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=00e5ff&height=250&section=header&text=DevFolio&fontSize=80&animation=fadeIn&fontAlignY=35&desc=Your%20Next%20Developer%20Portfolio&descAlignY=60&descAlign=50" alt="DevFolio Header" width="100%" />

  <a href="https://readme-typing-svg.herokuapp.com">
    <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=22&pause=1000&color=9d00ff&center=true&vCenter=true&width=600&lines=Modern+Dark+Theme+Design;Fully+Responsive+%26+Fast;Easy+to+Customize+in+Minutes;Direct+Vercel+Deployment" alt="Typing SVG" />
  </a>

  <br>

  <!-- Repo Stats Badges -->
  <a href="https://github.com/omarmetman/devfolio-template/stargazers"><img src="https://img.shields.io/github/stars/omarmetman/devfolio-template?style=for-the-badge&color=FFD700&logo=github&logoColor=white" alt="Stars" /></a>
  <a href="https://github.com/omarmetman/devfolio-template/network/members"><img src="https://img.shields.io/github/forks/omarmetman/devfolio-template?style=for-the-badge&color=007EC6&logo=github&logoColor=white" alt="Forks" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-28A745?style=for-the-badge&logo=opensourceinitiative&logoColor=white" alt="License: MIT"></a>

  <br><br>
  <b><a href="#-about-devfolio">About</a></b> •
  <b><a href="#-features-v2">Features</a></b> •
  <b><a href="#-quick-start">Quick Start</a></b> •
  <b><a href="#-project-structure">Structure</a></b> •
  <b><a href="#-deployment">Deployment</a></b>
</div>

<br>

---

## 📖 About DevFolio

**DevFolio** هو قالب جاهز لصفحة شخصية (Portfolio) مخصص للمطورين. مصمم بأحدث التقنيات مع تركيز خاص على الأداء، تجربة المستخدم، والمظهر الجمالي الحديث (Dark Theme مع لمسات من الـ Cyan والـ Purple).

الهدف من هذا القالب هو توفير عناء بناء صفحة شخصية من الصفر؛ كل ما تحتاجه هو عمل **Fork**، وتعديل بياناتك، ورفع الموقع مباشرة بضغطة زر.

<div align="center">
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fomarmetman%2Fdevfolio-template">
    <img src="https://vercel.com/button" alt="Deploy with Vercel" />
  </a>
</div>

---

## ✨ Features (v2)

تم تصميم هذا القالب ليكون ديناميكياً وتفاعلياً بأقل جهد ممكن:

| 🚀 الميزة | 📝 الوصف |
| :--- | :--- |
| **Dark / Light Mode** | دعم كامل للوضع الليلي والنهاري مع حفظ تفضيلات المستخدم في `localStorage`. |
| **Glassmorphism Design** | تأثيرات زجاجية أنيقة وخلفيات متدرجة تبرز أعمالك. |
| **Scroll Animations** | ظهور انسيابي للعناصر (Scroll Reveal) عند التمرير لأسفل الصفحة. |
| **Typing Effect** | تأثير الكتابة المتحركة لألقابك المهنية، قابل للتخصيص بالكامل. |
| **Interactive Components** | شرائط تقدم للمهارات (Skill Bars)، وعدادات إحصائيات متحركة. |
| **Experience Timeline** | عرض احترافي لخبراتك العملية والتعليمية في شكل مسار زمني. |
| **Telegram Contact Form** | نموذج تواصل يرسل الرسائل مباشرة إلى حسابك على تليجرام مع نظام تحقق (Validation). |
| **SEO Optimized** | يتضمن `JSON-LD Structured Data` لتحسين ظهورك في محركات البحث. |
| **Fully Responsive** | متوافق تماماً مع جميع الأجهزة (موبايل، تابلت، ديسكتوب). |

---

## 🛠️ Tech Stack

<div align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js,github,vercel&perline=5" alt="Tech Stack" />
</div>

---

## 🚀 Quick Start (البدء السريع)

لتبدأ في تخصيص القالب الخاص بك، اتبع هذه الخطوات البسيطة:

### 1. استنساخ المشروع (Clone)
```bash
git clone https://github.com/omarmetman/devfolio-template.git
cd devfolio-template
```

### 2. تخصيص بياناتك الأساسية
كل الإعدادات الديناميكية موجودة في ملف `script.js` داخل كائن `CONFIG`:
```javascript
const CONFIG = {
  name: "Your Name", // اسمك هنا
  titles: ["Full Stack Developer", "Open Source Enthusiast"], // ألقابك
  typingSpeed: 80,
  deletingSpeed: 40,
  pauseAfterWord: 2000,
};
```

### 3. تعديل المحتوى (HTML)
افتح ملف `index.html` وقم بتغيير:
- روابط السوشيال ميديا الخاصة بك.
- تفاصيل المشاريع (الصور، العناوين، والروابط).
- معلومات التواصل (البريد الإلكتروني، رقم الهاتف).
- الـ Meta Tags في الـ `<head>` لـ SEO.

### 4. إعداد نموذج التواصل (Telegram) *اختياري*
إذا كنت تريد تفعيل إرسال الرسائل من نموذج التواصل مباشرة إلى تليجرام، افتح `script.js` وقم بتعديل هذه المتغيرات:
```javascript
// احصل عليهم من @BotFather و @userinfobot
const BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"; 
const CHAT_ID = "YOUR_CHAT_ID_HERE";
```
*(ملاحظة: يمكنك حذف الكود الخاص بها إذا كنت تفضل استخدام خدمة أخرى مثل Formspree).*

---

## 📂 Project Structure (هيكل المشروع)

```text
devfolio-template/
├── index.html      # الهيكل الأساسي والمحتوى (SPA)
├── style.css       # التصميم (يدعم الوضعين الليلي والنهاري)
├── script.js       # التفاعلات، تأثيرات الحركة، وإرسال البيانات
├── vercel.json     # إعدادات التوجيه (Routing) لـ Vercel
├── package.json    # معلومات المشروع
├── LICENSE         # رخصة الاستخدام (MIT)
└── README.md       # هذا الملف (دليل الاستخدام)
```

---

## 🌐 Deployment (الرفع والنشر)

هذا القالب مصمم ليكون جاهزاً للرفع المباشر على **Vercel** بفضل ملف `vercel.json` المدمج.

```bash
# احفظ تعديلاتك
git add .
git commit -m "Personalize my portfolio"
git push origin main
```
بعد رفع الكود على GitHub، توجه إلى حسابك في Vercel، قم بإنشاء مشروع جديد، واختر المستودع الخاص بك. الموقع سيكون متاحاً للعالم في ثوانٍ!

---

## 🤝 Contributing (ساهم معنا)

هل لديك فكرة لتحسين القالب؟ نحن نرحب بمساهمات الجميع!
1. قم بعمل **Fork** للمستودع.
2. أنشئ فرعاً جديداً (`git checkout -b feature/CoolFeature`).
3. احفظ تعديلاتك (`git commit -m 'Add some CoolFeature'`).
4. ارفع الفرع (`git push origin feature/CoolFeature`).
5. افتح **Pull Request**.

---

<div align="center">
  Distributed under the <b>MIT License</b>. You are free to use it for personal or commercial projects.
  <br><br>
  <b>Developed by Omar M. Etman</b>
  <br><br>
  <a href="https://github.com/omarmetman">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://omarmetman.vercel.app/">
    <img src="https://img.shields.io/badge/Website-000000?style=for-the-badge&logo=Vercel&logoColor=white" alt="Website" />
  </a>
  <br><br>
  <b>صُنع في مصر 🇪🇬</b>
</div>
