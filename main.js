// Variáveis para controlar os efeitos festivos (modifique aqui manualmente)
let halloweenMode = true; // Mude para true para ativar os efeitos de Halloween
let christmasMode = false; // Mude para true para ativar os efeitos de Natal
let pascoaMode = false; // Mude para true para ativar os efeitos de Páscoa

// Dados dos livros
const books = [
    {
        id: 1,
        title: "O Nosso Pequeno Infinito",
        genre: "Drama, Romance",
        year: 2025,
        pages: 320,
        price: 0.00,
        image: "image/ONossoPequenoInfinito.png",
        description: "Uma história emocionante sobre amor, perda e a busca pelo significado da vida.",
        featured: true,
        available: false,
        purchaseLinks: {
            amazon: "#",
            kindle: "#",
            other: "#",
        },
    },
];

// Elementos DOM
const booksGrid = document.getElementById('booksGrid');
const bookModal = document.getElementById('bookModal');
const closeModal = document.getElementById('closeModal');
const modalContent = document.getElementById('modalContent');
const contactForm = document.getElementById('contactForm');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Variáveis para efeitos festivos
let festiveInterval;
let batElements = [];
let ghostElements = [];
let pumpkinElements = [];
let snowElements = [];
let snowflakeElements = [];
let giftElements = [];
let reindeerElements = [];
let bunnyElements = [];
let eggElements = [];
let flowerElements = [];
let carrotElements = [];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    renderBooks();
    setupEventListeners();
    checkSavedTheme();
    checkActiveFestiveTheme();
});

// Verificar tema festivo ativo
function checkActiveFestiveTheme() {
    if (halloweenMode) {
        activateHalloween();
    } else if (christmasMode) {
        activateChristmas();
    } else if (pascoaMode) {
        activatePascoa();
    }
}

// Sistema principal de controle de temas
function setFestiveTheme(theme) {
    // Resetar todas as variáveis
    halloweenMode = false;
    christmasMode = false;
    pascoaMode = false;
    
    // Ativar o tema selecionado
    switch(theme) {
        case 'halloween':
            halloweenMode = true;
            activateHalloween();
            break;
        case 'christmas':
            christmasMode = true;
            activateChristmas();
            break;
        case 'pascoa':
            pascoaMode = true;
            activatePascoa();
            break;
        case 'none':
        default:
            deactivateAllFestiveThemes();
            break;
    }
}

// HALLOWEEN - Função para ativar efeitos de Halloween
function activateHalloween() {
    deactivateAllFestiveThemes();
    halloweenMode = true;
    
    document.body.classList.add('halloween-mode');
    
    // Cores do Halloween
    document.documentElement.style.setProperty('--primary', '#ff6b00');
    document.documentElement.style.setProperty('--secondary', '#8b4513');
    document.documentElement.style.setProperty('--accent', '#ff4500');
    document.documentElement.style.setProperty('--bg-color', '#1a0f00');
    document.documentElement.style.setProperty('--card-bg', '#2d1a00');
    document.documentElement.style.setProperty('--text-color', '#ffa500');
    
    // Elementos visuais do Halloween
    createFlyingBats();
    createFloatingGhosts();
    createPumpkins();
    createFallingLeaves();
    playHalloweenAmbience();
    
    // Textos temáticos
    updateTextsForHalloween();
    
    // Efeitos nos botões
    styleButtonsForHalloween();
    
    console.log('🎃 Modo Halloween ativado!');
}

// NATAL - Função para ativar efeitos de Natal
function activateChristmas() {
    deactivateAllFestiveThemes();
    christmasMode = true;
    
    document.body.classList.add('christmas-mode');
    
    // Cores do Natal
    document.documentElement.style.setProperty('--primary', '#b30000');
    document.documentElement.style.setProperty('--secondary', '#0a5c36');
    document.documentElement.style.setProperty('--accent', '#ffd700');
    document.documentElement.style.setProperty('--bg-color', '#0a2f1c');
    document.documentElement.style.setProperty('--card-bg', '#1a3d2d');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    
    // Elementos visuais do Natal
    createFallingSnow();
    createSnowflakes();
    createFloatingGifts();
    createFlyingReindeer();
    playChristmasAmbience();
    
    // Textos temáticos
    updateTextsForChristmas();
    
    // Efeitos nos botões
    styleButtonsForChristmas();
    
    console.log('🎄 Modo Natal ativado!');
}

