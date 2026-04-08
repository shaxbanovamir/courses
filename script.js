// ============================================
// ДАННЫЕ КУРСОВ (все 52 курса)
// ============================================
const courses = [
    { id: 1, title: "Основы программирования", author: "Иван Иванов", description: "Алгоритмы, структуры данных, основы ООП.", url: "#", icon: "💻", category: "programming", price: "free" },
    { id: 2, title: "Python для начинающих", author: "Елена Козлова", description: "Основы Python: переменные, циклы, функции.", url: "#", icon: "🐍", category: "python", price: "free" },
    { id: 3, title: "Продвинутый Python", author: "Дмитрий Соколов", description: "Декораторы, генераторы, асинхронность.", url: "#", icon: "🐍", category: "python", price: "paid" },
    { id: 4, title: "JavaScript с нуля", author: "Мария Петрова", description: "ES6+, асинхронность, DOM, Fetch API.", url: "#", icon: "⚡", category: "js", price: "free" },
    { id: 5, title: "C++ для начинающих", author: "Алексей Смирнов", description: "Указатели, ссылки, классы.", url: "#", icon: "⚙️", category: "cpp", price: "free" },
    { id: 6, title: "C# и .NET", author: "Ольга Новикова", description: "LINQ, асинхронность, создание приложений.", url: "#", icon: "🎯", category: "csharp", price: "paid" },
    { id: 7, title: "Java для начинающих", author: "Антон Белов", description: "ООП, коллекции, многопоточность.", url: "#", icon: "☕", category: "programming", price: "free" },
    { id: 8, title: "Go язык программирования", author: "Сергей Крылов", description: "Горутины, каналы, веб-серверы.", url: "#", icon: "🔵", category: "programming", price: "paid" },
    { id: 9, title: "Rust для безопасного кода", author: "Денис Волков", description: "Заимствования, lifetimes, производительность.", url: "#", icon: "🦀", category: "programming", price: "paid" },
    { id: 10, title: "Kotlin для Android", author: "Екатерина Мороз", description: "Создание приложений под Android.", url: "#", icon: "📱", category: "mobile", price: "free" },
    { id: 11, title: "HTML и CSS полный курс", author: "Иван Иванов", description: "Flexbox, Grid, адаптивная вёрстка.", url: "#", icon: "📘", category: "web", price: "free" },
    { id: 12, title: "React для начинающих", author: "Алексей Смирнов", description: "Компоненты, хуки, роутинг.", url: "#", icon: "⚛️", category: "web", price: "free" },
    { id: 13, title: "Node.js backend", author: "Максим Фёдоров", description: "Express, REST API, MongoDB, JWT.", url: "#", icon: "🟢", category: "web", price: "paid" },
    { id: 14, title: "Vue.js с нуля", author: "Анна Морозова", description: "Компоненты, Vuex, роутинг.", url: "#", icon: "💚", category: "web", price: "free" },
    { id: 15, title: "Angular полный курс", author: "Павел Семёнов", description: "TypeScript, RxJS, Dependency Injection.", url: "#", icon: "🅰️", category: "web", price: "paid" },
    { id: 16, title: "Next.js с нуля", author: "Анна Морозова", description: "SSR, SSG, API routes.", url: "#", icon: "▲", category: "web", price: "free" },
    { id: 17, title: "Tailwind CSS мастерство", author: "Иван Иванов", description: "Утилитарные классы, адаптивность.", url: "#", icon: "🎨", category: "web", price: "free" },
    { id: 18, title: "GraphQL для фронтенда", author: "Максим Фёдоров", description: "Apollo Client, запросы, мутации.", url: "#", icon: "📊", category: "web", price: "paid" },
    { id: 19, title: "Машинное обучение", author: "Андрей Ветров", description: "Scikit-learn, pandas, matplotlib.", url: "#", icon: "🤖", category: "ai", price: "free" },
    { id: 20, title: "Глубокое обучение", author: "Елена Соколова", description: "TensorFlow, Keras, нейронные сети.", url: "#", icon: "🧠", category: "ai", price: "paid" },
    { id: 21, title: "ChatGPT и LLM", author: "Дмитрий Орлов", description: "Промпт-инжиниринг, API OpenAI.", url: "#", icon: "💬", category: "ai", price: "free" },
    { id: 22, title: "Компьютерное зрение", author: "Мария Соболева", description: "OpenCV, распознавание образов.", url: "#", icon: "👁️", category: "ai", price: "paid" },
    { id: 23, title: "NLP для всех", author: "Андрей Ветров", description: "Обработка текста, трансформеры.", url: "#", icon: "📝", category: "ai", price: "free" },
    { id: 24, title: "React Native", author: "Екатерина Мороз", description: "Кроссплатформенные приложения.", url: "#", icon: "📱", category: "mobile", price: "free" },
    { id: 25, title: "Flutter для начинающих", author: "Игорь Крылов", description: "Dart, виджеты, состояние.", url: "#", icon: "🦋", category: "mobile", price: "free" },
    { id: 26, title: "Swift и iOS", author: "Ольга Новикова", description: "UIKit, SwiftUI, CoreData.", url: "#", icon: "🍎", category: "mobile", price: "paid" },
    { id: 27, title: "Android Studio", author: "Павел Семёнов", description: "Kotlin, Jetpack Compose.", url: "#", icon: "🤖", category: "mobile", price: "free" },
    { id: 28, title: "Docker для начинающих", author: "Сергей Крылов", description: "Контейнеризация, Dockerfile.", url: "#", icon: "🐳", category: "devops", price: "free" },
    { id: 29, title: "Kubernetes", author: "Антон Белов", description: "Оркестрация, pods, services.", url: "#", icon: "☸️", category: "devops", price: "paid" },
    { id: 30, title: "CI/CD pipelines", author: "Денис Волков", description: "GitLab CI, GitHub Actions.", url: "#", icon: "⚙️", category: "devops", price: "free" },
    { id: 31, title: "Linux для админов", author: "Сергей Крылов", description: "Bash, systemd, сети.", url: "#", icon: "🐧", category: "devops", price: "free" },
    { id: 32, title: "Terraform", author: "Антон Белов", description: "Infrastructure as Code.", url: "#", icon: "🏗️", category: "devops", price: "paid" },
    { id: 33, title: "SQL для анализа данных", author: "Андрей Ветров", description: "SELECT, JOIN, оконные функции.", url: "#", icon: "🗄️", category: "data", price: "free" },
    { id: 34, title: "Data Visualization", author: "Мария Соболева", description: "Tableau, Power BI, matplotlib.", url: "#", icon: "📊", category: "data", price: "free" },
    { id: 35, title: "Big Data", author: "Дмитрий Орлов", description: "Spark, Hadoop, Hive.", url: "#", icon: "💾", category: "data", price: "paid" },
    { id: 36, title: "Python for Data Science", author: "Андрей Ветров", description: "NumPy, pandas, seaborn.", url: "#", icon: "🐍", category: "data", price: "free" },
    { id: 37, title: "Figma для начинающих", author: "Татьяна Васильева", description: "Автолейауты, компоненты, прототипы.", url: "#", icon: "🎨", category: "design", price: "free" },
    { id: 38, title: "UI/UX дизайн", author: "Сергей Павлов", description: "Юзабилити, интерфейсы, тестирование.", url: "#", icon: "✨", category: "design", price: "paid" },
    { id: 39, title: "Adobe Photoshop", author: "Анна Морозова", description: "Ретушь, коллажи, слои.", url: "#", icon: "🎨", category: "design", price: "free" },
    { id: 40, title: "Adobe Illustrator", author: "Татьяна Васильева", description: "Векторная графика, логотипы.", url: "#", icon: "✏️", category: "design", price: "free" },
    { id: 41, title: "Blender 3D", author: "Сергей Павлов", description: "Моделирование, анимация.", url: "#", icon: "🧊", category: "design", price: "paid" },
    { id: 42, title: "SMM с нуля", author: "Юлия Ковалёва", description: "Стратегия, контент, таргетинг.", url: "#", icon: "📱", category: "marketing", price: "free" },
    { id: 43, title: "SEO оптимизация", author: "Дмитрий Орлов", description: "Ключевые слова, ссылки, аналитика.", url: "#", icon: "🔍", category: "marketing", price: "paid" },
    { id: 44, title: "Таргетолог", author: "Юлия Ковалёва", description: "Настройка рекламы в соцсетях.", url: "#", icon: "🎯", category: "marketing", price: "free" },
    { id: 45, title: "Email маркетинг", author: "Анна Морозова", description: "Рассылки, автоматизация.", url: "#", icon: "📧", category: "marketing", price: "free" },
    { id: 46, title: "Контекстная реклама", author: "Дмитрий Орлов", description: "Яндекс.Директ, Google Ads.", url: "#", icon: "💵", category: "marketing", price: "paid" },
    { id: 47, title: "Git и GitHub", author: "Денис Волков", description: "Контроль версий, ветки, PR.", url: "#", icon: "📚", category: "programming", price: "free" },
    { id: 48, title: "Английский для IT", author: "Елена Козлова", description: "Технический английский.", url: "#", icon: "🇬🇧", category: "programming", price: "free" },
    { id: 49, title: "Собеседование в IT", author: "Иван Иванов", description: "Подготовка к интервью.", url: "#", icon: "🎤", category: "programming", price: "free" },
    { id: 50, title: "Блокчейн и Web3", author: "Антон Белов", description: "Смарт-контракты, Ethereum.", url: "#", icon: "⛓️", category: "programming", price: "paid" },
    { id: 51, title: "Кибербезопасность", author: "Сергей Крылов", description: "Сети, шифрование, взлом.", url: "#", icon: "🔒", category: "programming", price: "free" },
    { id: 52, title: "Алгоритмы и структуры", author: "Дмитрий Соколов", description: "Сортировки, деревья, графы.", url: "#", icon: "🧩", category: "programming", price: "free" }
];

