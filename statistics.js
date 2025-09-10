// Translations for Statistics Page
const translations = {
    fr: {
        menu: "Menu",
        produit: "Produit",
        games: "Mini Jeux",
        history: "Histoire",
        contact: "Contact",
        stats: "Statistiques",
        profile: "Profil",
        logout: "Déconnexion",
        statsTitle: "Statistiques Indumilk",
        profileName: "Nom: Utilisateur Invité",
        profileEmail: "Email: guest@indumilk.com",
        profileMember: "Membre depuis: 2024",
        orderHistoryTitle: "Historique des commandes",
        orderHistoryEmpty: "Aucune commande récente",
        logoutSuccess: "Déconnexion réussie!",
        logoutConfirm: "Êtes-vous sûr de vouloir vous déconnecter?",
        logoutInProgress: "Déconnexion en cours...",
        totalSalesLabel: "Ventes Totales",
        customersLabel: "Clients Actifs",
        ordersLabel: "Commandes",
        ratingLabel: "Note Moyenne",
        salesChartTitle: "Évolution des Ventes",
        productsChartTitle: "Répartition des Produits",
        growthChartTitle: "Croissance des Clients",
        performanceChartTitle: "Performance par Catégorie",
        tableTitle: "Top Produits",
        exportBtn: "📥 Exporter",
        productNameHeader: "Produit",
        salesHeader: "Ventes",
        revenueHeader: "Revenus",
        growthHeader: "Croissance"
    },
    en: {
        menu: "Menu",
        produit: "Products",
        games: "Mini Games",
        history: "History",
        contact: "Contact",
        stats: "Statistics",
        profile: "Profile",
        logout: "Logout",
        statsTitle: "Indumilk Statistics",
        profileName: "Name: Guest User",
        profileEmail: "Email: guest@indumilk.com",
        profileMember: "Member since: 2024",
        orderHistoryTitle: "Order History",
        orderHistoryEmpty: "No recent orders",
        logoutSuccess: "Logout successful!",
        logoutConfirm: "Are you sure you want to logout?",
        logoutInProgress: "Logging out...",
        totalSalesLabel: "Total Sales",
        customersLabel: "Active Customers",
        ordersLabel: "Orders",
        ratingLabel: "Average Rating",
        salesChartTitle: "Sales Evolution",
        productsChartTitle: "Product Distribution",
        growthChartTitle: "Customer Growth",
        performanceChartTitle: "Performance by Category",
        tableTitle: "Top Products",
        exportBtn: "📥 Export",
        productNameHeader: "Product",
        salesHeader: "Sales",
        revenueHeader: "Revenue",
        growthHeader: "Growth"
    },
    ar: {
        menu: "القائمة",
        produit: "المنتجات",
        games: "ألعاب مصغرة",
        history: "التاريخ",
        contact: "اتصل",
        stats: "الإحصائيات",
        profile: "الملف الشخصي",
        logout: "تسجيل خروج",
        statsTitle: "إحصائيات إندوميلك",
        profileName: "الاسم: مستخدم ضيف",
        profileEmail: "البريد الإلكتروني: guest@indumilk.com",
        profileMember: "عضو منذ: 2024",
        orderHistoryTitle: "تاريخ الطلبات",
        orderHistoryEmpty: "لا توجد طلبات حديثة",
        logoutSuccess: "تم تسجيل الخروج بنجاح!",
        logoutConfirm: "هل أنت متأكد من أنك تريد تسجيل الخروج؟",
        logoutInProgress: "جاري تسجيل الخروج...",
        totalSalesLabel: "إجمالي المبيعات",
        customersLabel: "العملاء النشطون",
        ordersLabel: "الطلبات",
        ratingLabel: "متوسط التقييم",
        salesChartTitle: "تطور المبيعات",
        productsChartTitle: "توزيع المنتجات",
        growthChartTitle: "نمو العملاء",
        performanceChartTitle: "الأداء حسب الفئة",
        tableTitle: "أفضل المنتجات",
        exportBtn: "📥 تصدير",
        productNameHeader: "المنتج",
        salesHeader: "المبيعات",
        revenueHeader: "الإيرادات",
        growthHeader: "النمو"
    }
};

// State variables
let currentLang = 'fr';
let isDarkMode = false;
let charts = {};