// PÁSCOA - Função para ativar efeitos de Páscoa
function activatePascoa() {
    deactivateAllFestiveThemes();
    pascoaMode = true;
    
    document.body.classList.add('pascoa-mode');
    
    // Cores da Páscoa
    document.documentElement.style.setProperty('--primary', '#9c27b0');
    document.documentElement.style.setProperty('--secondary', '#4caf50');
    document.documentElement.style.setProperty('--accent', '#ffeb3b');
    document.documentElement.style.setProperty('--bg-color', '#f3e5f5');
    document.documentElement.style.setProperty('--card-bg', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#7b1fa2');
    
    // Elementos visuais da Páscoa
    createHoppingBunnies();
    createFallingEggs();
    createFloatingFlowers();
    createCarrots();
    playPascoaAmbience();
    
    // Textos temáticos
    updateTextsForPascoa();
    
    // Efeitos nos botões
    styleButtonsForPascoa();
    
    console.log('🐰 Modo Páscoa ativado!');
}

// Função para desativar todos os temas festivos
function deactivateAllFestiveThemes() {
    halloweenMode = false;
    christmasMode = false;
    pascoaMode = false;
    
    document.body.classList.remove('halloween-mode', 'christmas-mode', 'pascoa-mode');
    
    // Restaurar cores originais
    const isDarkTheme = document.body.classList.contains('dark-theme');
    if (isDarkTheme) {
        document.documentElement.style.setProperty('--primary', '#2c3e50');
        document.documentElement.style.setProperty('--secondary', '#8b4513');
        document.documentElement.style.setProperty('--accent', '#c19a6b');
        document.documentElement.style.setProperty('--bg-color', '#121212');
        document.documentElement.style.setProperty('--card-bg', '#1e1e1e');
        document.documentElement.style.setProperty('--text-color', '#e0e0e0');
    } else {
        document.documentElement.style.setProperty('--primary', '#2c3e50');
        document.documentElement.style.setProperty('--secondary', '#8b4513');
        document.documentElement.style.setProperty('--accent', '#c19a6b');
        document.documentElement.style.setProperty('--bg-color', '#f5f5f5');
        document.documentElement.style.setProperty('--card-bg', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#333333');
    }
    
    // Limpar todos os elementos festivos
    clearAllFestiveElements();
    
    // Restaurar textos originais
    restoreOriginalTexts();
    
    // Restaurar botões
    restoreOriginalButtons();
    
    console.log('🎭 Todos os temas festivos desativados!');
}

// ========== EFEITOS DE HALLOWEEN ==========

function createFlyingBats() {
    const batContainer = document.createElement('div');
    batContainer.className = 'festive-bats';
    batContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    `;
    document.body.appendChild(batContainer);
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            if (!halloweenMode) return;
            createBat(batContainer);
        }, i * 1000);
    }
}

function createBat(container) {
    const bat = document.createElement('div');
    bat.innerHTML = '🦇';
    bat.style.cssText = `
        position: absolute;
        font-size: 24px;
        top: ${Math.random() * 100}%;
        left: -50px;
        animation: flyBat 15s linear infinite;
        animation-delay: ${Math.random() * 5}s;
        filter: drop-shadow(0 0 5px orange);
    `;
    
    container.appendChild(bat);
    batElements.push(bat);
}

function createFloatingGhosts() {
    const ghostContainer = document.createElement('div');
    ghostContainer.className = 'festive-ghosts';
    ghostContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9998;
    `;
    document.body.appendChild(ghostContainer);
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            if (!halloweenMode) return;
            createGhost(ghostContainer);
        }, i * 2000);
    }
}

