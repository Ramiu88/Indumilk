// Translations for Contact Page
const translations = {
    fr: {
        menu: "Menu",
        produit: "Produit",
        games: "Mini Jeux",
        history: "Histoire",
        contact: "Contact",
        profile: "Profil",
        logout: "Déconnexion",
        contactTitle: "Contactez-nous",
        contactInfoTitle: "Nos Coordonnées",
        emailLabel: "Email",
        phoneLabel: "Téléphone",
        addressLabel: "Adresse",
        hoursLabel: "Horaires",
        hoursValue: "Lun-Ven: 8h-18h<br>Sam: 9h-16h",
        formTitle: "Envoyez-nous un Message",
        nameLabel: "Nom complet",
        emailFormLabel: "Email",
        subjectLabel: "Sujet",
        messageLabel: "Message",
        submitBtn: "Envoyer le Message",
        mapTitle: "Notre Localisation",
        mapPlaceholder: "🗺️ Carte Interactive - Casablanca, Maroc",
        successMessage: "Message envoyé avec succès! ✓",
        profileName: "Nom: Utilisateur Invité",
        profileEmail: "Email: guest@indumilk.com",
        profileMember: "Membre depuis: 2024",
        orderHistoryTitle: "Historique des commandes",
        orderHistoryEmpty: "Aucune commande récente"
    },
    en: {
        menu: "Menu",
        produit: "Products",
        games: "Mini Games",
        history: "History",
        contact: "Contact",
        profile: "Profile",
        logout: "Logout",
        contactTitle: "Contact Us",
        contactInfoTitle: "Our Contact Information",
        emailLabel: "Email",
        phoneLabel: "Phone",
        addressLabel: "Address",
        hoursLabel: "Hours",
        hoursValue: "Mon-Fri: 8am-6pm<br>Sat: 9am-4pm",
        formTitle: "Send us a Message",
        nameLabel: "Full Name",
        emailFormLabel: "Email",
        subjectLabel: "Subject",
        messageLabel: "Message",
        submitBtn: "Send Message",
        mapTitle: "Our Location",
        mapPlaceholder: "🗺️ Interactive Map - Casablanca, Morocco",
        successMessage: "Message sent successfully! ✓",
        profileName: "Name: Guest User",
        profileEmail: "Email: guest@indumilk.com",
        profileMember: "Member since: 2024",
        orderHistoryTitle: "Order History",
        orderHistoryEmpty: "No recent orders"
    },
    ar: {
        menu: "القائمة",
        produit: "المنتجات",
        games: "ألعاب مصغرة",
        history: "التاريخ",
        contact: "اتصل",
        profile: "الملف الشخصي",
        logout: "تسجيل خروج",
        contactTitle: "اتصل بنا",
        contactInfoTitle: "معلومات الاتصال",
        emailLabel: "البريد الإلكتروني",
        phoneLabel: "الهاتف",
        addressLabel: "العنوان",
        hoursLabel: "ساعات العمل",
        hoursValue: "الاثنين-الجمعة: 8ص-6م<br>السبت: 9ص-4م",
        formTitle: "أرسل لنا رسالة",
        nameLabel: "الاسم الكامل",
        emailFormLabel: "البريد الإلكتروني",
        subjectLabel: "الموضوع",
        messageLabel: "الرسالة",
        submitBtn: "إرسال الرسالة",
        mapTitle: "موقعنا",
        mapPlaceholder: "🗺️ خريطة تفاعلية - الدار البيضاء، المغرب",
        successMessage: "تم إرسال الرسالة بنجاح! ✓",
        profileName: "الاسم: مستخدم ضيف",
        profileEmail: "البريد الإلكتروني: guest@indumilk.com",
        profileMember: "عضو منذ: 2024",
        orderHistoryTitle: "تاريخ الطلبات",
        orderHistoryEmpty: "لا توجد طلبات حديثة"
    }
};

// State variables
let currentLang = 'fr';
let isDarkMode = false;

// Initialize the application
function init() {
    loadSettings();
    updateLanguage();
    setupEventListeners();
}

// Load saved settings
function loadSettings() {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }

    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').textContent = '☀️';
    }
}

// Setup event listeners
function setupEventListeners() {
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const langSelect = document.querySelector('.langSelect');
        const dropdown = document.getElementById('langDropdown');

        if (!langSelect.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });

    // Form validation
    const form = document.getElementById('contactFormElement');
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

// Validate individual field
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove existing error styling
    field.style.borderColor = '#e1e5e9';
    
    // Validate based on field type
    if (field.required && !value) {
        showFieldError(field, 'Ce champ est requis');
        return false;
    }
    
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Veuillez entrer un email valide');
            return false;
        }
    }
    
    return true;
}

