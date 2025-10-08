// Language translations
const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        // Hero section
        "hero.typingText": "Hello, I'm Sunatillo — Backend Developer & Builder.",
        "hero.name": "Sunatillo Marufjanov",
        "hero.description": "17-year-old Python Backend Developer from Uzbekistan, passionate about building scalable, secure, and high-performance applications. I specialize in backend logic, API development, and system optimization.",
        "hero.viewProjects": "View Projects",
        "hero.getInTouch": "Get In Touch",

        // About section
        "about.title": "About Me",
        "about.text1": "Hello! I'm Sunatillo, a passionate backend developer from Uzbekistan. I started coding at the age of 14 and have since built over 10 professional projects, including APIs, marketplaces, bots, and financial systems.",
        "about.text2": "I'm fluent in Uzbek and Russian, with a B2+ level in English. My main focus is on backend development using Python, but I'm also expanding my skills in Go and have basic knowledge of C++.",
        "about.text3": "When I'm not coding, I enjoy learning about new technologies, contributing to open-source projects, and exploring the intersection of AI and backend development.",
        "about.stats.experience": "Years of Experience",
        "about.stats.projects": "Projects Completed",
        "about.stats.languages": "Languages",
        "about.stats.technologies": "Technologies",

        // Terminal
        "terminal.command1": "cat about_me.txt",
        "terminal.output1": "Name: Sunatillo Marufjanov<br>Age: 17<br>Location: Uzbekistan<br>Focus: Backend Development<br>Main Stack: Python, Django, FastAPI<br>Databases: PostgreSQL, SQLite<br>Other: Docker, Git, Linux, REST APIs",
        "terminal.command2": "./projects --status",
        "terminal.output2": "Currently working on: FinTech APIs & AI integration<br>Latest: ViewStore Marketplace (2 years development)<br>Next: Expanding Go skills & microservices",

        // Skills section
        "skills.title": "Skills & Technologies",
        "skills.categories.languages": "Programming Languages",
        "skills.categories.frameworks": "Frameworks & Libraries",
        "skills.categories.databases": "Databases & Tools",
        "skills.categories.specializations": "Specializations",
        "skills.specializations.backend": "Backend Development",
        "skills.specializations.api": "API Design",
        "skills.specializations.telegram": "Telegram Bots",
        "skills.specializations.ai": "AI Integration",
        "skills.specializations.payments": "Payment Systems",
        "skills.specializations.security": "Security",

        // Projects section
        "projects.title": "Featured Projects",
        "projects.project1.description": "A comprehensive banking/wallet system API built with Django REST Framework, featuring JWT authentication, transaction processing, and user account management.",
        "projects.project2.description": "A feature-rich Telegram bot for an online mobile shop with cart functionality, payment integration, and admin panel for inventory management.",
        "projects.project3.description": "A full-scale online marketplace with product listings, order management, user authentication, and admin panel. Developed over 2 years.",
        "projects.project4.description": "A notes API with full CRUD operations, user authentication, and permission system built with Django REST Framework.",
        "projects.project5.description": "A fullstack API project for a news application with user authentication, article management, and commenting system.",
        "projects.project6.description": "A high-performance CRUD application built with FastAPI, showcasing modern Python async capabilities and API documentation.",
        "projects.viewCode": "View Code",
        "projects.private": "Private",

        // Contact section
        "contact.title": "Get In Touch",
        "contact.telegram": "Telegram",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.instagram": "Instagram",
        "contact.form.name": "Your Name",
        "contact.form.namePlaceholder": "Enter your name",
        "contact.form.email": "Your Email",
        "contact.form.emailPlaceholder": "Enter your email",
        "contact.form.message": "Your Message",
        "contact.form.messagePlaceholder": "Enter your message",
        "contact.form.send": "Send Message",

        // Footer
        "footer.copyright": "© 2023 Sunatillo Marufjanov. All rights reserved."
    },
    uz: {
        // Navigation
        "nav.home": "Bosh sahifa",
        "nav.about": "Men haqimda",
        "nav.skills": "Ko'nikmalar",
        "nav.projects": "Loyihalar",
        "nav.contact": "Aloqa",

        // Hero section
        "hero.typingText": "Salom, men Sunatillo — Backend Dasturchi va Quruvchi.",
        "hero.name": "Sunatillo Marufjanov",
        "hero.description": "O'zbekistondan 17 yoshli Python Backend Dasturchisi, masshtablanuvchan, xavfsiz va yuqori samaradorlikdagi ilovalarni yaratishga ishtiyoqli. Men backend mantiqi, API ishlab chiqish va tizim optimallashtirishga ixtisoslashganman.",
        "hero.viewProjects": "Loyihalarni Ko'rish",
        "hero.getInTouch": "Bog'lanish",

        // About section
        "about.title": "Men haqimda",
        "about.text1": "Salom! Men Sunatillo, O'zbekistondan kelgan ishtiyoqli backend dasturchisiman. Dasturlashni 14 yoshimda boshlaganman va shundan beri API, bozorlar, botlar va moliyaviy tizimlarni o'z ichiga olgan 10 dan ortiq professional loyihalarni yaratganman.",
        "about.text2": "Men o'zbek va rus tillarida erkin, ingliz tilida B2+ darajada gapirayman. Mening asosiy e'tiborim Python yordamida backend ishlab chiqishga qaratilgan, ammo Go ko'nikmalarimni kengaytiryapman va C++ da asosiy bilimga egaman.",
        "about.text3": "Kod yozmayotgan vaqtimda, yangi texnologiyalarni o'rganish, ochiq manbali loyihalarga hissa qo'shish va Sun'iy Intellekt bilan backend ishlab chiqish kesishmasini o'rganishdan zavqlanaman.",
        "about.stats.experience": "Yillik Tajriba",
        "about.stats.projects": "Tugatilgan Loyihalar",
        "about.stats.languages": "Tillar",
        "about.stats.technologies": "Texnologiyalar",

        // Terminal
        "terminal.command1": "cat men_haqimda.txt",
        "terminal.output1": "Ism: Sunatillo Marufjanov<br>Yosh: 17<br>Manzil: O'zbekiston<br>Yo'nalish: Backend Dasturlash<br>Asosiy Texnologiyalar: Python, Django, FastAPI<br>Ma'lumot Bazalari: PostgreSQL, SQLite<br>Boshqa: Docker, Git, Linux, REST API",
        "terminal.command2": "./loyihalar --holat",
        "terminal.output2": "Hozirda ishlanmoqda: FinTech API va Sun'iy Intellekt integratsiyasi<br>So'nggi: ViewStore Bozori (2 yil davomida ishlab chiqilgan)<br>Keyingi: Go ko'nikmalarini kengaytirish va mikroservislar",

        // Skills section
        "skills.title": "Ko'nikmalar va Texnologiyalar",
        "skills.categories.languages": "Dasturlash Tillari",
        "skills.categories.frameworks": "Frameworklar va Kutubxonalar",
        "skills.categories.databases": "Ma'lumot Bazalari va Vositalar",
        "skills.categories.specializations": "Ixtisoslashuvlar",
        "skills.specializations.backend": "Backend Dasturlash",
        "skills.specializations.api": "API Dizayn",
        "skills.specializations.telegram": "Telegram Botlar",
        "skills.specializations.ai": "Sun'iy Intellekt Integratsiyasi",
        "skills.specializations.payments": "To'lov Tizimlari",
        "skills.specializations.security": "Xavfsizlik",

        // Projects section
        "projects.title": "Taniqli Loyihalar",
        "projects.project1.description": "Django REST Framework yordamida qurilgan keng qamrovli bank/hamyon tizimi API, JWT autentifikatsiyasi, tranzaksiya qayta ishlash va foydalanuvchi hisobini boshqarish xususiyatlariga ega.",
        "projects.project2.description": "Savat funksionalligi, to'lov integratsiyasi va inventar boshqaruvi uchun admin paneli bilan jihozlangan onlayn mobil do'kon uchun boy funksiyali Telegram bot.",
        "projects.project3.description": "Mahsulot ro'yxatlari, buyurtma boshqaruvi, foydalanuvchi autentifikatsiyasi va admin paneli bilan to'liq miqyosli onlayn bozor. 2 yil davomida ishlab chiqilgan.",
        "projects.project4.description": "Django REST Framework yordamida qurilgan to'liq CRUD operatsiyalari, foydalanuvchi autentifikatsiyasi va ruxsat tizimiga ega eslatmalar API.",
        "projects.project5.description": "Foydalanuvchi autentifikatsiyasi, maqola boshqaruvi va sharhlash tizimi bilan yangiliklar ilovasi uchun to'liq stack API loyihasi.",
        "projects.project6.description": "Zamonaviy Python asinxron qobiliyatlari va API hujjatlarini namoyish etadigan FastAPI yordamida qurilgan yuqori samaradorlikdagi CRUD ilovasi.",
        "projects.viewCode": "Kodni Ko'rish",
        "projects.private": "Shaxsiy",

        // Contact section
        "contact.title": "Bog'lanish",
        "contact.telegram": "Telegram",
        "contact.email": "Elektron Pochta",
        "contact.phone": "Telefon",
        "contact.instagram": "Instagram",
        "contact.form.name": "Ismingiz",
        "contact.form.namePlaceholder": "Ismingizni kiriting",
        "contact.form.email": "Elektron Pochtangiz",
        "contact.form.emailPlaceholder": "Elektron pochtangizni kiriting",
        "contact.form.message": "Xabaringiz",
        "contact.form.messagePlaceholder": "Xabaringizni kiriting",
        "contact.form.send": "Xabarni Yuborish",

        // Footer
        "footer.copyright": "© 2023 Sunatillo Marufjanov. Barcha huquqlar himoyalangan."
    },
    ru: {
        // Navigation
        "nav.home": "Главная",
        "nav.about": "Обо мне",
        "nav.skills": "Навыки",
        "nav.projects": "Проекты",
        "nav.contact": "Контакты",

        // Hero section
        "hero.typingText": "Привет, я Сунатилло — Backend Разработчик и Создатель.",
        "hero.name": "Сунатилло Маруфжанов",
        "hero.description": "17-летний Python Backend Разработчик из Узбекистана, увлеченный созданием масштабируемых, безопасных и высокопроизводительных приложений. Я специализируюсь на backend-логике, разработке API и оптимизации систем.",
        "hero.viewProjects": "Посмотреть Проекты",
        "hero.getInTouch": "Связаться",

        // About section
        "about.title": "Обо мне",
        "about.text1": "Привет! Я Сунатилло, увлеченный backend-разработчик из Узбекистана. Я начал программировать в 14 лет и с тех пор создал более 10 профессиональных проектов, включая API, маркетплейсы, ботов и финансовые системы.",
        "about.text2": "Я свободно владею узбекским и русским языками, с уровнем B2+ в английском. Моя основная специализация - backend-разработка на Python, но я также расширяю свои навыки в Go и имею базовые знания C++.",
        "about.text3": "Когда я не программирую, мне нравится изучать новые технологии, вносить вклад в проекты с открытым исходным кодом и исследовать пересечение ИИ и backend-разработки.",
        "about.stats.experience": "Лет Опыта",
        "about.stats.projects": "Завершенных Проектов",
        "about.stats.languages": "Языков",
        "about.stats.technologies": "Технологий",

        // Terminal
        "terminal.command1": "cat обо_мне.txt",
        "terminal.output1": "Имя: Сунатилло Маруфжанов<br>Возраст: 17<br>Местоположение: Узбекистан<br>Специализация: Backend Разработка<br>Основной Стек: Python, Django, FastAPI<br>Базы Данных: PostgreSQL, SQLite<br>Другое: Docker, Git, Linux, REST API",
        "terminal.command2": "./проекты --статус",
        "terminal.output2": "Сейчас работаю над: FinTech API и интеграцией ИИ<br>Последний: Маркетплейс ViewStore (разрабатывался 2 года)<br>Следующий: Расширение навыков Go и микросервисы",

        // Skills section
        "skills.title": "Навыки и Технологии",
        "skills.categories.languages": "Языки Программирования",
        "skills.categories.frameworks": "Фреймворки и Библиотеки",
        "skills.categories.databases": "Базы Данных и Инструменты",
        "skills.categories.specializations": "Специализации",
        "skills.specializations.backend": "Backend Разработка",
        "skills.specializations.api": "Дизайн API",
        "skills.specializations.telegram": "Телеграм Боты",
        "skills.specializations.ai": "Интеграция ИИ",
        "skills.specializations.payments": "Платежные Системы",
        "skills.specializations.security": "Безопасность",

        // Projects section
        "projects.title": "Избранные Проекты",
        "projects.project1.description": "Комплексный API банковской/кошельковой системы, построенный на Django REST Framework, с аутентификацией JWT, обработкой транзакций и управлением пользовательскими счетами.",
        "projects.project2.description": "Функциональный Telegram бот для онлайн-магазина мобильных устройств с корзиной, интеграцией платежей и админ-панелью для управления инвентарем.",
        "projects.project3.description": "Полноценный онлайн-маркетплейс с листингом товаров, управлением заказами, аутентификацией пользователей и админ-панелью. Разрабатывался более 2 лет.",
        "projects.project4.description": "API для заметок с полными CRUD операциями, аутентификацией пользователей и системой разрешений, построенный на Django REST Framework.",
        "projects.project5.description": "Полноценный API проект для новостного приложения с аутентификацией пользователей, управлением статьями и системой комментариев.",
        "projects.project6.description": "Высокопроизводительное CRUD приложение, построенное на FastAPI, демонстрирующее современные асинхронные возможности Python и документацию API.",
        "projects.viewCode": "Посмотреть Код",
        "projects.private": "Приватный",

        // Contact section
        "contact.title": "Связаться",
        "contact.telegram": "Телеграм",
        "contact.email": "Эл. Почта",
        "contact.phone": "Телефон",
        "contact.instagram": "Инстаграм",
        "contact.form.name": "Ваше Имя",
        "contact.form.namePlaceholder": "Введите ваше имя",
        "contact.form.email": "Ваш Email",
        "contact.form.emailPlaceholder": "Введите ваш email",
        "contact.form.message": "Ваше Сообщение",
        "contact.form.messagePlaceholder": "Введите ваше сообщение",
        "contact.form.send": "Отправить Сообщение",

        // Footer
        "footer.copyright": "© 2023 Сунатилло Маруфжанов. Все права защищены."
    }
};

