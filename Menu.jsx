// Translations
const translations = {
    fr: { 
        menu: "Menu", produit: "Produit", games: "Mini Jeux", history: "Histoire", contact: "Contact", 
        profile: "Profil", logout: "Déconnexion", menuTitle: "Indumilk Menu",
        profileName: "Nom: Utilisateur Invité", profileEmail: "Email: guest@indumilk.com", profileMember: "Membre depuis: 2024",
        orderHistoryTitle: "Historique des commandes", orderHistoryEmpty: "Aucune commande récente",
        logoutSuccess: "Déconnexion réussie!", logoutConfirm: "Êtes-vous sûr de vouloir vous déconnecter?",
        logoutInProgress: "Déconnexion...", dairy: "Laitier", cheese: "Fromage",
        recommended: "Produits Recommandés",
        upcoming: "✨ Prochain produit Indumilk ✨"
    },
    en: { 
        menu: "Menu", produit: "Products", games: "Mini Games", history: "History", contact: "Contact", 
        profile: "Profile", logout: "Logout", menuTitle: "Indumilk Menu",
        profileName: "Name: Guest User", profileEmail: "Email: guest@indumilk.com", profileMember: "Member since: 2024",
        orderHistoryTitle: "Order History", orderHistoryEmpty: "No recent orders",
        logoutSuccess: "Logout successful!", logoutConfirm: "Are you sure you want to logout?",
        logoutInProgress: "Logging out...", dairy: "Dairy", cheese: "Cheese",
        recommended: "Recommended Products",
        upcoming: "✨ Soon-to-be Product of Indumilk ✨"
    },
    ar: { 
        menu: "القائمة", produit: "المنتجات", games: "ألعاب مصغرة", history: "التاريخ", contact: "اتصل", 
        profile: "الملف الشخصي", logout: "تسجيل خروج", menuTitle: "قائمة إندوميلك",
        profileName: "الاسم: مستخدم ضيف", profileEmail: "البريد الإلكتروني: guest@indumilk.com", profileMember: "عضو منذ: 2024",
        orderHistoryTitle: "تاريخ الطلبات", orderHistoryEmpty: "لا توجد طلبات حديثة",
        logoutSuccess: "تم تسجيل الخروج بنجاح!", logoutConfirm: "هل أنت متأكد من أنك تريد تسجيل الخروج؟",
        logoutInProgress: "جاري تسجيل الخروج...", dairy: "منتجات الألبان", cheese: "جبن",
        recommended: "منتجات موصى بها",
        upcoming: "✨ المنتج القادم من إندوميلك ✨"
    }
};

// Banner data
const bannerImages = [
    { src: "lait.jpg", alt: "Milk", desc: { fr: "Lait frais de ferme, riche en nutriments et en goût.", en: "Fresh farm milk, rich in nutrients and taste.", ar: "حليب المزرعة الطازج، غني بالمغذيات والطعم." } },
    { src: "creme.jpg", alt: "Crème Fraîche", desc: { fr: "Crème fraîche premium pour l'excellence culinaire.", en: "Premium fresh cream for culinary excellence.", ar: "كريمة طازجة فاخرة للتميز في الطبخ." } },
    { src: "mozarella.jpg", alt: "Mozzarella", desc: { fr: "Mozzarella authentique de style italien.", en: "Authentic Italian-style mozzarella cheese.", ar: "جبن موتزاريلا أصيل بالطراز الإيطالي." } }
];

