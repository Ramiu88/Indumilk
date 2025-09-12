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
        orderHistoryEmpty: "Aucune commande récente",
        sending: "Envoi...",
        fieldRequired: "Ce champ est requis",
        invalidEmail: "Veuillez entrer un email valide"
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
        orderHistoryEmpty: "No recent orders",
        sending: "Sending...",
        fieldRequired: "This field is required",
        invalidEmail: "Please enter a valid email"
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
        orderHistoryEmpty: "لا توجد طلبات حديثة",
        sending: "جاري الإرسال...",
        fieldRequired: "هذا الحقل مطلوب",
        invalidEmail: "يرجى إدخال بريد إلكتروني صحيح"
    }
};

// State variables
let currentLang = 'fr';
let isDarkMode = false;

// Initialize the application
function init() {
    loadSettings();
    loadUserProfile();
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
        const toggle = document.getElementById('darkModeToggle');
        if (toggle) toggle.textContent = '☀️';
    }
}

// Load user profile information
function loadUserProfile() {
    try {
        const currentUser = JSON.parse(localStorage.getItem('indumilk_currentUser'));
        if (currentUser) {
            updateProfileDisplay(currentUser);
        }
    } catch (e) {
        console.log('No user data found, using guest profile');
    }
}

// Update profile display with actual user data
function updateProfileDisplay(user) {
    const t = translations[currentLang];
    const profileInfo = document.getElementById('profileInfo');
    if (profileInfo && user) {
        const memberSince = user.createdAt ? new Date(user.createdAt).getFullYear() : '2024';
        profileInfo.innerHTML = `
            <p>${t.profileName.replace('Utilisateur Invité', user.name || 'Utilisateur Invité').replace('Guest User', user.name || 'Guest User').replace('مستخدم ضيف', user.name || 'مستخدم ضيف')}</p>
            <p>${t.profileEmail.replace('guest@indumilk.com', user.email || 'guest@indumilk.com')}</p>
            <p>${t.profileMember.replace('2024', memberSince)}</p>
        `;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const langSelect = document.querySelector('.langSelect');
        const dropdown = document.getElementById('langDropdown');

        if (langSelect && dropdown && !langSelect.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });

    // Form validation
    const form = document.getElementById('contactFormElement');
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }
}

// Validate individual field
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const t = translations[currentLang];
    
    // Remove existing error styling
    field.style.borderColor = 'rgba(102, 126, 234, 0.2)';
    
    // Validate based on field type
    if (field.required && !value) {
        showFieldError(field, t.fieldRequired);
        return false;
    }
    
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, t.invalidEmail);
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
    errorDiv.style.cssText = 'color: #dc3545; font-size: 14px; margin-top: 8px; font-weight: 500;';
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
    field.style.borderColor = 'rgba(102, 126, 234, 0.2)';
}

// Language functions
function toggleLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.toggle('show');
}

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
    updateLanguage();
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.remove('show');
}

function updateLanguage() {
    const t = translations[currentLang];

    // Update navigation
    const navElements = {
        'btn-menu': t.menu,
        'btn-produit': t.produit,
        'btn-games': t.games,
        'btn-history': t.history,
        'btn-contact': t.contact,
        'contactTitle': t.contactTitle,
        'contactInfoTitle': t.contactInfoTitle,
        'emailLabel': t.emailLabel,
        'phoneLabel': t.phoneLabel,
        'addressLabel': t.addressLabel,
        'hoursLabel': t.hoursLabel,
        'formTitle': t.formTitle,
        'nameLabel': t.nameLabel,
        'emailFormLabel': t.emailFormLabel,
        'subjectLabel': t.subjectLabel,
        'messageLabel': t.messageLabel,
        'submitBtn': t.submitBtn,
        'mapTitle': t.mapTitle,
        'mapPlaceholder': t.mapPlaceholder,
        'profileTitle': t.profile,
        'logoutBtn': t.logout
    };

    Object.entries(navElements).forEach(([id, text]) => {
        const element = document.getElementById(id);
        if (element) {
            if (id === 'hoursValue') {
                element.innerHTML = text;
            } else {
                element.textContent = text;
            }
        }
    });

    // Update hours value separately
    const hoursValue = document.getElementById('hoursValue');
    if (hoursValue) {
        hoursValue.innerHTML = t.hoursValue;
    }

    // Update profile info
    const profileInfo = document.getElementById('profileInfo');
    if (profileInfo) {
        // Re-load user profile with new language
        loadUserProfile();
    }

    // Update order history
    const orderHistory = document.getElementById('orderHistory');
    if (orderHistory) {
        orderHistory.innerHTML = `
            <h3>${t.orderHistoryTitle}</h3>
            <p>${t.orderHistoryEmpty}</p>
        `;
    }

    // Update form placeholders
    const formElements = {
        'name': t.nameLabel,
        'email': t.emailFormLabel,
        'subject': t.subjectLabel,
        'message': t.messageLabel
    };

    Object.entries(formElements).forEach(([id, placeholder]) => {
        const element = document.getElementById(id);
        if (element) element.placeholder = placeholder;
    });

    // Handle RTL for Arabic
    if (currentLang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
        document.body.style.fontFamily = 'Arial, Tahoma, sans-serif';
    } else {
        document.body.setAttribute('dir', 'ltr');
        document.body.style.fontFamily = 'Inter, Segoe UI, sans-serif';
    }
}

// Dark mode toggle
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');

    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
        toggle.textContent = isDarkMode ? '☀️' : '🌙';
    }

    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Account functions
function showAccount() {
    const slide = document.getElementById('accountSlide');
    if (slide) slide.classList.add('show');
}

function closeAccount() {
    const slide = document.getElementById('accountSlide');
    if (slide) slide.classList.remove('show');
}

function logout() {
    const t = translations[currentLang];
    const logoutBtn = document.getElementById('logoutBtn');
    if (!logoutBtn) return;
    
    if (!confirm(t.logoutConfirm)) return;
    
    logoutBtn.textContent = t.logoutInProgress;
    logoutBtn.disabled = true;
    logoutBtn.style.opacity = '0.7';
    
    localStorage.removeItem('indumilk_currentUser');
    localStorage.removeItem('indumilk_session');
    
    setTimeout(() => {
        logoutBtn.textContent = t.logoutSuccess;
        logoutBtn.style.backgroundColor = '#4CAF50';
        closeAccount();
        setTimeout(() => { 
            window.location.href = 'index.html'; 
        }, 800);
    }, 1000);
}

// Form submission
function submitForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const t = translations[currentLang];
    
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
    if (!submitBtn) return;
    
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = t.sending;
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
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
            input.style.borderColor = 'rgba(102, 126, 234, 0.2)';
        });
        
    }, 1500);
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('successMessage');
    if (notification) {
        notification.textContent = message;
        notification.style.display = 'block';
        
        // Hide after 3 seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }
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
                transform: translateY(30px);
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
            counter.style.cssText = 'text-align: right; font-size: 13px; color: #666; margin-top: 8px; font-weight: 500;';
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