// Sample data
const sampleData = {
    sales: {
        '7d': [
            { date: '2024-01-01', value: 1200 },
            { date: '2024-01-02', value: 1350 },
            { date: '2024-01-03', value: 1100 },
            { date: '2024-01-04', value: 1450 },
            { date: '2024-01-05', value: 1600 },
            { date: '2024-01-06', value: 1300 },
            { date: '2024-01-07', value: 1750 }
        ],
        '30d': generateMonthlyData(),
        '90d': generateQuarterlyData()
    },
    products: [
        { name: 'Lait Frais', value: 35, color: '#667eea' },
        { name: 'Mozzarella', value: 25, color: '#764ba2' },
        { name: 'Crème Fraîche', value: 20, color: '#28a745' },
        { name: 'Petit Jean', value: 12, color: '#ffc107' },
        { name: 'Autres', value: 8, color: '#6c757d' }
    ],
    growth: generateGrowthData(),
    performance: [
        { category: 'Laitier', sales: 85, target: 100 },
        { category: 'Fromage', sales: 92, target: 100 },
        { category: 'Premium', sales: 78, target: 100 }
    ],
    topProducts: [
        { name: 'Lait Frais Premium', sales: 1234, revenue: '18,510 DH', growth: '+12.5%', growthType: 'positive' },
        { name: 'Mozzarella Artisanale', sales: 856, revenue: '38,520 DH', growth: '+8.3%', growthType: 'positive' },
        { name: 'Petit Jean', sales: 642, revenue: '17,976 DH', growth: '+15.7%', growthType: 'positive' },
        { name: 'Crème Fraîche Premium', sales: 534, revenue: '13,350 DH', growth: '+5.2%', growthType: 'positive' },
        { name: 'Fromage Edam', sales: 423, revenue: '23,265 DH', growth: '-2.1%', growthType: 'negative' }
    ]
};

// Generate sample data functions
function generateMonthlyData() {
    const data = [];
    for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (29 - i));
        data.push({
            date: date.toISOString().split('T')[0],
            value: Math.floor(Math.random() * 1000) + 1000
        });
    }
    return data;
}

function generateQuarterlyData() {
    const data = [];
    for (let i = 0; i < 90; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (89 - i));
        data.push({
            date: date.toISOString().split('T')[0],
            value: Math.floor(Math.random() * 1500) + 800
        });
    }
    return data;
}

function generateGrowthData() {
    const data = [];
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'];
    let baseValue = 1500;
    
    months.forEach(month => {
        baseValue += Math.floor(Math.random() * 300) + 100;
        data.push({ month, customers: baseValue });
    });
    
    return data;
}

// Initialize the application
function init() {
    loadSettings();
    updateLanguage();
    setupEventListeners();
    initializeCharts();
    populateTable();
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

// Setup event listeners
function setupEventListeners() {
    // Time period buttons
    document.querySelectorAll('.timeBtn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.timeBtn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            updateSalesChart(e.target.dataset.period);
        });
    });

    // Export button
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportData);
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        const langSelect = document.querySelector('.langSelect');
        const dropdown = document.getElementById('langDropdown');

        if (langSelect && dropdown && !langSelect.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
}

// Initialize all charts
function initializeCharts() {
    initSalesChart();
    initProductsChart();
    initGrowthChart();
    initPerformanceChart();
}

// Sales Chart
function initSalesChart() {
    const ctx = document.getElementById('salesChart');
    if (!ctx) return;

    charts.sales = new Chart(ctx, {
        type: 'line',
        data: {
            labels: sampleData.sales['7d'].map(item => new Date(item.date).toLocaleDateString()),
            datasets: [{
                label: 'Ventes (DH)',
                data: sampleData.sales['7d'].map(item => item.value),
                borderColor: '#667eea',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#667eea',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + ' DH';
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            elements: {
                point: {
                    hoverBackgroundColor: '#667eea'
                }
            }
        }
    });
}

// Products Chart (Doughnut)
function initProductsChart() {
    const ctx = document.getElementById('productsChart');
    if (!ctx) return;

    charts.products = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: sampleData.products.map(item => item.name),
            datasets: [{
                data: sampleData.products.map(item => item.value),
                backgroundColor: sampleData.products.map(item => item.color),
                borderWidth: 0,
                hoverBorderWidth: 3,
                hoverBorderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            size: 12,
                            weight: '600'
                        }
                    }
                }
            },
            cutout: '60%'
        }
    });
}

// Growth Chart (Bar)
function initGrowthChart() {
    const ctx = document.getElementById('growthChart');
    if (!ctx) return;

    charts.growth = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sampleData.growth.map(item => item.month),
            datasets: [{
                label: 'Clients',
                data: sampleData.growth.map(item => item.customers),
                backgroundColor: 'rgba(40, 167, 69, 0.8)',
                borderColor: '#28a745',
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Performance Chart (Radar)
function initPerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;

    charts.performance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: sampleData.performance.map(item => item.category),
            datasets: [
                {
                    label: 'Réalisé',
                    data: sampleData.performance.map(item => item.sales),
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.2)',
                    borderWidth: 2,
                    pointBackgroundColor: '#667eea',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                },
                {
                    label: 'Objectif',
                    data: sampleData.performance.map(item => item.target),
                    borderColor: '#28a745',
                    backgroundColor: 'rgba(40, 167, 69, 0.1)',
                    borderWidth: 2,
                    pointBackgroundColor: '#28a745',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            }
        }
    });
}