// Show field error
function showFieldError(field, message) {
    field.style.borderColor = '#dc3545';
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.cssText = 'color: #dc3545; font-size: 0.9em; margin-top: 5px;';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(e) {
    const field = e.target;
    const errorMessage = field.parentNode.querySelector('.field-error');
    if (errorMessage) {
        errorMessage.remove();
    }
    field.style.borderColor = '#e1e5e9';
}

// Language functions
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

    // Update navigation
    document.getElementById('btn-menu').textContent = t.menu;
    document.getElementById('btn-produit').textContent = t.produit;
    document.getElementById('btn-games').textContent = t.games;
    document.getElementById('btn-history').textContent = t.history;
    document.getElementById('btn-contact').textContent = t.contact;

    // Update contact page content
    document.getElementById('contactTitle').textContent = t.contactTitle;
    document.getElementById('contactInfoTitle').textContent = t.contactInfoTitle;
    document.getElementById('emailLabel').textContent = t.emailLabel;
    document.getElementById('phoneLabel').textContent = t.phoneLabel;
    document.getElementById('addressLabel').textContent = t.addressLabel;
    document.getElementById('hoursLabel').textContent = t.hoursLabel;
    document.getElementById('hoursValue').innerHTML = t.hoursValue;
    document.getElementById('formTitle').textContent = t.formTitle;
    document.getElementById('nameLabel').textContent = t.nameLabel;
    document.getElementById('emailFormLabel').textContent = t.emailFormLabel;
    document.getElementById('subjectLabel').textContent = t.subjectLabel;
    document.getElementById('messageLabel').textContent = t.messageLabel;
    document.getElementById('submitBtn').textContent = t.submitBtn;
    document.getElementById('mapTitle').textContent = t.mapTitle;
    document.getElementById('mapPlaceholder').textContent = t.mapPlaceholder;

    // Update profile section
    document.getElementById('profileTitle').textContent = t.profile;
    document.getElementById('logoutBtn').textContent = t.logout;

    // Update profile info
    const profileInfo = document.getElementById('profileInfo');
    profileInfo.innerHTML = `
        <p>${t.profileName}</p>
        <p>${t.profileEmail}</p>
        <p>${t.profileMember}</p>
    `;

    // Update order history
    const orderHistory = document.getElementById('orderHistory');
    orderHistory.innerHTML = `
        <h3>${t.orderHistoryTitle}</h3>
        <p>${t.orderHistoryEmpty}</p>
    `;

    // Update form placeholders
    document.getElementById('name').placeholder = t.nameLabel;
    document.getElementById('email').placeholder = t.emailFormLabel;
    document.getElementById('subject').placeholder = t.subjectLabel;
    document.getElementById('message').placeholder = t.messageLabel;

    // Handle RTL for Arabic
    if (currentLang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
        document.body.style.fontFamily = 'Arial, Tahoma, sans-serif';
    } else {
        document.body.setAttribute('dir', 'ltr');
        document.body.style.fontFamily = 'Arial, sans-serif';
    }
}

// Dark mode toggle
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');

    const toggle = document.getElementById('darkModeToggle');
    toggle.textContent = isDarkMode ? '☀️' : '🌙';

    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Account functions
function showAccount() {
    document.getElementById('accountSlide').classList.add('show');
}

function closeAccount() {
    document.getElementById('accountSlide').classList.remove('show');
}

function logout() {
    const t = translations[currentLang];
    showNotification(t.successMessage.replace('Message envoyé', 'Déconnexion réussie'));
    closeAccount();
    // In a real application, you would redirect to login page
    // window.location.href = 'login.html';
}

// Form submission
function submitForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Validate all fields
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        if (!validateField({ target: input })) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        return;
    }
    
    // Simulate form submission
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = currentLang === 'fr' ? 'Envoi...' : 
                           currentLang === 'en' ? 'Sending...' : 'جاري الإرسال...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        const t = translations[currentLang];
        showNotification(t.successMessage);
        
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Clear any existing errors
        const errorMessages = form.querySelectorAll('.field-error');
        errorMessages.forEach(error => error.remove());
        
        // Reset field styles
        inputs.forEach(input => {
            input.style.borderColor = '#e1e5e9';
        });
        
    }, 1500);
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('successMessage');
    notification.textContent = message;
    notification.style.display = 'block';
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Animation for contact items on scroll
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe contact info items
    const infoItems = document.querySelectorAll('.infoItem');
    infoItems.forEach(item => {
        observer.observe(item);
    });
    
    // Observe form groups
    const formGroups = document.querySelectorAll('.formGroup');
    formGroups.forEach(group => {
        observer.observe(group);
    });
}

// Add CSS for animations
function addScrollAnimationCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .infoItem, .formGroup {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
}

// Enhanced form interactions
function enhanceFormInteractions() {
    const inputs = document.querySelectorAll('.formInput, .formTextarea');
    
    inputs.forEach(input => {
        // Add floating label effect
        input.addEventListener('focus', () => {
            input.parentNode.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentNode.classList.remove('focused');
            }
        });
        
        // Character counter for textarea
        if (input.tagName === 'TEXTAREA') {
            const counter = document.createElement('div');
            counter.className = 'char-counter';
            counter.style.cssText = 'text-align: right; font-size: 0.8em; color: #666; margin-top: 5px;';
            input.parentNode.appendChild(counter);
            
            input.addEventListener('input', () => {
                const length = input.value.length;
                counter.textContent = `${length}/500`;
                
                if (length > 400) {
                    counter.style.color = '#ff6b6b';
                } else {
                    counter.style.color = '#666';
                }
            });
        }
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    init();
    addScrollAnimationCSS();
    setupScrollAnimations();
    enhanceFormInteractions();
});