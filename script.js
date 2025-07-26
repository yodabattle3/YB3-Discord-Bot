// DOM elements
const commandsContainer = document.getElementById('commands-container');
const categoryTabs = document.querySelectorAll('.tab-btn');
const searchInput = document.getElementById('command-search');

// State
let currentCategory = 'all';
let filteredCommands = [];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeCommands();
    setupEventListeners();
    setupSmoothScrolling();
});

// Setup event listeners
function setupEventListeners() {
    // Category tab switching
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            switchCategory(category);
        });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        searchCommands(searchTerm);
    });

    // Navbar smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize commands display
function initializeCommands() {
    displayCommands('all');
}

// Switch between command categories
function switchCategory(category) {
    currentCategory = category;
    
    // Update tab appearance
    categoryTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.category === category) {
            tab.classList.add('active');
        }
    });

    // Clear search when switching categories
    searchInput.value = '';
    
    // Display commands for selected category
    displayCommands(category);
}

// Display commands based on category
function displayCommands(category) {
    let commandsToShow = [];
    
    if (category === 'all') {
        // Combine all commands from all categories
        Object.keys(commandsData).forEach(cat => {
            commandsToShow = commandsToShow.concat(commandsData[cat]);
        });
    } else {
        commandsToShow = commandsData[category] || [];
    }
    
    filteredCommands = commandsToShow;
    renderCommands(commandsToShow);
}

// Search through commands
function searchCommands(searchTerm) {
    if (!searchTerm.trim()) {
        displayCommands(currentCategory);
        return;
    }

    const filtered = filteredCommands.filter(command => {
        return command.name.toLowerCase().includes(searchTerm) ||
               command.description.toLowerCase().includes(searchTerm) ||
               command.category.toLowerCase().includes(searchTerm) ||
               command.usage.toLowerCase().includes(searchTerm);
    });

    renderCommands(filtered);
}

// Render commands to the DOM
function renderCommands(commands) {
    if (commands.length === 0) {
        commandsContainer.innerHTML = `
            <div class="no-commands">
                <i class="fas fa-search"></i>
                <h3>No commands found</h3>
                <p>Try adjusting your search or selecting a different category.</p>
            </div>
        `;
        return;
    }

    const commandsHTML = commands.map(command => createCommandCard(command)).join('');
    commandsContainer.innerHTML = commandsHTML;

    // Animate cards
    const cards = commandsContainer.querySelectorAll('.command-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Create individual command card HTML
function createCommandCard(command) {
    const permissionsBadges = command.permissions.length > 0 
        ? `<div class="command-permissions">
             ${command.permissions.map(perm => `<span class="permission-badge">${perm}</span>`).join('')}
           </div>`
        : '';

    const categoryColor = categoryInfo[command.category]?.color || '#5865f2';
    
    return `
        <div class="command-card" data-category="${command.category}">
            <div class="command-header">
                <div class="command-name">
                    <i class="${command.icon}" style="color: ${categoryColor}"></i>
                    /${command.name}
                </div>
                <span class="command-category" style="background: ${categoryColor}">
                    ${command.category.toUpperCase()}
                </span>
            </div>
            <div class="command-description">
                ${command.description}
            </div>
            <div class="command-usage">
                ${command.usage}
            </div>
            ${permissionsBadges}
        </div>
    `;
}

// Setup smooth scrolling for navigation
function setupSmoothScrolling() {
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add command counter
    const totalCommands = Object.values(commandsData).reduce((total, category) => total + category.length, 0);
    
    // Update hero stats with actual command count
    const commandCountElement = document.querySelector('.stat-number');
    if (commandCountElement) {
        commandCountElement.textContent = totalCommands + '+';
    }

    // Add category stats
    addCategoryStats();
    
    // Add keyboard shortcuts
    setupKeyboardShortcuts();
});

// Add category statistics
function addCategoryStats() {
    const categoryCounts = {};
    Object.keys(commandsData).forEach(category => {
        categoryCounts[category] = commandsData[category].length;
    });

    // You can use this data to show category-specific stats
    console.log('Category breakdown:', categoryCounts);
}

// Setup keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
        
        // Escape to clear search
        if (e.key === 'Escape' && searchInput === document.activeElement) {
            searchInput.value = '';
            searchInput.blur();
            displayCommands(currentCategory);
        }
    });
}

// Add command copy functionality
function copyCommandUsage(usage) {
    navigator.clipboard.writeText(usage).then(() => {
        // Show toast notification
        showToast('Command copied to clipboard!');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = usage;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Command copied to clipboard!');
    });
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #5865f2;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 10000;
        animation: slideInUp 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutDown 0.3s ease forwards';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Add click-to-copy functionality to command usage
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('command-usage')) {
        copyCommandUsage(e.target.textContent);
    }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            transform: translateY(100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutDown {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(100%);
            opacity: 0;
        }
    }
    
    .no-commands {
        text-align: center;
        padding: 60px 20px;
        color: #666;
        grid-column: 1 / -1;
    }
    
    .no-commands i {
        font-size: 4rem;
        margin-bottom: 20px;
        opacity: 0.3;
    }
    
    .no-commands h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
    
    .command-usage {
        cursor: pointer;
        transition: background-color 0.2s ease;
    }
    
    .command-usage:hover {
        background-color: #e9ecef !important;
    }
    
    .toast {
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
`;
document.head.appendChild(style);