function createGhost(container) {
    const ghost = document.createElement('div');
    ghost.innerHTML = '👻';
    ghost.style.cssText = `
        position: absolute;
        font-size: 32px;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: floatGhost 20s ease-in-out infinite;
        animation-delay: ${Math.random() * 10}s;
        opacity: 0.7;
        filter: drop-shadow(0 0 8px white);
    `;
    
    container.appendChild(ghost);
    ghostElements.push(ghost);
}

function createPumpkins() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const pumpkin = document.createElement('div');
        pumpkin.innerHTML = '🎃';
        pumpkin.style.cssText = `
            position: absolute;
            font-size: 48px;
            bottom: 20px;
            right: 20px;
            animation: glowPumpkin 3s ease-in-out infinite;
            z-index: 10;
            cursor: pointer;
        `;
        
        pumpkin.addEventListener('click', () => {
            pumpkin.style.animation = 'pumpkinJump 0.5s ease';
            setTimeout(() => {
                pumpkin.style.animation = 'glowPumpkin 3s ease-in-out infinite';
            }, 500);
        });
        
        section.style.position = 'relative';
        section.appendChild(pumpkin);
        pumpkinElements.push(pumpkin);
    });
}

function createFallingLeaves() {
    const leafContainer = document.createElement('div');
    leafContainer.className = 'festive-leaves';
    leafContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9997;
    `;
    document.body.appendChild(leafContainer);
    
    for (let i = 0; i < 15; i++) {
        createLeaf(leafContainer);
    }
}

function createLeaf(container) {
    const leaf = document.createElement('div');
    leaf.innerHTML = '🍂';
    leaf.style.cssText = `
        position: absolute;
        font-size: 20px;
        top: -30px;
        left: ${Math.random() * 100}%;
        animation: fallLeaf ${10 + Math.random() * 10}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
        opacity: ${0.3 + Math.random() * 0.7};
    `;
    
    container.appendChild(leaf);
}

function updateTextsForHalloween() {
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    if (heroTitle) heroTitle.textContent = 'Boo! Bem-vindo ao Meu Mundo Assustadoramente Literário';
    if (heroText) heroText.textContent = 'Descubra histórias que vão fazer seu coração acelerar e sua imaginação voar nesta noite especial!';
    
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        const originalText = title.getAttribute('data-original') || title.textContent;
        title.setAttribute('data-original', originalText);
        
        if (title.textContent.includes('Meus Livros')) {
            title.textContent = '📚 Meus Livros';
        } else if (title.textContent.includes('Blog')) {
            title.textContent = '👻 Blog & Notícias';
        } else if (title.textContent.includes('Contato')) {
            title.textContent = '🦇 Contato';
        }
    });
}

function styleButtonsForHalloween() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        const originalBg = btn.style.background;
        const originalBorder = btn.style.border;
        btn.setAttribute('data-original-bg', originalBg);
        btn.setAttribute('data-original-border', originalBorder);
        
        btn.style.background = 'linear-gradient(45deg, #ff6b00, #ff4500)';
        btn.style.border = '2px solid #8b4513';
        btn.style.color = 'white';
    });
}

// ========== EFEITOS DE NATAL ==========

function createFallingSnow() {
    const snowContainer = document.createElement('div');
    snowContainer.className = 'festive-snow';
    snowContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        background: linear-gradient(transparent 90%, rgba(255,255,255,0.1) 100%);
    `;
    document.body.appendChild(snowContainer);
    
    for (let i = 0; i < 50; i++) {
        createSnowParticle(snowContainer);
    }
}

