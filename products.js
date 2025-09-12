// Translations for Products Page
const translations = {
    fr: {
        menu: "Menu",
        produit: "Produit",
        games: "Mini Jeux",
        history: "Histoire",
        contact: "Contact",
        profile: "Profil",
        logout: "Déconnexion",
        productsTitle: "Nos Produits Indumilk",
        profileName: "Nom: Utilisateur Invité",
        profileEmail: "Email: guest@indumilk.com",
        profileMember: "Membre depuis: 2024",
        orderHistoryTitle: "Historique des commandes",
        orderHistoryEmpty: "Aucune commande récente",
        logoutSuccess: "Déconnexion réussie!",
        logoutConfirm: "Êtes-vous sûr de vouloir vous déconnecter?",
        logoutInProgress: "Déconnexion en cours...",
        dairy: "Laitier",
        cheese: "Fromage",
        premium: "Premium",
        all: "Tous",
        featuredTitle: "Produit du Mois",
        featuredDescription: "Notre lait frais de qualité supérieure, directement de nos fermes partenaires.",
        addToCart: "Ajouter au Panier",
        favorites: "Favoris",
        productDetails: "Détails du Produit:",
        origin: "Origine: Fermes locales",
        expiry: "Durée de conservation: 7 jours",
        storage: "Conservation: Réfrigérateur",
        cart: "Panier",
        cartEmpty: "Votre panier est vide",
        total: "Total",
        checkout: "Commander",
        quantity: "Quantité"
    },
    en: {
        menu: "Menu",
        produit: "Products",
        games: "Mini Games",
        history: "History",
        contact: "Contact",
        profile: "Profile",
        logout: "Logout",
        productsTitle: "Our Indumilk Products",
        profileName: "Name: Guest User",
        profileEmail: "Email: guest@indumilk.com",
        profileMember: "Member since: 2024",
        orderHistoryTitle: "Order History",
        orderHistoryEmpty: "No recent orders",
        logoutSuccess: "Logout successful!",
        logoutConfirm: "Are you sure you want to logout?",
        logoutInProgress: "Logging out...",
        dairy: "Dairy",
        cheese: "Cheese",
        premium: "Premium",
        all: "All",
        featuredTitle: "Product of the Month",
        featuredDescription: "Our premium fresh milk, directly from our partner farms.",
        addToCart: "Add to Cart",
        favorites: "Favorites",
        productDetails: "Product Details:",
        origin: "Origin: Local farms",
        expiry: "Shelf life: 7 days",
        storage: "Storage: Refrigerator",
        cart: "Cart",
        cartEmpty: "Your cart is empty",
        total: "Total",
        checkout: "Order",
        quantity: "Quantity"
    },
    ar: {
        menu: "القائمة",
        produit: "المنتجات",
        games: "ألعاب مصغرة",
        history: "التاريخ",
        contact: "اتصل",
        profile: "الملف الشخصي",
        logout: "تسجيل خروج",
        productsTitle: "منتجات إندوميلك",
        profileName: "الاسم: مستخدم ضيف",
        profileEmail: "البريد الإلكتروني: guest@indumilk.com",
        profileMember: "عضو منذ: 2024",
        orderHistoryTitle: "تاريخ الطلبات",
        orderHistoryEmpty: "لا توجد طلبات حديثة",
        logoutSuccess: "تم تسجيل الخروج بنجاح!",
        logoutConfirm: "هل أنت متأكد من أنك تريد تسجيل الخروج؟",
        logoutInProgress: "جاري تسجيل الخروج...",
        dairy: "منتجات الألبان",
        cheese: "جبن",
        premium: "فاخر",
        all: "الكل",
        featuredTitle: "منتج الشهر",
        featuredDescription: "حليبنا الطازج عالي الجودة، مباشرة من مزارعنا الشريكة.",
        addToCart: "أضف للسلة",
        favorites: "المفضلة",
        productDetails: "تفاصيل المنتج:",
        origin: "المنشأ: المزارع المحلية",
        expiry: "مدة الصلاحية: 7 أيام",
        storage: "التخزين: الثلاجة",
        cart: "السلة",
        cartEmpty: "سلتك فارغة",
        total: "المجموع",
        checkout: "اطلب",
        quantity: "الكمية"
    }
};

