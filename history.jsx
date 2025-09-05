// Translations for multilingual support
const translations = {
  fr: {
    pageTitle: "Historique des Achats",
    totalOrdersLabel: "Total des Commandes",
    totalSpentLabel: "Total Dépensé",
    favoriteItemLabel: "Article Préféré",
    averageOrderLabel: "Commande Moyenne",
    searchPlaceholder: "Rechercher des commandes...",
    dateFilterLabel: "Filtrer par période:",
    statusFilterLabel: "Filtrer par statut:",
    sortByLabel: "Trier par:",
    clearFiltersBtn: "Effacer les filtres",
    exportBtn: "Exporter",
    refreshBtn: "Actualiser",
    ordersSectionTitle: "Vos Commandes",
    noOrdersTitle: "Aucune commande trouvée",
    noOrdersText: "Vous n'avez pas encore passé de commandes ou aucune commande ne correspond aux filtres sélectionnés.",
    orderNowBtn: "Commander maintenant",
    modalTitle: "Détails de la Commande",
    orderNumber: "Commande #",
    orderDate: "Date:",
    orderStatus: "Statut:",
    orderTotal: "Total:",
    completed: "Terminé",
    pending: "En attente",
    cancelled: "Annulé",
    processing: "En cours",
    shipped: "Expédié",
    delivered: "Livré",
    allPeriods: "Toutes les périodes",
    today: "Aujourd'hui",
    thisWeek: "Cette semaine",
    thisMonth: "Ce mois",
    thisYear: "Cette année",
    last30Days: "30 derniers jours",
    last90Days: "90 derniers jours",
    allStatuses: "Tous les statuts",
    quantity: "Quantité:",
    price: "Prix:",
    subtotal: "Sous-total:",
    viewDetails: "Voir les détails",
    addToFavorites: "Ajouter aux favoris",
    removeFromFavorites: "Retirer des favoris",
    sortNewest: "Plus récent",
    sortOldest: "Plus ancien",
    sortHighest: "Montant le plus élevé",
    sortLowest: "Montant le plus bas",
    itemsCount: "articles",
    showingResults: "Affichage de {count} résultats"
  },
  en: {
    pageTitle: "Purchase History",
    totalOrdersLabel: "Total Orders",
    totalSpentLabel: "Total Spent",
    favoriteItemLabel: "Favorite Item",
    averageOrderLabel: "Average Order",
    searchPlaceholder: "Search orders...",
    dateFilterLabel: "Filter by period:",
    statusFilterLabel: "Filter by status:",
    sortByLabel: "Sort by:",
    clearFiltersBtn: "Clear filters",
    exportBtn: "Export",
    refreshBtn: "Refresh",
    ordersSectionTitle: "Your Orders",
    noOrdersTitle: "No orders found",
    noOrdersText: "You haven't placed any orders yet or no orders match the selected filters.",
    orderNowBtn: "Order now",
    modalTitle: "Order Details",
    orderNumber: "Order #",
    orderDate: "Date:",
    orderStatus: "Status:",
    orderTotal: "Total:",
    completed: "Completed",
    pending: "Pending",
    cancelled: "Cancelled",
    processing: "Processing",
    shipped: "Shipped",
    delivered: "Delivered",
    allPeriods: "All periods",
    today: "Today",
    thisWeek: "This week",
    thisMonth: "This month",
    thisYear: "This year",
    last30Days: "Last 30 days",
    last90Days: "Last 90 days",
    allStatuses: "All statuses",
    quantity: "Quantity:",
    price: "Price:",
    subtotal: "Subtotal:",
    viewDetails: "View Details",
    addToFavorites: "Add to Favorites",
    removeFromFavorites: "Remove from Favorites",
    sortNewest: "Newest first",
    sortOldest: "Oldest first",
    sortHighest: "Highest amount",
    sortLowest: "Lowest amount",
    itemsCount: "items",
    showingResults: "Showing {count} results"
  },
  ar: {
    pageTitle: "تاريخ المشتريات",
    totalOrdersLabel: "إجمالي الطلبات",
    totalSpentLabel: "إجمالي المبلغ المنفق",
    favoriteItemLabel: "العنصر المفضل",
    averageOrderLabel: "متوسط الطلب",
    searchPlaceholder: "البحث في الطلبات...",
    dateFilterLabel: "تصفية حسب الفترة:",
    statusFilterLabel: "تصفية حسب الحالة:",
    sortByLabel: "ترتيب حسب:",
    clearFiltersBtn: "مسح المرشحات",
    exportBtn: "تصدير",
    refreshBtn: "تحديث",
    ordersSectionTitle: "طلباتك",
    noOrdersTitle: "لم يتم العثور على طلبات",
    noOrdersText: "لم تقم بتقديم أي طلبات بعد أو لا توجد طلبات تطابق المرشحات المحددة.",
    orderNowBtn: "اطلب الآن",
    modalTitle: "تفاصيل الطلب",
    orderNumber: "طلب #",
    orderDate: "التاريخ:",
    orderStatus: "الحالة:",
    orderTotal: "المجموع:",
    completed: "مكتمل",
    pending: "في الانتظار",
    cancelled: "ملغي",
    processing: "قيد المعالجة",
    shipped: "تم الشحن",
    delivered: "تم التسليم",
    allPeriods: "جميع الفترات",
    today: "اليوم",
    thisWeek: "هذا الأسبوع",
    thisMonth: "هذا الشهر",
    thisYear: "هذا العام",
    last30Days: "آخر 30 يوماً",
    last90Days: "آخر 90 يوماً",
    allStatuses: "جميع الحالات",
    quantity: "الكمية:",
    price: "السعر:",
    subtotal: "المجموع الفرعي:",
    viewDetails: "عرض التفاصيل",
    addToFavorites: "إضافة للمفضلة",
    removeFromFavorites: "إزالة من المفضلة",
    sortNewest: "الأحدث أولاً",
    sortOldest: "الأقدم أولاً",
    sortHighest: "أعلى مبلغ",
    sortLowest: "أقل مبلغ",
    itemsCount: "عناصر",
    showingResults: "عرض {count} نتائج"
  }
};

