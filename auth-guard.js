/**
 * Authentication Guard - auth-guard.js
 * Include this script at the TOP of every protected page (menu.html, games.html, etc.)
 * Place this script BEFORE any other scripts and BEFORE the closing </head> tag
 */

(function() {
    'use strict';
    
    // Check if this is the login page - if so, skip authentication check
    const currentPage = window.location.pathname;
    const isLoginPage = currentPage === '/' || 
                       currentPage === '/index.html' || 
                       currentPage.endsWith('index.html');
    
    if (isLoginPage) {
        // On login page, check if user is already logged in
        const currentUser = getCurrentUser();
        if (currentUser && isValidSession()) {
            // User is already logged in, redirect to menu
            window.location.replace('menu.html');
        }
        return;
    }
    
    // For all other pages, check authentication
    const currentUser = getCurrentUser();
    const hasValidSession = isValidSession();
    
    if (!currentUser || !hasValidSession) {
        // No valid authentication, redirect to login
        redirectToLogin('auth_required');
        return;
    }
    
    // Authentication successful - continue loading page
    
    // Helper Functions
    function getCurrentUser() {
        try {
            const user = localStorage.getItem('indumilk_currentUser');
            return user ? JSON.parse(user) : null;
        } catch (e) {
            return null;
        }
    }
    
    function isValidSession() {
        try {
            const session = localStorage.getItem('indumilk_session');
            if (!session) return false;
            
            const sessionData = JSON.parse(session);
            const now = Date.now();
            const sessionAge = now - sessionData.timestamp;
            const maxSessionAge = 24 * 60 * 60 * 1000; // 24 hours
            
            if (sessionAge > maxSessionAge) {
                // Session expired, clear data
                clearAuthData();
                return false;
            }
            
            return true;
        } catch (e) {
            clearAuthData();
            return false;
        }
    }
    
    function clearAuthData() {
        localStorage.removeItem('indumilk_currentUser');
        localStorage.removeItem('indumilk_session');
    }
    
    function redirectToLogin(reason) {
        clearAuthData();
        const loginUrl = reason ? `index.html?reason=${reason}` : 'index.html';
        window.location.replace(loginUrl);
    }
    
    // Extend session on user activity
    let activityTimer;
    function extendSession() {
        const currentUser = getCurrentUser();
        if (currentUser) {
            localStorage.setItem('indumilk_session', JSON.stringify({
                timestamp: Date.now(),
                userId: currentUser.id
            }));
        }
    }
    
    // Track user activity to extend session
    function trackActivity() {
        clearTimeout(activityTimer);
        activityTimer = setTimeout(extendSession, 5 * 60 * 1000); // Extend after 5 minutes of activity
    }
    
    // Add activity listeners
    document.addEventListener('DOMContentLoaded', function() {
        ['click', 'keypress', 'scroll', 'touchstart'].forEach(event => {
            document.addEventListener(event, trackActivity, true);
        });
        
        // Initial activity tracking
        trackActivity();
    });
    
    // Check session validity periodically
    setInterval(function() {
        if (!isValidSession()) {
            redirectToLogin('session_expired');
        }
    }, 5 * 60 * 1000); // Check every 5 minutes
    
})();