function createSnowParticle(container) {
    const snow = document.createElement('div');
    snow.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: white;
        border-radius: 50%;
        top: -10px;
        left: ${Math.random() * 100}%;
        animation: fallSnow ${8 + Math.random() * 12}s linear infinite;
        animation-delay: ${Math.random() * 10}s;
        opacity: ${0.3 + Math.random() * 0.7};
        filter: blur(1px);
    `;
    
    container.appendChild(snow);
    snowElements.push(snow);
}

function createSnowflakes() {
    const snowflakeContainer = document.createElement('div');
    snowflakeContainer.className = 'festive-snowflakes';
    snowflakeContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9998;
    `;
    document.body.appendChild(snowflakeContainer);
    
    for (let i = 0; i < 12; i++) {
        createSnowflake(snowflakeContainer);
    }
}

function createSnowflake(container) {
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '❄️';
    snowflake.style.cssText = `
        position: absolute;
        font-size: ${20 + Math.random() * 15}px;
        top: -30px;
        left: ${Math.random() * 100}%;
        animation: fallSnowflake ${10 + Math.random() * 15}s linear infinite;
        animation-delay: ${Math.random() * 8}s;
        opacity: ${0.4 + Math.random() * 0.6};
        filter: drop-shadow(0 0 3px white);
    `;
    
    container.appendChild(snowflake);
    snowflakeElements.push(snowflake);
}

function createFloatingGifts() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const gift = document.createElement('div');
        gift.innerHTML = '🎁';
        gift.style.cssText = `
            position: absolute;
            font-size: 40px;
            bottom: 20px;
            left: 20px;
            animation: floatGift 4s ease-in-out infinite;
            z-index: 10;
            cursor: pointer;
            filter: drop-shadow(0 0 5px gold);
        `;
        
        gift.addEventListener('click', () => {
            gift.style.animation = 'giftShake 0.5s ease';
            setTimeout(() => {
                gift.style.animation = 'floatGift 4s ease-in-out infinite';
            }, 500);
        });
        
        section.style.position = 'relative';
        section.appendChild(gift);
        giftElements.push(gift);
    });
}

function createFlyingReindeer() {
    const reindeerContainer = document.createElement('div');
    reindeerContainer.className = 'festive-reindeer';
    reindeerContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9997;
    `;
    document.body.appendChild(reindeerContainer);
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            if (!christmasMode) return;
            createReindeer(reindeerContainer);
        }, i * 3000);
    }
}

function createReindeer(container) {
    const reindeer = document.createElement('div');
    reindeer.innerHTML = '🦌';
    reindeer.style.cssText = `
        position: absolute;
        font-size: 28px;
        top: ${10 + Math.random() * 30}%;
        left: -50px;
        animation: flyReindeer 25s linear infinite;
        animation-delay: ${Math.random() * 5}s;
        filter: drop-shadow(0 0 5px red);
    `;
    
    container.appendChild(reindeer);
    reindeerElements.push(reindeer);
}

function updateTextsForChristmas() {
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    if (heroTitle) heroTitle.textContent = '🎄 Feliz Natal! Bem-vindo ao Meu Mundo Literário';
    if (heroText) heroText.textContent = 'Descubra histórias mágicas que aquecerão seu coração nesta época especial do ano!';
    
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        const originalText = title.getAttribute('data-original') || title.textContent;
        title.setAttribute('data-original', originalText);
        
        if (title.textContent.includes('Meus Livros')) {
            title.textContent = '📚 Meus Livros';
        } else if (title.textContent.includes('Blog')) {
            title.textContent = '🎅 Blog Festivo';
        } else if (title.textContent.includes('Contato')) {
            title.textContent = '🌟 Contato Mágico';
        }
    });
}

function styleButtonsForChristmas() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        const originalBg = btn.style.background;
        const originalBorder = btn.style.border;
        btn.setAttribute('data-original-bg', originalBg);
        btn.setAttribute('data-original-border', originalBorder);
        
        btn.style.background = 'linear-gradient(45deg, #b30000, #ff0000)';
        btn.style.border = '2px solid #ffd700';
        btn.style.color = 'white';
        btn.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.3)';
    });
}

// ========== EFEITOS DE PÁSCOA ==========

function createHoppingBunnies() {
    const bunnyContainer = document.createElement('div');
    bunnyContainer.className = 'festive-bunnies';
    bunnyContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    `;
    document.body.appendChild(bunnyContainer);
    
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            if (!pascoaMode) return;
            createBunny(bunnyContainer);
        }, i * 1500);
    }
}