// Products data with multilingual names and descriptions
const products = [
    {
        id: 1,
        name: {
            fr: "Lait Frais Premium",
            en: "Premium Fresh Milk",
            ar: "حليب طازج فاخر"
        },
        description: {
            fr: "Lait frais de qualité supérieure, riche en vitamines et minéraux essentiels.",
            en: "Premium fresh milk, rich in essential vitamins and minerals.",
            ar: "حليب طازج عالي الجودة، غني بالفيتامينات والمعادن الأساسية."
        },
        price: 15,
        category: "dairy",
        image: "lait.jpg",
        featured: true
    },
    {
        id: 2,
        name: {
            fr: "Mozzarella Artisanale",
            en: "Artisan Mozzarella",
            ar: "موتزاريلا حرفية"
        },
        description: {
            fr: "Mozzarella traditionnelle faite à la main avec des techniques artisanales.",
            en: "Traditional handmade mozzarella using artisan techniques.",
            ar: "موتزاريلا تقليدية مصنوعة يدوياً بتقنيات حرفية."
        },
        price: 45,
        category: "cheese",
        image: "mozarella.jpg"
    },
    {
        id: 3,
        name: {
            fr: "Crème Fraîche Premium",
            en: "Premium Fresh Cream",
            ar: "كريمة طازجة فاخرة"
        },
        description: {
            fr: "Crème fraîche onctueuse parfaite pour vos préparations culinaires.",
            en: "Smooth fresh cream perfect for your culinary preparations.",
            ar: "كريمة طازجة ناعمة مثالية لتحضيراتك الطهوية."
        },
        price: 25,
        category: "dairy",
        image: "creme.jpg"
    },
    {
        id: 4,
        name: {
            fr: "Ricotta Délicate",
            en: "Delicate Ricotta",
            ar: "ريكوتا رقيقة"
        },
        description: {
            fr: "Ricotta légère et crémeuse, idéale pour les desserts et plats salés.",
            en: "Light and creamy ricotta, ideal for desserts and savory dishes.",
            ar: "ريكوتا خفيفة وكريمية، مثالية للحلويات والأطباق المالحة."
        },
        price: 35,
        category: "cheese",
        image: "ricotta.png"
    },
    {
        id: 5,
        name: {
            fr: "Fromage Edam Traditionnel",
            en: "Traditional Edam Cheese",
            ar: "جبن إيدام تقليدي"
        },
        description: {
            fr: "Fromage Edam vieilli selon les méthodes traditionnelles hollandaises.",
            en: "Edam cheese aged according to traditional Dutch methods.",
            ar: "جبن إيدام معتق وفقاً للطرق الهولندية التقليدية."
        },
        price: 55,
        category: "premium",
        image: "fromage edam.jpg"
    },
    {
        id: 6,
        name: {
            fr: "Yaourt Nature Bio",
            en: "Organic Natural Yogurt",
            ar: "زبادي طبيعي عضوي"
        },
        description: {
            fr: "Yaourt nature biologique sans additifs, riche en probiotiques.",
            en: "Organic natural yogurt without additives, rich in probiotics.",
            ar: "زبادي طبيعي عضوي بدون إضافات، غني بالبروبيوتيك."
        },
        price: 12,
        category: "dairy",
        image: "yogurt.jpg"
    },
    {
        id: 9,
        name: {
            fr: "Petit Jean",
            en: "Petit Jean",
            ar: "بيتي جان"
        },
        description: {
            fr: "Fromage artisanal Petit Jean, doux et crémeux, parfait pour les plateaux de fromages.",
            en: "Artisan Petit Jean cheese, mild and creamy, perfect for cheese boards.",
            ar: "جبن بيتي جان الحرفي، ناعم وكريمي، مثالي لأطباق الجبن."
        },
        price: 28,
        category: "cheese",
        image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        id: 7,
        name: {
            fr: "Beurre Fermier",
            en: "Farm Butter",
            ar: "زبدة المزرعة"
        },
        description: {
            fr: "Beurre artisanal fait à partir de crème fraîche de nos fermes.",
            en: "Artisan butter made from fresh cream from our farms.",
            ar: "زبدة حرفية مصنوعة من الكريمة الطازجة من مزارعنا."
        },
        price: 28,
        category: "premium",
        image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
        id: 8,
        name: {
            fr: "Camembert de Normandie",
            en: "Normandy Camembert",
            ar: "كامامبير نورماندي"
        },
        description: {
            fr: "Camembert authentique avec sa croûte fleurie et son cœur onctueux.",
            en: "Authentic camembert with its bloomy rind and creamy heart.",
            ar: "كامامبير أصيل بقشرته المزهرة ولبه الكريمي."
        },
        price: 65,
        category: "premium",
        image: "https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
];

// State variables
let currentLang = 'fr';
let isDarkMode = false;
let cart = [];
let favorites = [];
let currentFilter = 'all';
let selectedProduct = null;

// Initialize the application
function init() {
    loadSettings();
    loadUserProfile();
    populateProducts();
    updateLanguage();
    setupEventListeners();
    updateFeaturedProduct();
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

    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartCount();
        } catch (e) {
            cart = [];
        }
    }

    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
        try {
            favorites = JSON.parse(savedFavorites);
        } catch (e) {
            favorites = [];
        }
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
    // Category filter buttons
    document.querySelectorAll('.filterBtn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentFilter = e.target.dataset.category;
            updateFilterButtons();
            populateProducts();
        });
    });

    // Close modal when clicking outside
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) {
                closeProductModal();
            }
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

