// Cart functionality
let cart = [];
let cartCount = 0;

// Update cart count
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

// Add to cart
document.addEventListener('DOMContentLoaded', function() {
    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            // Add to cart array
            cart.push({
                name: productName,
                price: productPrice
            });
            
            cartCount++;
            updateCartCount();
            
            // Visual feedback
            this.textContent = 'Adicionado!';
            this.style.background = '#28a745';
            
            setTimeout(() => {
                this.textContent = 'Adicionar ao Carrinho';
                this.style.background = '';
            }, 2000);
            
            // Show notification
            showNotification(`${productName} adicionado ao carrinho!`);
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('.btn-search');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                showNotification(`Buscando por: ${searchTerm}`);
                // Here you would typically redirect to a search results page
                // window.location.href = `catalogo.html?search=${encodeURIComponent(searchTerm)}`;
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
    
    // Category cards click
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            showNotification(`Navegando para ${categoryName}`);
            // Here you would typically redirect to category page
            // window.location.href = `catalogo.html?category=${encodeURIComponent(categoryName)}`;
        });
    });
    
    // Login button
    const loginButton = document.querySelector('.btn-login');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            showNotification('Sistema de login em desenvolvimento');
        });
    }
    
    // CTA buttons
    const ctaButton = document.querySelector('.btn-cta');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            showNotification('Cadastro em desenvolvimento');
        });
    }
    
    // Cart button
    const cartButton = document.querySelector('.btn-cart');
    if (cartButton) {
        cartButton.addEventListener('click', function() {
            if (cartCount === 0) {
                showNotification('Seu carrinho está vazio');
            } else {
                showNotification(`Você tem ${cartCount} ${cartCount === 1 ? 'item' : 'itens'} no carrinho`);
                // Here you would typically show cart modal or redirect to cart page
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.product-card, .category-card, .benefit').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Notification system
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