// ===== LocalStorage =====
function getSubscribedCourses() {
    const subs = localStorage.getItem("subscribedCourses");
    return subs ? JSON.parse(subs) : [];
}

function saveSubscribedCourses(subs) {
    localStorage.setItem("subscribedCourses", JSON.stringify(subs));
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.isLoggedIn) {
        user.subscribedCourses = subs;
        localStorage.setItem("user", JSON.stringify(user));
    }
}

function subscribeToCourse(courseId) {
    let subs = getSubscribedCourses();
    if (!subs.includes(courseId)) {
        subs.push(courseId);
        saveSubscribedCourses(subs);
    }
    if (window.location.pathname.includes("courses.html")) renderAllCoursesPage();
    else if (window.location.pathname.includes("profile.html")) renderMyCourses();
}

function unsubscribeFromCourse(courseId) {
    let subs = getSubscribedCourses();
    subs = subs.filter(id => id !== courseId);
    saveSubscribedCourses(subs);
    if (window.location.pathname.includes("courses.html")) renderAllCoursesPage();
    else if (window.location.pathname.includes("profile.html")) renderMyCourses();
}

function isSubscribed(courseId) {
    return getSubscribedCourses().includes(courseId);
}

function getCategoryName(category) {
    const names = {
        "programming": "Программирование", "web": "Веб-разработка",
        "python": "Python", "js": "JavaScript", "cpp": "C++",
        "csharp": "C#", "design": "Дизайн", "marketing": "Маркетинг",
        "ai": "AI & ML", "mobile": "Мобильная разработка", "devops": "DevOps", "data": "Data Science"
    };
    return names[category] || category;
}