// Menu items
const menuItems = [
    { id: 1, name: { fr: "Lait Frais", en: "Fresh Milk", ar: "حليب طازج" }, price: "15 DH", category: "Dairy", image: "lait.jpg" },
    { id: 2, name: { fr: "Mozzarella Premium", en: "Premium Mozzarella", ar: "موتزاريلا فاخرة" }, price: "45 DH", category: "Cheese", image: "mozarella.jpg" },
    { id: 3, name: { fr: "Crème Fraîche", en: "Fresh Cream", ar: "كريمة طازجة" }, price: "25 DH", category: "Dairy", image: "creme.jpg" },
    { id: 4, name: { fr: "Ricotta Artisanale", en: "Artisan Ricotta", ar: "ريكوتا حرفية" }, price: "35 DH", category: "Cheese", image: "ricotta.png" },
    { id: 5, name: { fr: "Fromage Edam", en: "Edam Cheese", ar: "جبن إيدام" }, price: "55 DH", category: "Cheese", image: "fromage edam.jpg" },
    { id: 6, name: { fr: "Yaourt Nature", en: "Natural Yogurt", ar: "زبادي طبيعي" }, price: "12 DH", category: "Dairy", image: "yogurt.jpg" }
];

// Upcoming products (for side sliders)
const upcomingProducts = [
    { src: "butter.jpg", name: { fr: "Beurre Fermier", en: "Farm Butter", ar: "زبدة المزرعة" } },
    { src: "milkshake.jpg", name: { fr: "Milkshake Choco", en: "Choco Milkshake", ar: "ميلك شيك شوكولا" } },
    { src: "fromage-brie.jpg", name: { fr: "Fromage Brie", en: "Brie Cheese", ar: "جبن بري" } }
];

// State
let currentLang = 'fr';
let currentSlide = 0;
let isDarkMode = false;

// Init
function init() {
    loadSettings();
    populateMenu();
    startSlider();
    startUpcomingSliders();
    updateLanguage();
    showRecommended();
}

// Settings
function loadSettings() {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && translations[savedLang]) currentLang = savedLang;
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').textContent = '☀️';
    }
}

// Generate stars with random rating
function getStarRating() {
    const rating = Math.floor(Math.random() * 5) + 1;
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += `<span class="star ${i <= rating ? 'filled' : ''}">★</span>`;
    }
    return stars;
}