function createBunny(container) {
    const bunny = document.createElement('div');
    bunny.innerHTML = '🐰';
    bunny.style.cssText = `
        position: absolute;
        font-size: 32px;
        top: ${Math.random() * 100}%;
        left: -50px;
        animation: hopBunny 20s linear infinite;
        animation-delay: ${Math.random() * 8}s;
        filter: drop-shadow(0 0 5px pink);
    `;
    
    container.appendChild(bunny);
    bunnyElements.push(bunny);
}

function createFallingEggs() {
    const eggContainer = document.createElement('div');
    eggContainer.className = 'festive-eggs';
    eggContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9998;
    `;
    document.body.appendChild(eggContainer);
    
    for (let i = 0; i < 20; i++) {
        createEgg(eggContainer);
    }
}

function createEgg(container) {
    const egg = document.createElement('div');
    egg.innerHTML = '🥚';
    egg.style.cssText = `
        position: absolute;
        font-size: ${16 + Math.random() * 12}px;
        top: -30px;
        left: ${Math.random() * 100}%;
        animation: fallEgg ${12 + Math.random() * 10}s linear infinite;
        animation-delay: ${Math.random() * 6}s;
        opacity: ${0.5 + Math.random() * 0.5};
    `;
    
    container.appendChild(egg);
    eggElements.push(egg);
}

function createFloatingFlowers() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const flower = document.createElement('div');
        flower.innerHTML = '🌼';
        flower.style.cssText = `
            position: absolute;
            font-size: 36px;
            bottom: 20px;
            right: 20px;
            animation: floatFlower 5s ease-in-out infinite;
            z-index: 10;
            cursor: pointer;
            filter: drop-shadow(0 0 5px yellow);
        `;
        
        flower.addEventListener('click', () => {
            flower.style.animation = 'flowerSpin 0.8s ease';
            setTimeout(() => {
                flower.style.animation = 'floatFlower 5s ease-in-out infinite';
            }, 800);
        });
        
        section.style.position = 'relative';
        section.appendChild(flower);
        flowerElements.push(flower);
    });
}

function createCarrots() {
    const carrotContainer = document.createElement('div');
    carrotContainer.className = 'festive-carrots';
    carrotContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9997;
    `;
    document.body.appendChild(carrotContainer);
    
    for (let i = 0; i < 8; i++) {
        createCarrot(carrotContainer);
    }
}

function createCarrot(container) {
    const carrot = document.createElement('div');
    carrot.innerHTML = '🥕';
    carrot.style.cssText = `
        position: absolute;
        font-size: 24px;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: bounceCarrot 15s ease-in-out infinite;
        animation-delay: ${Math.random() * 10}s;
        opacity: 0.6;
    `;
    
    container.appendChild(carrot);
    carrotElements.push(carrot);
}

function updateTextsForPascoa() {
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    if (heroTitle) heroTitle.textContent = '🐰 Feliz Páscoa! Bem-vindo ao Meu Mundo Literário';
    if (heroText) heroText.textContent = 'Descubra histórias renovadoras que trarão nova vida à sua imaginação nesta época de renascimento!';
    
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        const originalText = title.getAttribute('data-original') || title.textContent;
        title.setAttribute('data-original', originalText);
        
        if (title.textContent.includes('Meus Livros')) {
            title.textContent = '📚 Meus Livros';
        } else if (title.textContent.includes('Blog')) {
            title.textContent = '🌷 Blog Primaveril';
        } else if (title.textContent.includes('Contato')) {
            title.textContent = '🐇 Contato Fofo';
        }
    });
}