// Update sales chart based on time period
function updateSalesChart(period) {
    if (!charts.sales) return;
    
    const data = sampleData.sales[period];
    charts.sales.data.labels = data.map(item => new Date(item.date).toLocaleDateString());
    charts.sales.data.datasets[0].data = data.map(item => item.value);
    charts.sales.update();
}

// Populate products table
function populateTable() {
    const tbody = document.getElementById('productsTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';
    sampleData.topProducts.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.sales}</td>
            <td>${product.revenue}</td>
            <td class="growth-${product.growthType}">${product.growth}</td>
        `;
        tbody.appendChild(row);
    });
}

// Export data function
function exportData() {
    const csvContent = [
        'Produit,Ventes,Revenus,Croissance',
        ...sampleData.topProducts.map(product => 
            `"${product.name}",${product.sales},"${product.revenue}","${product.growth}"`
        )
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'indumilk-statistics.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
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

    // Update navigation and UI elements
    const elements = {
        'btn-menu': t.menu,
        'btn-produit': t.produit,
        'btn-games': t.games,
        'btn-history': t.history,
        'btn-contact': t.contact,
        'btn-stats': t.stats,
        'statsTitle': t.statsTitle,
        'profileTitle': t.profile,
        'logoutBtn': t.logout,
        'totalSalesLabel': t.totalSalesLabel,
        'customersLabel': t.customersLabel,
        'ordersLabel': t.ordersLabel,
        'ratingLabel': t.ratingLabel,
        'salesChartTitle': t.salesChartTitle,
        'productsChartTitle': t.productsChartTitle,
        'growthChartTitle': t.growthChartTitle,
        'performanceChartTitle': t.performanceChartTitle,
        'tableTitle': t.tableTitle,
        'exportBtn': t.exportBtn,
        'productNameHeader': t.productNameHeader,
        'salesHeader': t.salesHeader,
        'revenueHeader': t.revenueHeader,
        'growthHeader': t.growthHeader
    };

    Object.entries(elements).forEach(([id, text]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = text;
    });

    // Update profile info
    const profileInfo = document.getElementById('profileInfo');
    if (profileInfo) {
        profileInfo.innerHTML = `
            <p>${t.profileName}</p>
            <p>${t.profileEmail}</p>
            <p>${t.profileMember}</p>
        `;
    }

    // Update order history
    const orderHistory = document.getElementById('orderHistory');
    if (orderHistory) {
        orderHistory.innerHTML = `
            <h3>${t.orderHistoryTitle}</h3>
            <p>${t.orderHistoryEmpty}</p>
        `;
    }

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
    
    // Update chart colors for dark mode
    updateChartsForTheme();
}

// Update charts for theme
function updateChartsForTheme() {
    const textColor = isDarkMode ? '#eee' : '#333';
    const gridColor = isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
    
    Object.values(charts).forEach(chart => {
        if (chart && chart.options) {
            // Update text colors
            if (chart.options.scales) {
                Object.values(chart.options.scales).forEach(scale => {
                    if (scale.ticks) scale.ticks.color = textColor;
                    if (scale.grid) scale.grid.color = gridColor;
                });
            }
            
            // Update legend colors
            if (chart.options.plugins && chart.options.plugins.legend) {
                chart.options.plugins.legend.labels.color = textColor;
            }
            
            chart.update();
        }
    });
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

// Logout function
function logout() {
    const t = translations[currentLang];
    const logoutBtn = document.getElementById('logoutBtn');
    if (!logoutBtn) return;
    
    if (!confirm(t.logoutConfirm)) return;
    
    const originalText = logoutBtn.textContent;
    logoutBtn.textContent = t.logoutInProgress;
    logoutBtn.disabled = true;
    logoutBtn.style.opacity = '0.7';
    
    localStorage.removeItem('indumilk_currentUser');
    localStorage.removeItem('indumilk_session');
    localStorage.removeItem('indumilk_token');
    localStorage.removeItem('userPreferences');
    
    setTimeout(() => {
        logoutBtn.textContent = t.logoutSuccess;
        logoutBtn.style.backgroundColor = '#4CAF50';
        closeAccount();
        setTimeout(() => { 
            window.location.href = 'index.html'; 
        }, 800);
    }, 1000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);