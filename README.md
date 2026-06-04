# DevFolio — قالب صفحة شخصية للمطورين

<div dir="rtl">

**قالب بسيط وأنيق لصفحة شخصية للمطورين** — تصميم Dark Theme مع ألوان سيان وبنفسجي.
مجرد **Fork**، تغيير الاسم والروابط، ورفع مباشر على **Vercel**.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import)

</div>

---

## 🚀 البدء السريع

### 1. Fork و Clone

```bash
git clone https://github.com/<your-username>/devfolio-template.git
cd devfolio-template
```

### 2. عدّل معلوماتك

**A. الاسم والعناوين** — في `script.js` غيّر كائن `CONFIG`:

```js
const CONFIG = {
  name: "Your Name",
  titles: ["Full Stack Developer", "Open Source Enthusiast", "..."],
  typingSpeed: 80,
  deletingSpeed: 40,
  pauseAfterWord: 2000,
};
```

**B. الروابط والنصوص** — في `index.html`:
- أيقونات السوشيال ميديا (`href`)
- المشاريع (Projects cards)
- البريد الإلكتروني في Contact
- اسم الموقع ووصفه في `<head>`

**C. التواصل عبر التليجرام (اختياري)**
في `script.js` ابحث عن:

```js
const BOT_TOKEN = "YOUR_BOT_TOKEN";
const CHAT_ID = "YOUR_CHAT_ID";
```

استبدلها ببيانات بوت تليجرام بتاعك، أو احذف الكود لو مش عايز الخدمة.

### 3. ارفع على Vercel

```bash
# عن طريق Git
git add .
git commit -m "My portfolio"
git push origin main
```

وصّل репозитори بـ Vercel (أو استعمل الزر فوق) — خلاص، الموقع شغال 🎉

---

## 📁 هيكل المشروع

```
devfolio-template/
├── index.html      # الصفحة الرئيسية (SPA)
├── style.css       # كل الأنماط (Dark Theme)
├── script.js       # التفاعلات (كونفيج + typing + form)
├── vercel.json     # إعدادات النشر
├── package.json    # بيانات المشروع
├── LICENSE         # MIT
└── README.md       # هذا الملف
```

---

## 🎨 خصائص القالب v2

- **Dark / Light Mode** — مع toggle و localStorage و system preference
- **Scroll Reveal Animations** — العناصر تظهر بحركة انسيابية عند التمرير
- **Typing Effect** — ألقاب متحركة متعددة
- **Skill Progress Bars** — متحركة عند الظهور
- **Stats Counter** — عد تنازلي متحرك للأرقام
- **Experience Timeline** — عرض الخبرات بشكل زمني
- **Glassmorphism** — تأثير زجاجي أنيق
- **Contact Form** — إرسال رسائل عبر Telegram مع validation
- **Scroll Progress Bar** — مؤشر التقدم في أعلى الصفحة
- **Back to Top** — زر عودة للأعلى
- **Nav Active Link** — يتغير تلقائيًا حسب القسم
- **JSON-LD Structured Data** — لتحسين SEO
- **Responsive** — جوال، تابلت، ديسكتوب
- **جاهز لـ Vercel** — SPA routes جاهزة
- **سهل التخصيص** — كل حاجة في مكانها (CONFIG في script.js)

---

## 📄 الترخيص

MIT — استخدمه كيفما تشاء، تجاري أو شخصي.

---

## 💙 ساهم

حبينا نشتغل مع بعض؟ اعمل **Fork**، عدّل، وابعلي **Pull Request**.

---

<div dir="rtl" align="center">
  <b>صُنع في مصر 🇪🇬</b>
</div>
