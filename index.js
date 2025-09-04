/**
 * Enhanced Authentication System
 * Compatible with the enhanced auth-guard.js
 */

// User Manager - Compatible with auth-guard.js
const userManager = {
    getCurrentUser: function() {
        try {
            const user = localStorage.getItem('indumilk_currentUser');
            return user ? JSON.parse(user) : null;
        } catch (e) {
            return null;
        }
    },
    
    getAllUsers: function() {
        try {
            const users = localStorage.getItem('indumilk_users');
            return users ? JSON.parse(users) : [];
        } catch (e) {
            return [];
        }
    },
    
    saveUser: function(userData) {
        try {
            const users = this.getAllUsers();
            const existingIndex = users.findIndex(u => u.email === userData.email);
            
            if (existingIndex >= 0) {
                users[existingIndex] = { ...users[existingIndex], ...userData };
            } else {
                users.push({
                    id: Date.now().toString(),
                    ...userData,
                    createdAt: new Date().toISOString()
                });
            }
            
            localStorage.setItem('indumilk_users', JSON.stringify(users));
            return true;
        } catch (e) {
            return false;
        }
    },
    
    signUp: function(name, email, password) {
        const users = this.getAllUsers();
        
        if (users.find(u => u.email === email.toLowerCase())) {
            return { success: false, message: 'Un compte existe déjà avec cet email' };
        }
        
        const newUser = {
            id: Date.now().toString(),
            name: name.trim(),
            email: email.trim().toLowerCase(),
            password: password,
            preferences: {
                language: getCurrentLanguage(),
                darkMode: isDarkMode()
            },
            createdAt: new Date().toISOString()
        };
        
        if (this.saveUser(newUser)) {
            return { success: true, user: newUser };
        }
        
        return { success: false, message: 'Erreur lors de la création du compte' };
    },
    
    signIn: function(email, password) {
        const users = this.getAllUsers();
        const user = users.find(u => u.email === email.toLowerCase() && u.password === password);
        
        if (user) {
            this.setCurrentUser(user);
            return { success: true, user };
        }
        
        return { success: false, message: 'Email ou mot de passe incorrect' };
    },
    
    setCurrentUser: function(user) {
        localStorage.setItem('indumilk_currentUser', JSON.stringify(user));
        localStorage.setItem('indumilk_session', JSON.stringify({
            timestamp: Date.now(),
            userId: user.id
        }));
    }
};

// Tab Management
function showTab(tabName) {
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const authMsg = document.getElementById('authMsg');
    
    // Hide message
    hideMessage();
    
    if (tabName === 'login') {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    } else {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    }
}

// Login Function
function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const loginBtn = document.getElementById('loginBtn');
    
    if (!email || !password) {
        showMessage('Veuillez remplir tous les champs', 'error');
        return false;
    }
    
    // Show loading
    setButtonLoading(loginBtn, true);
    
    // Simulate network delay
    setTimeout(() => {
        const result = userManager.signIn(email, password);
        setButtonLoading(loginBtn, false);
        
        if (result.success) {
            showMessage('Connexion réussie! Redirection vers le menu...', 'success');
            setTimeout(() => {
                window.location.href = 'menu.html';
            }, 1500);
        } else {
            showMessage(result.message, 'error');
        }
    }, 1000);
    
    return false;
}

// Signup Function
function signup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const signupBtn = document.getElementById('signupBtn');
    
    if (!name || !email || !password) {
        showMessage('Veuillez remplir tous les champs', 'error');
        return false;
    }
    
    if (name.length < 2) {
        showMessage('Le nom doit contenir au moins 2 caractères', 'error');
        return false;
    }
    
    if (password.length < 6) {
        showMessage('Le mot de passe doit contenir au moins 6 caractères', 'error');
        return false;
    }
    
    // Show loading
    setButtonLoading(signupBtn, true);
    
    // Simulate network delay
    setTimeout(() => {
        const result = userManager.signUp(name, email, password);
        setButtonLoading(signupBtn, false);
        
        if (result.success) {
            showMessage('Compte créé avec succès! Redirection vers le menu...', 'success');
            setTimeout(() => {
                window.location.href = 'menu.html';
            }, 1500);
        } else {
            showMessage(result.message, 'error');
        }
    }, 1000);
    
    return false;
}