function styleButtonsForPascoa() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        const originalBg = btn.style.background;
        const originalBorder = btn.style.border;
        btn.setAttribute('data-original-bg', originalBg);
        btn.setAttribute('data-original-border', originalBorder);
        
        btn.style.background = 'linear-gradient(45deg, #9c27b0, #e91e63)';
        btn.style.border = '2px solid #4caf50';
        btn.style.color = 'white';
        btn.style.boxShadow = '0 4px 15px rgba(156, 39, 176, 0.3)';
    });
}

// ========== FUNÇÕES AUXILIARES ==========

function playHalloweenAmbience() {
    console.log('🎃 Efeitos sonoros de Halloween ativados!');
}

function playChristmasAmbience() {
    console.log('🎄 Efeitos sonoros de Natal ativados!');
}

function playPascoaAmbience() {
    console.log('🐰 Efeitos sonoros de Páscoa ativados!');
}

function restoreOriginalTexts() {
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    if (heroTitle) heroTitle.textContent = 'Bem-vindo ao Meu Mundo Literário';
    if (heroText) heroText.textContent = 'Descubra minhas obras, inspirações e histórias que dão vida às páginas dos meus livros.';
    
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        const originalText = title.getAttribute('data-original');
        if (originalText) {
            title.textContent = originalText;
        }
    });
}

function restoreOriginalButtons() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        const originalBg = btn.getAttribute('data-original-bg');
        const originalBorder = btn.getAttribute('data-original-border');
        
        btn.style.background = originalBg || '';
        btn.style.border = originalBorder || '';
        btn.style.color = '';
        btn.style.boxShadow = '';
    });
}

function clearAllFestiveElements() {
    // Limpar intervalos
    if (festiveInterval) {
        clearInterval(festiveInterval);
    }
    
    // Remover todos os elementos
    const allElements = [
        ...batElements, ...ghostElements, ...pumpkinElements,
        ...snowElements, ...snowflakeElements, ...giftElements, ...reindeerElements,
        ...bunnyElements, ...eggElements, ...flowerElements, ...carrotElements
    ];
    
    allElements.forEach(el => {
        if (el && el.parentNode) {
            el.remove();
        }
    });
    
    // Limpar arrays
    batElements = [];
    ghostElements = [];
    pumpkinElements = [];
    snowElements = [];
    snowflakeElements = [];
    giftElements = [];
    reindeerElements = [];
    bunnyElements = [];
    eggElements = [];
    flowerElements = [];
    carrotElements = [];
    
    // Remover containers
    const containers = document.querySelectorAll(
        '.festive-bats, .festive-ghosts, .festive-leaves, ' +
        '.festive-snow, .festive-snowflakes, .festive-reindeer, ' +
        '.festive-bunnies, .festive-eggs, .festive-carrots'
    );
    containers.forEach(container => {
        if (container && container.parentNode) {
            container.remove();
        }
    });
}

// ========== FUNÇÕES EXISTENTES (mantidas do código original) ==========

function checkSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    
    // Se algum tema festivo estiver ativo, reaplicar as cores
    if (halloweenMode) {
        activateHalloween();
    } else if (christmasMode) {
        activateChristmas();
    } else if (pascoaMode) {
        activatePascoa();
    }
}

function renderBooks() {
    booksGrid.innerHTML = '';
    
    books.forEach(book => {
        const bookCard = createBookCard(book);
        booksGrid.appendChild(bookCard);
    });
}

function createBookCard(book) {
    const card = document.createElement("div");
    card.className = "book-card";

    const disabledAttr = book.available ? "" : "disabled";
    const disabledText = book.available
        ? ""
        : '<small style="color:#f00;display:block;margin-top:6px">Disponível em breve</small>';

    card.innerHTML = `
        <div class="book-image">
            <img src="${book.image}" alt="${book.title}">
            ${book.featured ? '<div class="book-badge">Destaque</div>' : ""}
        </div>
        <div class="book-info">
            <h3 class="book-title">${book.title}</h3>
            <div class="book-meta">${book.genre} • ${book.year} • ${book.pages} páginas</div>
            <p class="book-description">${book.description}</p>
            <div class="book-price">R$ ${book.price.toFixed(2)}</div>
            <div class="book-actions">
                <button class="btn btn-small btn-details" data-id="${book.id}" ${disabledAttr}>
                    <i class="fas fa-info-circle"></i> Detalhes
                </button>
                <button class="btn btn-small btn-secondary btn-buy" data-id="${book.id}" ${disabledAttr}>
                    <i class="fas fa-shopping-cart"></i> Comprar
                </button>
                ${disabledText}
            </div>
        </div>`;
    return card;
}