// ===== Страница ВСЕХ КУРСОВ =====
function renderAllCoursesPage() {
    const container = document.getElementById("allCoursesContainer");
    if (!container) return;
    
    let filtered = [...courses];
    
    const selectedCategories = [];
    const selectedPrices = [];
    
    document.querySelectorAll('.filter-checkbox input[data-category]').forEach(cb => {
        if (cb.checked && cb.dataset.category !== "all") selectedCategories.push(cb.dataset.category);
    });
    document.querySelectorAll('.filter-checkbox input[data-price]').forEach(cb => {
        if (cb.checked) selectedPrices.push(cb.dataset.price);
    });
    
    if (selectedCategories.length > 0) {
        filtered = filtered.filter(c => selectedCategories.includes(c.category));
    }
    if (selectedPrices.length > 0) {
        filtered = filtered.filter(c => selectedPrices.includes(c.price));
    }
    
    const searchInput = document.getElementById("coursesSearchInput");
    if (searchInput && searchInput.value.trim()) {
        const searchTerm = searchInput.value.toLowerCase();
        filtered = filtered.filter(c => c.title.toLowerCase().includes(searchTerm));
    }
    
    if (filtered.length === 0) {
        container.innerHTML = `<div class="empty-courses-message"><p>😢 Курсов не найдено</p></div>`;
        return;
    }
    
    container.innerHTML = filtered.map(course => {
        const isSub = isSubscribed(course.id);
        const priceText = course.price === "free" ? "🆓 Бесплатно" : "💎 Платный";
        const priceClass = course.price === "free" ? "price-free-tag" : "price-paid-tag";
        return `
            <div class="course-card">
                <div class="course-image">${course.icon}</div>
                <div class="course-content">
                    <h3 class="course-title">${course.title}</h3>
                    <div class="course-author">👨‍🏫 ${course.author}</div>
                    <div class="course-category">📁 ${getCategoryName(course.category)}</div>
                    <div class="course-price ${priceClass}">${priceText}</div>
                    <p class="course-description">${course.description}</p>
                    <button class="btn-subscribe ${isSub ? 'btn-subscribed' : ''}" onclick="subscribeToCourse(${course.id})">
                        ${isSub ? '✓ Записан' : '📚 Записаться'}
                    </button>
                    ${isSub ? `<button class="btn-subscribe unsubscribe-btn" onclick="unsubscribeFromCourse(${course.id})">❌ Отписаться</button>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function setupCoursesPageFilters() {
    const checkboxes = document.querySelectorAll('.filter-checkbox input');
    const resetBtn = document.getElementById("resetFiltersBtn");
    const searchInput = document.getElementById("coursesSearchInput");
    
    if (checkboxes.length === 0) return;
    
    function updateFilters() {
        renderAllCoursesPage();
    }
    
    checkboxes.forEach(cb => {
        cb.addEventListener('change', updateFilters);
    });
    
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            checkboxes.forEach(cb => {
                cb.checked = false;
            });
            const allCheckbox = document.querySelector('.filter-checkbox input[data-category="all"]');
            if (allCheckbox) allCheckbox.checked = true;
            if (searchInput) searchInput.value = '';
            updateFilters();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', updateFilters);
    }
    
    renderAllCoursesPage();
}

// ===== Страница ПРОФИЛЯ =====
function renderMyCourses() {
    const container = document.getElementById("myCoursesList");
    if (!container) return;
    
    const subscribedIds = getSubscribedCourses();
    const myCourses = courses.filter(c => subscribedIds.includes(c.id));
    
    if (myCourses.length === 0) {
        container.innerHTML = `<div class="empty-courses"><p>📭 Вы еще не записаны ни на один курс.</p><a href="courses.html" class="back-btn">Перейти к курсам</a></div>`;
        return;
    }
    
    container.innerHTML = myCourses.map(course => {
        const priceText = course.price === "free" ? "🆓 Бесплатно" : "💎 Платный";
        return `
            <div class="course-card">
                <div class="course-image">${course.icon}</div>
                <div class="course-content">
                    <h3 class="course-title">${course.title}</h3>
                    <div class="course-author">👨‍🏫 ${course.author}</div>
                    <div class="course-price ${course.price === 'free' ? 'price-free-tag' : 'price-paid-tag'}">${priceText}</div>
                    <p class="course-description">${course.description}</p>
                    <button class="btn-subscribe unsubscribe-btn" onclick="unsubscribeFromCourse(${course.id})">❌ Отписаться</button>
                </div>
            </div>
        `;
    }).join('');
}

// ===== GOOGLE AUTH =====
const GOOGLE_CLIENT_ID = "258425274420-02l9je5d15qkmsr45sa42cq54nn5dub4.apps.googleusercontent.com";

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

function updateUIForLoggedInUser(user) {
    const loginContainer = document.getElementById("login-container");
    const userInfoContainer = document.getElementById("user-info");
    const userNameSpan = document.getElementById("user-name");
    const userAvatar = document.getElementById("user-avatar");
    
    if (loginContainer && userInfoContainer) {
        loginContainer.style.display = "none";
        userInfoContainer.style.display = "flex";
        if (userNameSpan) userNameSpan.textContent = user.name;
        if (userAvatar) userAvatar.src = user.picture;
    }
    
    if (window.location.pathname.includes("profile.html")) {
        const profileHeader = document.getElementById("profileHeader");
        const profileAvatar = document.getElementById("profileAvatar");
        const profileName = document.getElementById("profileName");
        const profileEmail = document.getElementById("profileEmail");
        if (profileHeader) profileHeader.style.display = "flex";
        if (profileAvatar) profileAvatar.src = user.picture;
        if (profileName) profileName.textContent = user.name;
        if (profileEmail) profileEmail.textContent = user.email;
        renderMyCourses();
    }
}

function handleCredentialResponse(response) {
    const decodedToken = parseJwt(response.credential);
    const userData = {
        name: decodedToken.name,
        email: decodedToken.email,
        picture: decodedToken.picture,
        isLoggedIn: true,
        subscribedCourses: getSubscribedCourses()
    };
    localStorage.setItem("user", JSON.stringify(userData));
    updateUIForLoggedInUser(userData);
}

function logout() {
    localStorage.removeItem("user");
    window.location.reload();
}

function checkExistingSession() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.isLoggedIn) {
        updateUIForLoggedInUser(user);
        return user;
    }
    return null;
}

