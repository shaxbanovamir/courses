const GOOGLE_CLIENT_ID = "258425274420-02l9je5d15qkmsr45sa42cq54nn5dub4.apps.googleusercontent.com";

// Функция инициализации Google Login
function initGoogleLogin() {
    google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
        auto_select: false,
        cancel_on_tap_outside: true
    });
    
    // Отрисовываем кнопку входа
    google.accounts.id.renderButton(
        document.getElementById("google-login-btn"),
        { 
            theme: "outline",      // светлая тема
            size: "large",         // размер
            text: "signin_with",   // текст "Sign in with Google"
            shape: "rectangular",
            logo_alignment: "left"
        }
    );
    
    // Проверяем, не входил ли пользователь уже
    checkExistingSession();
}

// Обработка ответа от Google
function handleCredentialResponse(response) {
    const idToken = response.credential;
    
    // Декодируем JWT токен (без библиотек, простой парсинг)
    const decodedToken = parseJwt(idToken);
    
    // Сохраняем данные пользователя в localStorage
    const userData = {
        name: decodedToken.name,
        email: decodedToken.email,
        picture: decodedToken.picture,
        isLoggedIn: true,
        subscribedCourses: getSubscribedCourses() // сохраняем существующие подписки
    };
    
    localStorage.setItem("user", JSON.stringify(userData));
    
    // Обновляем интерфейс
    updateUIForLoggedInUser(userData);
    
    // Перенаправляем на главную или обновляем страницу
    window.location.href = "index.html";
}

// Функция выхода
function logout() {
    // Очищаем только статус входа, но НЕ очищаем подписки
    const currentSubs = getSubscribedCourses();
    localStorage.removeItem("user");
    // Восстанавливаем подписки после очистки (если нужно)
    if (currentSubs.length > 0) {
        localStorage.setItem("subscribedCourses", JSON.stringify(currentSubs));
    }
    window.location.reload();
}

// Простой парсинг JWT (без внешних библиотек)
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

// Проверка существующей сессии
function checkExistingSession() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.isLoggedIn) {
        updateUIForLoggedInUser(user);
    }
}

// Функции для работы с подписками на курсы
function getSubscribedCourses() {
    const subs = localStorage.getItem("subscribedCourses");
    return subs ? JSON.parse(subs) : [];
}

function subscribeToCourse(courseId) {
    let subs = getSubscribedCourses();
    if (!subs.includes(courseId)) {
        subs.push(courseId);
        localStorage.setItem("subscribedCourses", JSON.stringify(subs));
        
        // Если пользователь залогинен, обновляем и его данные
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            user.subscribedCourses = subs;
            localStorage.setItem("user", JSON.stringify(user));
        }
    }
}

function unsubscribeFromCourse(courseId) {
    let subs = getSubscribedCourses();
    subs = subs.filter(id => id !== courseId);
    localStorage.setItem("subscribedCourses", JSON.stringify(subs));
    
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        user.subscribedCourses = subs;
        localStorage.setItem("user", JSON.stringify(user));
    }
}

function isSubscribed(courseId) {
    return getSubscribedCourses().includes(courseId);
}

// Обновление UI после входа
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
}