function setupEventListeners() {
    // Alternar tema
    themeToggle.addEventListener('click', toggleTheme);
    
    // Modal
    closeModal.addEventListener('click', closeBookModal);
    
    // Detalhes do livro (delegação de eventos)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-details') || 
            e.target.parentElement.classList.contains('btn-details')) {
            
            const button = e.target.classList.contains('btn-details') ? 
                          e.target : e.target.parentElement;
            const bookId = parseInt(button.getAttribute('data-id'));
            showBookDetails(bookId);
        }
        
        if (e.target.classList.contains('btn-buy') || 
            e.target.parentElement.classList.contains('btn-buy')) {
            
            const button = e.target.classList.contains('btn-buy') ? 
                          e.target : e.target.parentElement;
            const bookId = parseInt(button.getAttribute('data-id'));
            buyBook(bookId);
        }
    });
    
    // Fechar modal ao clicar fora
    window.addEventListener('click', function(e) {
        if (e.target === bookModal) {
            closeBookModal();
        }
    });
    
    // Formulário de contato
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitContactForm();
    });
    
    // Navegação suave
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
}

function showBookDetails(bookId) {
    const book = books.find(b => b.id === bookId);
    
    modalContent.innerHTML = `
        <div style="display: flex; gap: 30px; padding: 30px;">
            <div style="flex: 1;">
                <img src="${book.image}" alt="${book.title}" style="width: 100%; border-radius: 10px;">
            </div>
            <div style="flex: 2;">
                <h2 style="color: var(--primary); margin-bottom: 10px;">${book.title}</h2>
                <div style="color: var(--secondary); margin-bottom: 20px;">${book.genre} • ${book.year} • ${book.pages} páginas</div>
                <p style="margin-bottom: 20px; line-height: 1.8;">${book.description}</p>
                <div style="font-size: 1.5rem; font-weight: bold; color: var(--accent); margin-bottom: 20px;">R$ ${book.price.toFixed(2)}</div>
                <div style="margin-bottom: 20px;">
                    <h3 style="margin-bottom: 10px;">Onde Comprar:</h3>
                    <div style="display: flex; gap: 10px;">
                        <a href="${book.purchaseLinks.amazon}" class="btn btn-small" style="margin-right: 10px;">
                            <i class="fab fa-amazon"></i> Amazon
                        </a>
                        <a href="${book.purchaseLinks.kindle}" class="btn btn-small btn-secondary">
                            <i class="fas fa-tablet-alt"></i> Kindle
                        </a>
                        <a href="${book.purchaseLinks.other}" class="btn btn-small btn-outline" style="border-color: var(--primary); color: var(--primary);">
                            Outras Livrarias
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    bookModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBookModal() {
    bookModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function buyBook(bookId) {
    const book = books.find(b => b.id === bookId);
    alert(`Você será redirecionado para comprar "${book.title}"`);
}

function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.`);
    contactForm.reset();
}