// Language management
let currentLanguage = 'en';

function setLanguage(lang) {
    currentLanguage = lang;

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update placeholder texts
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update typing text if it exists
    if (translations[lang]["hero.typingText"]) {
        typingText = translations[lang]["hero.typingText"];
        // Reset and restart typing animation
        index = 0;
        typingElement.textContent = '';
        type();
    }

    // Update language switcher
    const currentLangElement = document.querySelector('.language-current .language-code');
    const currentFlagElement = document.querySelector('.language-current .language-flag');

    if (lang === 'en') {
        currentLangElement.textContent = 'EN';
        currentFlagElement.textContent = '🇺🇸';
    } else if (lang === 'uz') {
        currentLangElement.textContent = 'UZ';
        currentFlagElement.textContent = '🇺🇿';
    } else if (lang === 'ru') {
        currentLangElement.textContent = 'RU';
        currentFlagElement.textContent = '🇷🇺';
    }

    // Update active state in language options
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });

    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Typing Animation
const typingElement = document.getElementById('typing');
let typingText = "Hello, I'm Sunatillo — Backend Developer & Builder.";
let index = 0;

function type() {
    if (index < typingText.length) {
        typingElement.textContent += typingText.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    // Set language from localStorage or default to English
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLanguage);

    // Start typing animation
    type();

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Language Switcher
    const languageCurrent = document.querySelector('.language-current');
    const languageOptions = document.querySelector('.language-options');

    languageCurrent.addEventListener('click', (e) => {
        e.stopPropagation();
        languageOptions.classList.toggle('active');
    });

    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
            languageOptions.classList.remove('active');
        });
    });

    // Close language dropdown when clicking outside
    document.addEventListener('click', () => {
        languageOptions.classList.remove('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // In a real application, you would send this data to a server
        // For this demo, we'll just show an alert
        let successMessage = `Thank you for your message, ${name}! I'll get back to you soon.`;

        if (currentLanguage === 'uz') {
            successMessage = `Xabaringiz uchun rahmat, ${name}! Tez orada siz bilan bog'lanaman.`;
        } else if (currentLanguage === 'ru') {
            successMessage = `Спасибо за ваше сообщение, ${name}! Я свяжусь с вами в ближайшее время.`;
        }

        alert(successMessage);

        // Reset form
        contactForm.reset();
    });

    // Scroll animation
    function initScrollAnimation() {
        const elements = document.querySelectorAll('.project-card, .skill-category, .stat-item, .contact-item');

        // Set initial state for animation
        elements.forEach(el => {
            el.classList.add('fade-in-init');
        });

        function checkScroll() {
            elements.forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight - 100) {
                    el.classList.remove('fade-in-init');
                    el.classList.add('fade-in');
                }
            });
        }

        // Check on load and scroll
        window.addEventListener('load', checkScroll);
        window.addEventListener('scroll', checkScroll);

        // Initial check
        checkScroll();
    }

    // Initialize scroll animation
    initScrollAnimation();
});