// Menu
function populateMenu() {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = '';
    const t = translations[currentLang];
    
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const categoryTranslated = item.category.toLowerCase() === 'dairy' ? t.dairy : t.cheese;
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name[currentLang]}" />
            <div class="menuItemName">${item.name[currentLang]}</div>
            <div class="menuItemPrice">${item.price}</div>
            <div class="menuItemCategory">${categoryTranslated}</div>
            <div class="stars">${getStarRating()}</div>
        `;
        menuList.appendChild(li);
    });
}

// Banner
function startSlider() {
    const slider = document.getElementById('bannerSlider');
    const desc = document.getElementById('bannerDesc');
    slider.innerHTML = '';
    bannerImages.forEach((img, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        imgElement.alt = img.alt;
        imgElement.className = 'bannerSlide' + (index === 0 ? ' active' : '');
        slider.appendChild(imgElement);
    });
    setInterval(() => nextSlide(), 4000);
    desc.innerHTML = `<b>${bannerImages[0].alt}:</b> ${bannerImages[0].desc[currentLang]}`;
}
function showSlide(index) {
    const slides = document.querySelectorAll('.bannerSlide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + bannerImages.length) % bannerImages.length;
    slides[currentSlide].classList.add('active');
    const desc = document.getElementById('bannerDesc');
    desc.innerHTML = `<b>${bannerImages[currentSlide].alt}:</b> ${bannerImages[currentSlide].desc[currentLang]}`;
}
function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }

// Recommended
function showRecommended() {
    const container = document.getElementById('recommended');
    const shuffled = [...menuItems].sort(() => 0.5 - Math.random());
    const recommended = shuffled.slice(0, 2);
    const t = translations[currentLang];
    let html = `<h3>${t.recommended}</h3>`;
    recommended.forEach(item => {
        html += `<p>${item.name[currentLang]} - ${item.price}</p>`;
    });
    container.innerHTML = html;
}

// Upcoming sliders (left & right)
function startUpcomingSliders() {
    const leftSlider = document.getElementById('upcomingLeft');
    const rightSlider = document.getElementById('upcomingRight');
    const t = translations[currentLang];
    
    function renderSlider(container, index) {
        container.innerHTML = `
            <img src="${upcomingProducts[index].src}" alt="${upcomingProducts[index].name[currentLang]}" />
            <div class="upcomingName">${upcomingProducts[index].name[currentLang]}</div>
            <div class="upcomingSoon">${t.upcoming}</div>
        `;
    }
    
    let leftIndex = 0, rightIndex = 1;
    renderSlider(leftSlider, leftIndex);
    renderSlider(rightSlider, rightIndex);
    
    setInterval(() => {
        leftIndex = (leftIndex + 1) % upcomingProducts.length;
        rightIndex = (rightIndex + 1) % upcomingProducts.length;
        renderSlider(leftSlider, leftIndex);
        renderSlider(rightSlider, rightIndex);
    }, 5000);
}

// Language
function toggleLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    dropdown.classList.toggle('show');
}
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
    updateLanguage();
    document.getElementById('langDropdown').classList.remove('show');
}
function updateLanguage() {
    const t = translations[currentLang];
    document.getElementById('btn-menu').textContent = t.menu;
    document.getElementById('btn-produit').textContent = t.produit;
    document.getElementById('btn-games').textContent = t.games;
    document.getElementById('btn-history').textContent = t.history;
    document.getElementById('btn-contact').textContent = t.contact;
    document.getElementById('profileTitle').textContent = t.profile;
    document.getElementById('logoutBtn').textContent = t.logout;
    document.getElementById('menuTitle').textContent = t.menuTitle;
    const profileInfo = document.getElementById('profileInfo');
    profileInfo.innerHTML = `<p>${t.profileName}</p><p>${t.profileEmail}</p><p>${t.profileMember}</p>`;
    const orderHistory = document.getElementById('orderHistory');
    orderHistory.innerHTML = `<h3>${t.orderHistoryTitle}</h3><p>${t.orderHistoryEmpty}</p>`;
    const desc = document.getElementById('bannerDesc');
    if (bannerImages[currentSlide]) {
        desc.innerHTML = `<b>${bannerImages[currentSlide].alt}:</b> ${bannerImages[currentSlide].desc[currentLang]}`;
    }
    populateMenu();
    showRecommended();
    startUpcomingSliders();
    if (currentLang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
        document.body.style.fontFamily = 'Arial, Tahoma, sans-serif';
    } else {
        document.body.setAttribute('dir', 'ltr');
        document.body.style.fontFamily = 'Arial, sans-serif';
    }
}

// Dark mode
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    const toggle = document.getElementById('darkModeToggle');
    toggle.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Account functions
function showAccount() { document.getElementById('accountSlide').classList.add('show'); }
function closeAccount() { document.getElementById('accountSlide').classList.remove('show'); }

// Logout functions
function logout() {
    const t = translations[currentLang];
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.textContent = t.logoutInProgress;
    logoutBtn.disabled = true;
    logoutBtn.style.opacity = '0.7';
    localStorage.removeItem('indumilk_currentUser');
    localStorage.removeItem('indumilk_session');
    localStorage.removeItem('selectedLanguage');
    localStorage.removeItem('darkMode');
    setTimeout(() => {
        logoutBtn.textContent = t.logoutSuccess;
        logoutBtn.style.backgroundColor = '#4CAF50';
        closeAccount();
        setTimeout(() => { window.location.href = 'index.html'; }, 800);
    }, 1000);
}

// Close dropdowns
document.addEventListener('click', function(event) {
    const langSelect = document.querySelector('.langSelect');
    const dropdown = document.getElementById('langDropdown');
    if (!langSelect.contains(event.target)) dropdown.classList.remove('show');
});

// Init on load
document.addEventListener('DOMContentLoaded', init);