// Adicionar animações CSS dinamicamente
const festiveStyles = document.createElement('style');
festiveStyles.textContent = `
    /* Animações Halloween */
    @keyframes flyBat {
        0% { transform: translateX(0) translateY(0) rotate(0deg); opacity: 1; }
        25% { transform: translateX(25vw) translateY(20vh) rotate(90deg); }
        50% { transform: translateX(50vw) translateY(-10vh) rotate(180deg); }
        75% { transform: translateX(75vw) translateY(15vh) rotate(270deg); }
        100% { transform: translateX(100vw) translateY(0) rotate(360deg); opacity: 0; }
    }
    
    @keyframes floatGhost {
        0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
        25% { transform: translateY(-20px) rotate(5deg); opacity: 1; }
        50% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
        75% { transform: translateY(15px) rotate(-5deg); opacity: 0.5; }
    }
    
    @keyframes glowPumpkin {
        0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px orange); }
        50% { transform: scale(1.1); filter: drop-shadow(0 0 15px #ff6b00); }
    }
    
    @keyframes pumpkinJump {
        0% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }
    
    @keyframes fallLeaf {
        0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 0.7; }
        100% { transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px) rotate(${360 + Math.random() * 360}deg); opacity: 0; }
    }
    
    /* Animações Natal */
    @keyframes fallSnow {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 0.8; }
        100% { transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
    }
    
    @keyframes fallSnowflake {
        0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 0.7; }
        100% { transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px) rotate(${360 + Math.random() * 360}deg); opacity: 0; }
    }
    
    @keyframes floatGift {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(5deg); }
    }
    
    @keyframes giftShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes flyReindeer {
        0% { transform: translateX(0) translateY(0) rotate(0deg); opacity: 1; }
        25% { transform: translateX(25vw) translateY(10vh) rotate(5deg); }
        50% { transform: translateX(50vw) translateY(-5vh) rotate(0deg); }
        75% { transform: translateX(75vw) translateY(8vh) rotate(-5deg); }
        100% { transform: translateX(100vw) translateY(0) rotate(0deg); opacity: 0; }
    }
    
    /* Animações Páscoa */
    @keyframes hopBunny {
        0% { transform: translateX(0) translateY(0) rotate(0deg); opacity: 1; }
        20% { transform: translateX(20vw) translateY(-30px) rotate(10deg); }
        40% { transform: translateX(40vw) translateY(0) rotate(0deg); }
        60% { transform: translateX(60vw) translateY(-25px) rotate(-8deg); }
        80% { transform: translateX(80vw) translateY(0) rotate(0deg); }
        100% { transform: translateX(100vw) translateY(0) rotate(0deg); opacity: 0; }
    }
    
    @keyframes fallEgg {
        0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 0.7; }
        100% { transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px) rotate(${180 + Math.random() * 180}deg); opacity: 0; }
    }
    
    @keyframes floatFlower {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-8px) rotate(5deg); }
    }
    
    @keyframes flowerSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes bounceCarrot {
        0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
        50% { transform: translateY(-15px) rotate(10deg); opacity: 0.8; }
    }
    
    /* Efeitos de hover para cada tema */
    .halloween-mode .book-card:hover {
        box-shadow: 0 10px 25px rgba(255, 107, 0, 0.3);
    }
    
    .christmas-mode .book-card:hover {
        box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);
    }
    
    .pascoa-mode .book-card:hover {
        box-shadow: 0 10px 25px rgba(156, 39, 176, 0.3);
    }
    
    /* Cores de fundo para headers */
    .halloween-mode header {
        background: linear-gradient(45deg, #2d1a00, #8b4513);
    }
    
    .christmas-mode header {
        background: linear-gradient(45deg, #b30000, #0a5c36);
    }
    
    .pascoa-mode header {
        background: linear-gradient(45deg, #9c27b0, #4caf50);
    }
    
    /* Cores de fundo para hero sections */
    .halloween-mode .hero {
        background: linear-gradient(rgba(45, 26, 0, 0.8), rgba(139, 69, 19, 0.8)), url('image/image5.png');
    }
    
    .christmas-mode .hero {
        background: linear-gradient(rgba(179, 0, 0, 0.7), rgba(10, 92, 54, 0.7)), url('image/image5.png');
    }
    
    .pascoa-mode .hero {
        background: linear-gradient(rgba(156, 39, 176, 0.7), rgba(76, 175, 80, 0.7)), url('image/image5.png');
    }
`;
document.head.appendChild(festiveStyles);