// State variables
let currentLang = 'fr';
let isDarkMode = false;
let orders = [];
let searchTerm = '';
let dateFilter = 'all';
let statusFilter = 'all';
let sortBy = 'newest';
let selectedOrder = null;
let favoriteProducts = new Set([1, 3, 5]);
let currentPage = 1;
let isInitialized = false;
const ordersPerPage = 6;

// Generate sample purchase data
function generateSamplePurchases() {
  const productNames = {
    fr: ["Ordinateur Portable", "Smartphone", "Écouteurs Bluetooth", "Montre Connectée", "Tablette", "Appareil Photo", "Clavier Mécanique", "Souris Gaming"],
    en: ["Laptop Computer", "Smartphone", "Bluetooth Headphones", "Smart Watch", "Tablet", "Digital Camera", "Mechanical Keyboard", "Gaming Mouse"],
    ar: ["حاسوب محمول", "هاتف ذكي", "سماعات بلوتوث", "ساعة ذكية", "جهاز لوحي", "كاميرا رقمية", "لوحة مفاتيح ميكانيكية", "فأرة ألعاب"]
  };

  const statuses = ['completed', 'pending', 'processing', 'shipped', 'delivered', 'cancelled'];
  const images = ['laptop.jpg', 'phone.jpg', 'headphones.jpg', 'watch.jpg', 'tablet.jpg', 'camera.jpg', 'keyboard.jpg', 'mouse.jpg'];
  
  const orders = [];
  
  for (let i = 1; i <= 20; i++) {
    const numItems = Math.floor(Math.random() * 3) + 1;
    const items = [];
    let total = 0;
    
    for (let j = 0; j < numItems; j++) {
      const productIndex = Math.floor(Math.random() * productNames.fr.length);
      const quantity = Math.floor(Math.random() * 2) + 1;
      const price = Math.floor(Math.random() * 800) + 200;
      
      const item = {
        id: productIndex + 1,
        name: {
          fr: productNames.fr[productIndex],
          en: productNames.en[productIndex],
          ar: productNames.ar[productIndex]
        },
        quantity,
        price,
        image: images[productIndex]
      };
      
      items.push(item);
      total += quantity * price;
    }
    
    const daysAgo = Math.floor(Math.random() * 120);
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    
    orders.push({
      id: 2000 + i,
      date,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      items,
      total,
      trackingNumber: `PUR${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    });
  }
  
  return orders.sort((a, b) => b.date - a.date);
}

// Initialize the application
function init() {
    if (isInitialized) return;
    isInitialized = true;
    
    loadSettings();
    orders = generateSamplePurchases();
    updateLanguage();
    setupEventListeners();
    updateDisplay();
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
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value;
            currentPage = 1;
            updateDisplay();
        });
    }

    // Filter selects
    const dateFilterEl = document.getElementById('dateFilter');
    if (dateFilterEl) {
        dateFilterEl.addEventListener('change', (e) => {
            dateFilter = e.target.value;
            currentPage = 1;
            updateDisplay();
        });
    }

    const statusFilterEl = document.getElementById('statusFilter');
    if (statusFilterEl) {
        statusFilterEl.addEventListener('change', (e) => {
            statusFilter = e.target.value;
            currentPage = 1;
            updateDisplay();
        });
    }

    const sortByEl = document.getElementById('sortBy');
    if (sortByEl) {
        sortByEl.addEventListener('change', (e) => {
            sortBy = e.target.value;
            updateDisplay();
        });
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

// Calculate analytics and spending summary
function calculateSpendingAnalytics() {
    const completedOrders = orders.filter(order => order.status === 'completed');
    const totalSpent = completedOrders.reduce((sum, order) => sum + order.total, 0);
    const averageOrder = completedOrders.length > 0 ? totalSpent / completedOrders.length : 0;

    // Calculate favorite items based on purchase frequency
    const productCounts = {};
    completedOrders.forEach(order => {
        order.items.forEach(item => {
            const key = item.name[currentLang];
            productCounts[key] = (productCounts[key] || 0) + item.quantity;
        });
    });

    const topProduct = Object.entries(productCounts)
        .sort(([,a], [,b]) => b - a)[0];

    return {
        totalOrders: orders.length,
        completedOrders: completedOrders.length,
        totalSpent,
        averageOrder,
        favoriteItem: topProduct ? topProduct[0] : 'N/A'
    };
}

// Filter and sort orders based on user criteria
function getFilteredOrders() {
    let filtered = orders.filter(order => {
        // Search filter - check order ID and item names
        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            const matchesId = order.id.toString().includes(searchLower);
            const matchesItems = order.items.some(item => 
                item.name[currentLang].toLowerCase().includes(searchLower)
            );
            if (!matchesId && !matchesItems) return false;
        }

        // Date filter
        if (dateFilter !== 'all') {
            const orderDate = new Date(order.date);
            const now = new Date();
            
            switch (dateFilter) {
                case 'today':
                    if (orderDate.toDateString() !== now.toDateString()) return false;
                    break;
                case 'thisWeek':
                    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                    if (orderDate < weekAgo) return false;
                    break;
                case 'thisMonth':
                    if (orderDate.getMonth() !== now.getMonth() || orderDate.getFullYear() !== now.getFullYear()) return false;
                    break;
                case 'thisYear':
                    if (orderDate.getFullYear() !== now.getFullYear()) return false;
                    break;
                case 'last30Days':
                    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                    if (orderDate < thirtyDaysAgo) return false;
                    break;
                case 'last90Days':
                    const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
                    if (orderDate < ninetyDaysAgo) return false;
                    break;
            }
        }

        // Status filter
        if (statusFilter !== 'all' && order.status !== statusFilter) return false;

        return true;
    });

    // Sort orders
    switch (sortBy) {
        case 'oldest':
            filtered.sort((a, b) => a.date - b.date);
            break;
        case 'highest':
            filtered.sort((a, b) => b.total - a.total);
            break;
        case 'lowest':
            filtered.sort((a, b) => a.total - b.total);
            break;
        default: // newest
            filtered.sort((a, b) => b.date - a.date);
    }

    return filtered;
}

// Update the display
function updateDisplay() {
    updateSummaryCards();
    updateOrdersList();
    updateShowingResults();
}

// Update summary cards
function updateSummaryCards() {
    const analytics = calculateSpendingAnalytics();
    
    const totalOrdersEl = document.getElementById('totalOrders');
    const totalSpentEl = document.getElementById('totalSpent');
    const favoriteItemEl = document.getElementById('favoriteItem');
    const averageOrderEl = document.getElementById('averageOrder');
    
    if (totalOrdersEl) totalOrdersEl.textContent = analytics.totalOrders;
    if (totalSpentEl) totalSpentEl.textContent = `${analytics.totalSpent} DH`;
    if (favoriteItemEl) favoriteItemEl.textContent = analytics.favoriteItem;
    if (averageOrderEl) averageOrderEl.textContent = `${Math.round(analytics.averageOrder)} DH`;
}

// Update orders list
function updateOrdersList() {
    const filteredOrders = getFilteredOrders();
    const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
    const paginatedOrders = filteredOrders.slice(
        (currentPage - 1) * ordersPerPage,
        currentPage * ordersPerPage
    );

    const ordersList = document.getElementById('ordersList');
    const noOrders = document.getElementById('noOrders');
    const pagination = document.getElementById('pagination');

    if (!ordersList) return;

    if (paginatedOrders.length === 0) {
        ordersList.style.display = 'none';
        if (noOrders) noOrders.style.display = 'block';
        if (pagination) pagination.style.display = 'none';
        return;
    }

    ordersList.style.display = 'grid';
    if (noOrders) noOrders.style.display = 'none';

    // Render orders
    ordersList.innerHTML = '';
    paginatedOrders.forEach(order => {
        const orderCard = createOrderCard(order);
        ordersList.appendChild(orderCard);
    });

    // Update pagination
    updatePagination(totalPages);
}

// Create order card
function createOrderCard(order) {
    const t = translations[currentLang];
    const formattedDate = order.date.toLocaleDateString(currentLang === 'ar' ? 'ar-MA' : currentLang);
    
    const card = document.createElement('div');
    card.className = 'orderCard';
    card.onclick = () => openOrderModal(order);

    const statusClass = `status-${order.status}`;
    const statusText = t[order.status] || order.status;

    card.innerHTML = `
        <div class="orderHeader">
            <div>
                <div class="orderNumber">${t.orderNumber}${order.id}</div>
                <div class="orderDate">${formattedDate}</div>
                ${order.trackingNumber ? `<div style="font-size: 12px; color: #667eea; margin-top: 4px;">Tracking: ${order.trackingNumber}</div>` : ''}
            </div>
            <div class="statusBadge ${statusClass}">${statusText}</div>
        </div>
        
        <div class="orderItems">
            ${order.items.slice(0, 2).map(item => `
                <div class="orderItem">
                    <img src="${item.image}" alt="${item.name[currentLang]}" class="itemImage" 
                         onerror="this.src='https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=100'">
                    <div class="itemInfo">
                        <div class="itemName">${item.name[currentLang]}</div>
                        <div class="itemDetails">${t.quantity} ${item.quantity} × ${item.price} DH</div>
                    </div>
                    <button class="favoriteBtn ${favoriteProducts.has(item.id) ? 'active' : ''}" 
                            onclick="event.stopPropagation(); toggleFavorite(${item.id})">
                        ❤️
                    </button>
                </div>
            `).join('')}
            ${order.items.length > 2 ? `<div style="text-align: center; color: #666; font-size: 14px; margin-top: 10px;">+${order.items.length - 2} more ${t.itemsCount}</div>` : ''}
        </div>
        
        <div class="orderFooter">
            <div class="itemCount">${order.items.reduce((sum, item) => sum + item.quantity, 0)} ${t.itemsCount}</div>
            <div class="orderTotal">${order.total} DH</div>
        </div>
        
        <button class="viewDetailsBtn" onclick="event.stopPropagation(); openOrderModal(order)">
            👁️ ${t.viewDetails}
        </button>
    `;

    return card;
}

// Update pagination
function updatePagination(totalPages) {
    const pagination = document.getElementById('pagination');
    if (!pagination || totalPages <= 1) {
        if (pagination) pagination.style.display = 'none';
        return;
    }

    pagination.style.display = 'flex';
    pagination.innerHTML = '';

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pageBtn';
    prevBtn.textContent = '‹';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            updateDisplay();
        }
    };
    pagination.appendChild(prevBtn);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `pageBtn ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.onclick = () => {
            currentPage = i;
            updateDisplay();
        };
        pagination.appendChild(pageBtn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pageBtn';
    nextBtn.textContent = '›';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            updateDisplay();
        }
    };
    pagination.appendChild(nextBtn);
}

// Update showing results text
function updateShowingResults() {
    const filteredOrders = getFilteredOrders();
    const showingResults = document.getElementById('showingResults');
    if (showingResults) {
        const t = translations[currentLang];
        showingResults.textContent = t.showingResults.replace('{count}', filteredOrders.length);
    }
}

// Open order modal
function openOrderModal(order) {
    selectedOrder = order;
    const modal = document.getElementById('transactionModal');
    if (modal) {
        modal.classList.add('active');
        renderOrderModal(order);
    }
}

// Render order modal
function renderOrderModal(order) {
    const modalBody = document.getElementById('modalBody');
    if (!modalBody) return;

    const t = translations[currentLang];
    const formattedDate = order.date.toLocaleDateString(currentLang === 'ar' ? 'ar-MA' : currentLang);
    const formattedTime = order.date.toLocaleTimeString(currentLang === 'ar' ? 'ar-MA' : currentLang, { 
        hour: '2-digit', 
        minute: '2-digit' 
    });

    modalBody.innerHTML = `
        <div style="margin-bottom: 30px;">
            <h3 style="color: #667eea; font-size: 24px; margin-bottom: 10px;">${t.orderNumber}${order.id}</h3>
            <p style="color: #666; margin-bottom: 5px;">${formattedDate} at ${formattedTime}</p>
            ${order.trackingNumber ? `<p style="color: #667eea;">Tracking: ${order.trackingNumber}</p>` : ''}
            <div class="statusBadge status-${order.status}" style="margin-top: 10px;">${t[order.status] || order.status}</div>
        </div>
        
        <div style="margin-bottom: 30px;">
            <h4 style="margin-bottom: 20px; font-size: 18px;">Purchased Items</h4>
            ${order.items.map(item => `
                <div style="display: flex; align-items: center; gap: 15px; padding: 15px; background: rgba(0,0,0,0.05); border-radius: 12px; margin-bottom: 15px;">
                    <img src="${item.image}" alt="${item.name[currentLang]}" 
                         style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover;"
                         onerror="this.src='https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=100'">
                    <div style="flex: 1;">
                        <div style="font-weight: 600; margin-bottom: 5px;">${item.name[currentLang]}</div>
                        <div style="color: #666; font-size: 14px;">
                            ${t.quantity} ${item.quantity}<br>
                            ${t.price} ${item.price} DH<br>
                            ${t.subtotal} ${item.quantity * item.price} DH
                        </div>
                    </div>
                    <button onclick="toggleFavorite(${item.id})" 
                            style="background: none; border: none; font-size: 20px; cursor: pointer; color: ${favoriteProducts.has(item.id) ? '#ff6b6b' : '#ccc'};">
                        ❤️
                    </button>
                </div>
            `).join('')}
        </div>
        
        <div style="border-top: 2px solid rgba(0,0,0,0.1); padding-top: 20px; text-align: right;">
            <div style="font-size: 24px; font-weight: bold; color: #667eea;">
                ${t.orderTotal} ${order.total} DH
            </div>
        </div>
    `;
}

// Close order modal
function closeTransactionModal() {
    const modal = document.getElementById('transactionModal');
    if (modal) {
        modal.classList.remove('active');
    }
    selectedOrder = null;
}

// Toggle favorite
function toggleFavorite(productId) {
    if (favoriteProducts.has(productId)) {
        favoriteProducts.delete(productId);
    } else {
        favoriteProducts.add(productId);
    }
    
    // Update display if modal is open
    if (selectedOrder) {
        renderOrderModal(selectedOrder);
    }
    
    // Update orders list
    updateOrdersList();
}

// Clear filters
function clearFilters() {
    searchTerm = '';
    dateFilter = 'all';
    statusFilter = 'all';
    sortBy = 'newest';
    currentPage = 1;
    
    // Update form elements
    const searchInput = document.getElementById('searchInput');
    const dateFilterEl = document.getElementById('dateFilter');
    const statusFilterEl = document.getElementById('statusFilter');
    const sortByEl = document.getElementById('sortBy');
    
    if (searchInput) searchInput.value = '';
    if (dateFilterEl) dateFilterEl.value = 'all';
    if (statusFilterEl) statusFilterEl.value = 'all';
    if (sortByEl) sortByEl.value = 'newest';
    
    updateDisplay();
}

// Export orders
function exportOrders() {
    const filteredOrders = getFilteredOrders();
    const csvContent = [
        'Order ID,Date,Status,Total,Items',
        ...filteredOrders.map(order => 
            `${order.id},${order.date.toISOString().split('T')[0]},${order.status},${order.total},"${order.items.map(item => `${item.name[currentLang]} (${item.quantity})`).join('; ')}"`
        )
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'purchase-history.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Refresh orders
function refreshOrders() {
    orders = generateSamplePurchases();
    updateDisplay();
}

// Language functions
function toggleLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.toggle('show');
}

function setLang(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
    updateLanguage();
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.remove('show');
}

function updateLanguage() {
    const t = translations[currentLang];

    // Update page elements
    const elements = {
        'pageTitle': t.pageTitle,
        'totalOrdersLabel': t.totalOrdersLabel,
        'totalSpentLabel': t.totalSpentLabel,
        'favoriteItemLabel': t.favoriteItemLabel,
        'averageOrderLabel': t.averageOrderLabel,
        'dateFilterLabel': t.dateFilterLabel,
        'statusFilterLabel': t.statusFilterLabel,
        'sortByLabel': t.sortByLabel,
        'clearFiltersBtn': t.clearFiltersBtn,
        'exportBtn': t.exportBtn,
        'refreshBtn': t.refreshBtn,
        'ordersSectionTitle': t.ordersSectionTitle,
        'noOrdersTitle': t.noOrdersTitle,
        'noOrdersText': t.noOrdersText,
        'orderNowBtn': t.orderNowBtn,
        'modalTitle': t.modalTitle
    };

    Object.entries(elements).forEach(([id, text]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = text;
    });

    // Update search placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    // Update select options
    updateSelectOptions();

    // Handle RTL for Arabic
    if (currentLang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
        document.body.style.fontFamily = 'Arial, Tahoma, sans-serif';
    } else {
        document.body.setAttribute('dir', 'ltr');
        document.body.style.fontFamily = 'Inter, Segoe UI, sans-serif';
    }

    // Update display
    updateDisplay();
}

// Update select options
function updateSelectOptions() {
    const t = translations[currentLang];
    
    // Date filter options
    const dateFilter = document.getElementById('dateFilter');
    if (dateFilter) {
        const options = [
            { value: 'all', text: t.allPeriods },
            { value: 'today', text: t.today },
            { value: 'thisWeek', text: t.thisWeek },
            { value: 'thisMonth', text: t.thisMonth },
            { value: 'last30Days', text: t.last30Days },
            { value: 'last90Days', text: t.last90Days },
            { value: 'thisYear', text: t.thisYear }
        ];
        
        const currentValue = dateFilter.value;
        dateFilter.innerHTML = '';
        options.forEach(option => {
            const optionEl = document.createElement('option');
            optionEl.value = option.value;
            optionEl.textContent = option.text;
            if (option.value === currentValue) optionEl.selected = true;
            dateFilter.appendChild(optionEl);
        });
    }

    // Status filter options
    const statusFilter = document.getElementById('statusFilter');
    if (statusFilter) {
        const options = [
            { value: 'all', text: t.allStatuses },
            { value: 'completed', text: t.completed },
            { value: 'pending', text: t.pending },
            { value: 'processing', text: t.processing },
            { value: 'shipped', text: t.shipped },
            { value: 'delivered', text: t.delivered },
            { value: 'cancelled', text: t.cancelled }
        ];
        
        const currentValue = statusFilter.value;
        statusFilter.innerHTML = '';
        options.forEach(option => {
            const optionEl = document.createElement('option');
            optionEl.value = option.value;
            optionEl.textContent = option.text;
            if (option.value === currentValue) optionEl.selected = true;
            statusFilter.appendChild(optionEl);
        });
    }

    // Sort by options
    const sortBy = document.getElementById('sortBy');
    if (sortBy) {
        const options = [
            { value: 'newest', text: t.sortNewest },
            { value: 'oldest', text: t.sortOldest },
            { value: 'highest', text: t.sortHighest },
            { value: 'lowest', text: t.sortLowest }
        ];
        
        const currentValue = sortBy.value;
        sortBy.innerHTML = '';
        options.forEach(option => {
            const optionEl = document.createElement('option');
            optionEl.value = option.value;
            optionEl.textContent = option.text;
            if (option.value === currentValue) optionEl.selected = true;
            sortBy.appendChild(optionEl);
        });
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

// Logout function
function logout() {
    const t = translations[currentLang];
    const logoutBtn = document.getElementById('logoutBtn');
    if (!logoutBtn) return;
    
    if (!confirm('Are you sure you want to logout?')) return;
    
    const originalText = logoutBtn.textContent;
    logoutBtn.textContent = 'Logging out...';
    logoutBtn.disabled = true;
    logoutBtn.style.opacity = '0.7';
    
    localStorage.removeItem('indumilk_currentUser');
    localStorage.removeItem('indumilk_session');
    
    setTimeout(() => {
        logoutBtn.textContent = 'Logout successful!';
        logoutBtn.style.backgroundColor = '#4CAF50';
        closeAccount();
        setTimeout(() => { 
            window.location.href = 'index.html'; 
        }, 800);
    }, 1000);
}

// Initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}