// Update filter buttons
function updateFilterButtons() {
    document.querySelectorAll('.filterBtn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === currentFilter) {
            btn.classList.add('active');
        }
    });
}

// Populate products grid
function populateProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';

    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(product => product.category === currentFilter);

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'productCard';
    card.onclick = () => openProductModal(product);

    const isFavorite = favorites.includes(product.id);
    const t = translations[currentLang];

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name[currentLang]}" class="productImage" 
             onerror="this.src='https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=200'">
        <div class="productName">${product.name[currentLang]}</div>
        <div class="productPrice">${product.price} DH</div>
        <div class="productCategory">${getCategoryName(product.category)}</div>
        <div class="productActions">
            <button class="addToCartBtn" onclick="event.stopPropagation(); addToCart(${product.id})">
                ${t.addToCart}
            </button>
            <button class="favoriteBtn ${isFavorite ? 'active' : ''}" 
                    onclick="event.stopPropagation(); toggleFavorite(${product.id})">
                ❤️
            </button>
        </div>
    `;

    return card;
}

// Get category name in current language
function getCategoryName(category) {
    const t = translations[currentLang];
    switch(category) {
        case 'dairy': return t.dairy;
        case 'cheese': return t.cheese;
        case 'premium': return t.premium;
        default: return category;
    }
}

// Update featured product
function updateFeaturedProduct() {
    const featuredProduct = products.find(p => p.featured) || products[0];
    const t = translations[currentLang];

    const elements = {
        'featuredImage': { src: featuredProduct.image },
        'featuredTitle': { textContent: t.featuredTitle },
        'featuredName': { textContent: featuredProduct.name[currentLang] },
        'featuredDescription': { textContent: featuredProduct.description[currentLang] },
        'featuredPrice': { textContent: `${featuredProduct.price} DH` },
        'featuredBtn': { textContent: t.addToCart }
    };

    Object.entries(elements).forEach(([id, props]) => {
        const element = document.getElementById(id);
        if (element) {
            Object.entries(props).forEach(([prop, value]) => {
                if (prop === 'src') {
                    element.src = value;
                    element.onerror = function() {
                        this.src = 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400';
                    };
                } else {
                    element[prop] = value;
                }
            });
        }
    });

    const featuredBtn = document.getElementById('featuredBtn');
    if (featuredBtn) {
        featuredBtn.onclick = () => addToCart(featuredProduct.id);
    }
}

// Open product modal
function openProductModal(product) {
    selectedProduct = product;
    const t = translations[currentLang];
    const isFavorite = favorites.includes(product.id);

    const elements = {
        'modalImage': { src: product.image },
        'modalTitle': { textContent: product.name[currentLang] },
        'modalDescription': { textContent: product.description[currentLang] },
        'modalPrice': { textContent: `${product.price} DH` },
        'modalDetailsTitle': { textContent: t.productDetails },
        'modalOrigin': { textContent: t.origin },
        'modalExpiry': { textContent: t.expiry },
        'modalStorage': { textContent: t.storage },
        'modalAddBtn': { textContent: t.addToCart },
        'modalFavoriteBtn': { textContent: `❤️ ${t.favorites}` }
    };

    Object.entries(elements).forEach(([id, props]) => {
        const element = document.getElementById(id);
        if (element) {
            Object.entries(props).forEach(([prop, value]) => {
                if (prop === 'src') {
                    element.src = value;
                    element.onerror = function() {
                        this.src = 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400';
                    };
                } else {
                    element[prop] = value;
                }
            });
        }
    });

    const modalFavoriteBtn = document.getElementById('modalFavoriteBtn');
    if (modalFavoriteBtn) {
        modalFavoriteBtn.className = `modalFavoriteBtn ${isFavorite ? 'active' : ''}`;
        modalFavoriteBtn.onclick = () => toggleFavorite(product.id);
    }

    const modalAddBtn = document.getElementById('modalAddBtn');
    if (modalAddBtn) {
        modalAddBtn.onclick = () => {
            addToCart(product.id);
            closeProductModal();
        };
    }

    const modal = document.getElementById('productModal');
    if (modal) modal.classList.add('show');
}

// Close product modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) modal.classList.remove('show');
    selectedProduct = null;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name[currentLang],
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();

    // Show success feedback
    showNotification(translations[currentLang].addToCart + ' ✓');
}

// Toggle favorite
function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(productId);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    populateProducts(); // Refresh to update heart icons

    if (selectedProduct && selectedProduct.id === productId) {
        openProductModal(selectedProduct); // Refresh modal if open
    }
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    if (cartCount) cartCount.textContent = totalItems;
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    if (!cartItems || !cartTotal) return;
    
    const t = translations[currentLang];

    if (cart.length === 0) {
        cartItems.innerHTML = `<p id="cartEmpty">${t.cartEmpty}</p>`;
        cartTotal.textContent = `${t.total}: 0 DH`;
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        html += `
            <div class="cartItem">
                <img src="${item.image}" alt="${item.name}" class="cartItemImage" 
                     onerror="this.src='https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=100'">
                <div class="cartItemInfo">
                    <div class="cartItemName">${item.name}</div>
                    <div class="cartItemPrice">${item.price} DH</div>
                    <div class="cartItemQuantity">
                        <button class="quantityBtn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantityBtn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    });

    cartItems.innerHTML = html;
    cartTotal.textContent = `${t.total}: ${total} DH`;
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter(cartItem => cartItem.id !== productId);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.toggle('show');
        updateCartDisplay();
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(40,167,69,0.4);
        z-index: 5000;
        font-weight: 600;
        animation: slideIn 0.4s ease;
        backdrop-filter: blur(20px);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 2500);
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
        'productsTitle': t.productsTitle,
        'profileTitle': t.profile,
        'logoutBtn': t.logout,
        'filterAll': t.all,
        'filterDairy': t.dairy,
        'filterCheese': t.cheese,
        'filterPremium': t.premium,
        'cartTitle': t.cart,
        'checkoutBtn': t.checkout
    };

    Object.entries(navElements).forEach(([id, text]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = text;
    });

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

    // Update products and featured product
    populateProducts();
    updateFeaturedProduct();
    updateCartDisplay();

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

// UNIFIED LOGOUT FUNCTION - Redirects to authentication page
function logout() {
    const t = translations[currentLang];
    const logoutBtn = document.getElementById('logoutBtn');
    if (!logoutBtn) return;
    
    // Show confirmation dialog
    if (!confirm(t.logoutConfirm)) {
        return;
    }
    
    // Show loading state
    const originalText = logoutBtn.textContent;
    logoutBtn.textContent = t.logoutInProgress;
    logoutBtn.disabled = true;
    logoutBtn.style.opacity = '0.7';
    
    // Clear all user-related data
    localStorage.removeItem('indumilk_currentUser');
    localStorage.removeItem('indumilk_session');
    localStorage.removeItem('indumilk_token');
    localStorage.removeItem('userPreferences');
    
    // Simulate logout process
    setTimeout(() => {
        // Show success state briefly
        logoutBtn.textContent = t.logoutSuccess;
        logoutBtn.style.backgroundColor = '#4CAF50';
        
        // Close account slide
        closeAccount();
        
        // Redirect to authentication page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 800);
    }, 1000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);