function initGoogleLogin() {
    if (typeof google === 'undefined') {
        setTimeout(initGoogleLogin, 100);
        return;
    }
    
    google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
        auto_select: false,
        cancel_on_tap_outside: true
    });
    
    const btnContainer = document.getElementById("google-login-btn");
    if (btnContainer) {
        google.accounts.id.renderButton(btnContainer, {
            theme: "outline",
            size: "large",
            text: "signin_with",
            shape: "rectangular"
        });
    }
    checkExistingSession();
}

// ===== АНИМИРОВАННЫЙ ФОН =====
function createCodeBackground() {
    const container = document.getElementById("codeBackground");
    if (!container) return;
    
    const codeSnippets = [
        'print("Hello World!")', 'def hello(): return "Hi"', 'const x = 42;',
        'function greet() {}', 'for i in range(10):', 'console.log("Hello");',
        'let name = "User";', 'class Dog {}', 'import React from "react"',
        'npm start', 'git commit -m "init"', '<div className="app">',
        'useState(0)', 'return <h1>Hi</h1>', 'while True: pass',
        'if __name__ == "__main__"', 'arr.map(item => item)'
    ];
    
    for (let i = 0; i < 25; i++) {
        const line = document.createElement("div");
        line.className = "code-line";
        line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        line.style.top = Math.random() * 100 + "%";
        line.style.left = Math.random() * 100 + "%";
        line.style.fontSize = (Math.random() * 14 + 10) + "px";
        line.style.animationDuration = (Math.random() * 15 + 10) + "s";
        line.style.animationDelay = (Math.random() * 5) + "s";
        line.style.opacity = Math.random() * 0.5 + 0.2;
        container.appendChild(line);
    }
}

// ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====
function setupContactForm() {
    const form = document.getElementById("courseRequestForm");
    if (!form) return;
    
    // Инициализация EmailJS с твоим Public Key
    emailjs.init("rDuHRkbu4mt11yQy5");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("userName").value;
        const email = document.getElementById("userEmail").value;
        const level = document.getElementById("userLevel").value;
        const interest = document.getElementById("userInterest").value;
        const message = document.getElementById("userMessage").value;
        
        // Параметры, которые попадут в шаблон
        const templateParams = {
            from_name: name,
            from_email: email,
            level: level || "Не указан",
            interest: interest || "Не указано",
            message: message || "Без дополнительных пожеланий"
        };
        
        // Отправка письма
        emailjs.send("service_my", "template_5c6mbhz", templateParams)
            .then(() => {
                alert("✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
                form.reset();
            })
            .catch((error) => {
                console.error("Ошибка:", error);
                alert("❌ Произошла ошибка. Попробуйте позже или свяжитесь по телефону.");
            });
    });
}

function setupSmoothScroll() {
    const links = document.querySelectorAll('.top-nav a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function setupWidgets() {
    const widgets = document.querySelectorAll(".widget-card");
    widgets.forEach(widget => {
        widget.addEventListener("click", () => {
            const category = widget.dataset.category;
            // Передаём категорию в URL параметром ?category=
            window.location.href = `courses.html?category=${category}`;
        });
    });
    
    const scrollLeftBtn = document.getElementById("scrollLeft");
    const scrollRightBtn = document.getElementById("scrollRight");
    const widgetsGrid = document.getElementById("widgetsGrid");
    
    if (scrollLeftBtn && scrollRightBtn && widgetsGrid) {
        scrollLeftBtn.addEventListener("click", () => {
            widgetsGrid.scrollBy({ left: -280, behavior: "smooth" });
        });
        scrollRightBtn.addEventListener("click", () => {
            widgetsGrid.scrollBy({ left: 280, behavior: "smooth" });
        });
    }
}

function setupFilterDropdown() {
    const filterBtn = document.getElementById("filterToggleBtn");
    const dropdown = document.getElementById("filterDropdown");
    
    if (!filterBtn || !dropdown) return;
    
    filterBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
    
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target) && e.target !== filterBtn) {
            dropdown.style.display = "none";
        }
    });
}

function loadCategoryPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('cat');
    const categoryTitle = document.getElementById("categoryTitle");
    const categoryContainer = document.getElementById("categoryCourses");
    
    if (categoryTitle && categoryContainer) {
        const categoryNames = {
            "programming": "💻 Программирование", "web": "🌐 Веб-разработка",
            "python": "🐍 Python", "js": "⚡ JavaScript", "cpp": "⚙️ C++",
            "csharp": "🎯 C#", "design": "🎨 Дизайн", "marketing": "📊 Маркетинг",
            "ai": "🤖 AI & ML", "mobile": "📱 Мобильная разработка",
            "devops": "🚀 DevOps", "data": "📈 Data Science"
        };
        
        categoryTitle.textContent = categoryNames[category] || "Курсы";
        const filtered = courses.filter(c => c.category === category);
        
        if (filtered.length === 0) {
            categoryContainer.innerHTML = `<div class="empty-courses"><p>😢 В этой категории пока нет курсов</p></div>`;
            return;
        }
        
        categoryContainer.innerHTML = filtered.map(course => {
            const isSub = isSubscribed(course.id);
            const priceText = course.price === "free" ? "🆓 Бесплатно" : "💎 Платный";
            return `
                <div class="course-card">
                    <div class="course-image">${course.icon}</div>
                    <div class="course-content">
                        <h3 class="course-title">${course.title}</h3>
                        <div class="course-author">👨‍🏫 ${course.author}</div>
                        <div class="course-price">${priceText}</div>
                        <p class="course-description">${course.description}</p>
                        <button class="btn-subscribe ${isSub ? 'btn-subscribed' : ''}" onclick="subscribeToCourse(${course.id})">
                            ${isSub ? '✓ Записан' : '📚 Записаться'}
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }
}
function setupFilterDropdown() {
    const filterBtn = document.getElementById("filterToggleBtn");
    const dropdown = document.getElementById("filterDropdown");
    
    if (!filterBtn || !dropdown) return;
    
    filterBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
    
    document.addEventListener("click", (e) => {
        if (!dropdown.contains(e.target) && e.target !== filterBtn) {
            dropdown.style.display = "none";
        }
    });
    
    // Обработчики для кнопок фильтров в выпадающем меню
    const filterButtons = dropdown.querySelectorAll('.filter-dropdown-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = btn.dataset.category;
            const price = btn.dataset.price;
            
            let url = 'courses.html?';
            if (category) {
                url += `category=${category}`;
            } else if (price) {
                url += `price=${price}`;
            }
            
            window.location.href = url;
            dropdown.style.display = 'none';
        });
    });
}
// ===== ЗАПУСК =====
document.addEventListener("DOMContentLoaded", () => {
    createCodeBackground();
    initGoogleLogin();
    setupContactForm();
    setupSmoothScroll();
    setupFilterDropdown();
    setupWidgets();
    
const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    
    // Функция для выполнения поиска
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `courses.html?search=${encodeURIComponent(query)}`;
        }
    }
    
    // По кнопке "Найти"
    if (searchBtn) {
        searchBtn.addEventListener("click", performSearch);
    }
    
    // По нажатию Enter в поле ввода
    if (searchInput) {
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                performSearch();
            }
        });
    }
    
    // Остальная логика страниц
    if (window.location.pathname.includes("courses.html")) {
        setupCoursesPageFilters();
    } else if (window.location.pathname.includes("profile.html")) {
        renderMyCourses();
    } else if (window.location.pathname.includes("category.html")) {
        loadCategoryPage();
    }
});
