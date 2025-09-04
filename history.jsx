import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Search, Filter, Calendar, Package, Heart, Eye, Download, RefreshCw, TrendingUp, ShoppingBag, Star } from 'lucide-react';

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

// Generate sample purchase data
const generateSamplePurchases = () => {
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
};

// Main Purchase History Component
const PurchaseHistoryTracker = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [orders, setOrders] = useState(generateSamplePurchases());
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [favoriteProducts, setFavoriteProducts] = useState(new Set([1, 3, 5]));
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 6;

  const t = translations[currentLang];

  // Calculate analytics and spending summary
  const spendingAnalytics = useMemo(() => {
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
  }, [orders, currentLang]);

  // Filter and sort orders based on user criteria
  const filteredOrders = useMemo(() => {
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
  }, [orders, searchTerm, dateFilter, statusFilter, sortBy, currentLang]);

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  // Event handlers
  const clearFilters = () => {
    setSearchTerm('');
    setDateFilter('all');
    setStatusFilter('all');
    setSortBy('newest');
    setCurrentPage(1);
  };

  const toggleFavorite = (productId) => {
    setFavoriteProducts(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const exportOrders = () => {
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
  };

  const StatusBadge = ({ status }) => {
    const statusColors = {
      completed: 'bg-green-100 text-green-800 border-green-200',
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      cancelled: 'bg-red-100 text-red-800 border-red-200',
      processing: 'bg-blue-100 text-blue-800 border-blue-200',
      shipped: 'bg-purple-100 text-purple-800 border-purple-200',
      delivered: 'bg-emerald-100 text-emerald-800 border-emerald-200'
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}>
        {t[status] || status}
      </span>
    );
  };

  const OrderCard = ({ order }) => {
    const formattedDate = order.date.toLocaleDateString(currentLang === 'ar' ? 'ar-MA' : currentLang);
    
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {t.orderNumber}{order.id}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{formattedDate}</p>
              {order.trackingNumber && (
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                  Tracking: {order.trackingNumber}
                </p>
              )}
            </div>
            <StatusBadge status={order.status} />
          </div>
          
          <div className="space-y-2 mb-4">
            {order.items.slice(0, 2).map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <img 
                  src={item.image} 
                  alt={item.name[currentLang]}
                  className="w-10 h-10 rounded-lg object-cover bg-gray-100"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAxNkMyMS4xIDIwIDIwIDIxLjEgMjAgMjJDMjAgMjIuOSAxOS4xIDIzIDE4IDIzSDE0QzEyLjkgMjMgMTIgMjIuMSAxMiAyMVYxN0MxMiAxNS45IDEyLjkgMTUgMTQgMTVIMThDMTkuMSAxNSAyMCAxNS45IDIwIDE3VjE2WiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
                  }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {item.name[currentLang]}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {t.quantity} {item.quantity} × ${item.price}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(item.id);
                  }}
                  className={`p-1 rounded-full transition-colors ${
                    favoriteProducts.has(item.id) 
                      ? 'text-red-500 hover:text-red-600' 
                      : 'text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart size={16} fill={favoriteProducts.has(item.id) ? 'currentColor' : 'none'} />
                </button>
              </div>
            ))}
            {order.items.length > 2 && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                +{order.items.length - 2} more {t.itemsCount}
              </p>
            )}
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
              ${order.total}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {order.items.reduce((sum, item) => sum + item.quantity, 0)} {t.itemsCount}
            </span>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedOrder(order)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Eye size={16} />
              {t.viewDetails}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const OrderDetailModal = () => {
    if (!selectedOrder) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.modalTitle}
              </h2>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl"
              >
                ×
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {t.orderNumber}{selectedOrder.id}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedOrder.date.toLocaleDateString(currentLang === 'ar' ? 'ar-MA' : currentLang)} at{' '}
                    {selectedOrder.date.toLocaleTimeString(currentLang === 'ar' ? 'ar-MA' : currentLang, { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                  {selectedOrder.trackingNumber && (
                    <p className="text-blue-600 dark:text-blue-400 mt-1">
                      Tracking: {selectedOrder.trackingNumber}
                    </p>
                  )}
                </div>
                <StatusBadge status={selectedOrder.status} />
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Purchased Items
              </h4>
              <div className="space-y-4">
                {selectedOrder.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name[currentLang]}
                      className="w-16 h-16 rounded-lg object-cover bg-gray-100"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAxNkMyMS4xIDIwIDIwIDIxLjEgMjAgMjJDMjAgMjIuOSAxOS4xIDIzIDE4IDIzSDE0QzEyLjkgMjMgMTIgMjIuMSAxMiAyMVYxN0MxMiAxNS45IDEyLjkgMTUgMTQgMTVIMThDMTkuMSAxNSAyMCAxNS45IDIwIDE3VjE2WiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
                      }}
                    />
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 dark:text-white">
                        {item.name[currentLang]}
                      </h5>
                      <div className="text-gray-600 dark:text-gray-400 space-y-1">
                        <p>{t.quantity} {item.quantity}</p>
                        <p>{t.price} ${item.price}</p>
                        <p className="font-medium">{t.subtotal} ${item.quantity * item.price}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${item.quantity * item.price}
                      </p>
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className={`mt-2 p-2 rounded-full transition-colors ${
                          favoriteProducts.has(item.id) 
                            ? 'text-red-500 hover:text-red-600 bg-red-50 dark:bg-red-900/20' 
                            : 'text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <Heart size={20} fill={favoriteProducts.has(item.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  {t.orderTotal}
                </span>
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  ${selectedOrder.total}
                </span>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => alert('Download invoice feature coming soon!')}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  {t.exportBtn} Invoice
                </button>
                {(selectedOrder.status === 'shipped' || selectedOrder.status === 'processing') && (
                  <button
                    onClick={() => alert(`Tracking: ${selectedOrder.trackingNumber}`)}
                    className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Package size={18} />
                    Track Package
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'
    }`} dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t.pageTitle}
              </h1>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                {filteredOrders.length} orders
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <select
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value)}
                className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="ar">العربية</option>
              </select>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Spending Analytics Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {t.totalOrdersLabel}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {spendingAnalytics.totalOrders}
                </p>
              </div>
              <ShoppingBag className="w-10 h-10 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {t.totalSpentLabel}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${spendingAnalytics.totalSpent}
                </p>
              </div>
              <TrendingUp className="w-10 h-10 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {t.averageOrderLabel}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${Math.round(spendingAnalytics.averageOrder)}
                </p>
              </div>
              <Package className="w-10 h-10 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {t.favoriteItemLabel}
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white truncate">
                  {spendingAnalytics.favoriteItem}
                </p>
              </div>
              <Star className="w-10 h-10 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            {/* Search */}
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Date Filter */}
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">{t.allPeriods}</option>
              <option value="today">{t.today}</option>
              <option value="thisWeek">{t.thisWeek}</option>
              <option value="thisMonth">{t.thisMonth}</option>
              <option value="last30Days">{t.last30Days}</option>
              <option value="last90Days">{t.last90Days}</option>
              <option value="thisYear">{t.thisYear}</option>
            </select>
            
            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">{t.allStatuses}</option>
              <option value="completed">{t.completed}</option>
              <option value="pending">{t.pending}</option>
              <option value="processing">{t.processing}</option>
              <option value="shipped">{t.shipped}</option>
              <option value="delivered">{t.delivered}</option>
              <option value="cancelled">{t.cancelled}</option>
            </select>
            
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="newest">{t.sortNewest}</option>
              <option value="oldest">{t.sortOldest}</option>
              <option value="highest">{t.sortHighest}</option>
              <option value="lowest">{t.sortLowest}</option>
            </select>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={clearFilters}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Filter size={16} />
              {t.clearFiltersBtn}
            </button>
            
            <button
              onClick={exportOrders}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Download size={16} />
              {t.exportBtn}
            </button>
            
            <button
              onClick={() => setOrders(generateSamplePurchases())}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <RefreshCw size={16} />
              {t.refreshBtn}
            </button>
          </div>
          
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            {t.showingResults.replace('{count}', filteredOrders.length)}
          </div>
        </div>

        {/* Orders Grid */}
        {paginatedOrders.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {paginatedOrders.map(order => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      page === currentPage
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-12 border border-gray-200 dark:border-gray-700">
              <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t.noOrdersTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t.noOrdersText}
              </p>
              <button
                onClick={() => alert('Redirecting to products page...')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {t.orderNowBtn}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Order Detail Modal */}
      <OrderDetailModal />
    </div>
  );
};

export default PurchaseHistoryTracker;