// UI Helper Functions
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.classList.add('loading');
        button.disabled = true;
    } else {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

function showMessage(message, type) {
    const authMsg = document.getElementById('authMsg');
    authMsg.textContent = message;
    authMsg.className = `authMsg show ${type}`;
}

function hideMessage() {
    const authMsg = document.getElementById('authMsg');
    authMsg.classList.remove('show');
}

// Language Management
function toggleLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function setLang(lang) {
    localStorage.setItem('indumilk_language', lang);
    document.getElementById('langDropdown').style.display = 'none';
    
    // Update user preference if logged in
    const currentUser = userManager.getCurrentUser();
    if (currentUser) {
        const users = userManager.getAllUsers();
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex >= 0) {
            users[userIndex].preferences.language = lang;
            localStorage.setItem('indumilk_users', JSON.stringify(users));
            
            currentUser.preferences.language = lang;
            localStorage.setItem('indumilk_currentUser', JSON.stringify(currentUser));
        }
    }
    
    // Apply language changes (you can expand this)
    document.documentElement.lang = lang;
    showMessage(`Langue changée vers ${lang.toUpperCase()}`, 'success');
}

function getCurrentLanguage() {
    return localStorage.getItem('indumilk_language') || 'fr';
}

// Dark Mode Management
function toggleDarkMode() {
    const body = document.body;
    const toggle = document.getElementById('darkModeToggle');
    const isDark = body.classList.contains('dark-mode');
    
    if (isDark) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggle.textContent = '🌙';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggle.textContent = '☀️';
    }
    
    // Save preference
    const darkMode = body.classList.contains('dark-mode');
    localStorage.setItem('indumilk_darkMode', darkMode);
    
    // Update user preference if logged in
    const currentUser = userManager.getCurrentUser();
    if (currentUser) {
        const users = userManager.getAllUsers();
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex >= 0) {
            users[userIndex].preferences.darkMode = darkMode;
            localStorage.setItem('indumilk_users', JSON.stringify(users));
            
            currentUser.preferences.darkMode = darkMode;
            localStorage.setItem('indumilk_currentUser', JSON.stringify(currentUser));
        }
    }
}

function isDarkMode() {
    const saved = localStorage.getItem('indumilk_darkMode');
    return saved ? saved === 'true' : false;
}

// Initialize Page
function initializePage() {
    // Check if user is already logged in
    const currentUser = userManager.getCurrentUser();
    if (currentUser) {
        // User is already logged in, redirect to menu
        window.location.replace('menu.html');
        return;
    }
    
    // Load saved preferences
    const savedLang = getCurrentLanguage();
    document.documentElement.lang = savedLang;
    
    // Load dark mode preference
    const darkMode = isDarkMode();
    const body = document.body;
    const toggle = document.getElementById('darkModeToggle');
    
    if (darkMode) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggle.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggle.textContent = '🌙';
    }
    
    // Handle URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const reason = urlParams.get('reason');
    
    if (reason === 'session_expired') {
        showMessage('Votre session a expiré. Veuillez vous reconnecter.', 'error');
    } else if (reason === 'auth_required') {
        showMessage('Connexion requise pour accéder à cette page.', 'error');
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const langSelect = document.querySelector('.langSelect');
        const dropdown = document.getElementById('langDropdown');
        
        if (!langSelect.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
    
    // Auto-hide messages after 5 seconds
    setInterval(() => {
        const authMsg = document.getElementById('authMsg');
        if (authMsg.classList.contains('show')) {
            setTimeout(hideMessage, 5000);
        }
    }, 100);
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}