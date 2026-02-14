// Get elements
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const questionContainer = document.getElementById('questionContainer');
const successContainer = document.getElementById('successContainer');
const hint = document.getElementById('hint');

// Hints that appear when hovering over No button
const hints = [
    "Yakin? 🥺",
    "Coba pikirkan lagi... 💭",
    "Really? 😢",
    "Jangan gitu dong... 🥹",
    "Aku sedih nih... 😿",
    "Last chance! 💔",
    "Masa iya? 😭",
    "Please? 🙏"
];

let noClickCount = 0;
let yesFontSize = 1.2;

// No button hover effect - make it run away!
noButton.addEventListener('mouseenter', function() {
    const container = questionContainer;
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();
    
    // Calculate random position within container
    const maxX = containerRect.width - buttonRect.width - 40;
    const maxY = containerRect.height - buttonRect.height - 40;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Move button to random position
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    
    // Show hint
    if (noClickCount < hints.length) {
        hint.textContent = hints[noClickCount];
        hint.style.opacity = '1';
    }
    
    // Make Yes button bigger
    yesFontSize += 0.1;
    yesButton.style.fontSize = yesFontSize + 'em';
    
    noClickCount++;
    
    // Shrink No button
    if (noClickCount > 3) {
        const newSize = Math.max(0.5, 1 - (noClickCount * 0.1));
        noButton.style.transform = `scale(${newSize})`;
    }
    
    // Create floating sad emoji
    createFloatingEmoji('😢');
});

// No button click - also move it
noButton.addEventListener('click', function(e) {
    e.preventDefault();
    noButton.dispatchEvent(new Event('mouseenter'));
});

// Yes button click - show success!
yesButton.addEventListener('click', function() {
    questionContainer.style.display = 'none';
    successContainer.style.display = 'flex';
    
    // Create celebration effects
    createConfetti();
    createFloatingHearts();
    playParticleAnimation();
});

// Create floating hearts
function createFloatingHearts() {
    const hearts = ['❤️', '💕', '💖', '💗', '💘', '💝', '💓', '💞'];
    const numberOfHearts = 30;
    
    for (let i = 0; i < numberOfHearts; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.className = 'floating-heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (2 + Math.random() * 3) + 's';
            heart.style.fontSize = (20 + Math.random() * 30) + 'px';
            heart.style.animationDelay = Math.random() * 0.5 + 's';
            
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }, i * 100);
    }
}

// Create floating emoji
function createFloatingEmoji(emoji) {
    const element = document.createElement('div');
    element.textContent = emoji;
    element.className = 'floating-heart';
    element.style.left = noButton.style.left;
    element.style.top = noButton.style.top;
    element.style.fontSize = '30px';
    
    document.body.appendChild(element);
    setTimeout(() => element.remove(), 2000);
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff6b9d', '#ffd93d', '#6bccff', '#ff6bb5', '#95e1d3'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            
            document.querySelector('.confetti').appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 30);
    }
}

// Play particle animation
function playParticleAnimation() {
    setInterval(() => {
        if (Math.random() > 0.7) {
            const sparkle = document.createElement('div');
            sparkle.textContent = '✨';
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            
            successContainer.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        }
    }, 200);
}

// Create background hearts
function createBackgroundHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const hearts = ['💖', '💕', '💗', '💓', '💝', '💘'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.className = 'background-heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (10 + Math.random() * 10) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (20 + Math.random() * 20) + 'px';
        
        heartsContainer.appendChild(heart);
    }
}

// Initialize background hearts
createBackgroundHearts();

// Add some initial sparkle
setInterval(() => {
    if (Math.random() > 0.95 && questionContainer.style.display !== 'none') {
        const sparkle = document.createElement('div');
        sparkle.textContent = ['✨', '⭐', '💫'][Math.floor(Math.random() * 3)];
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.position = 'fixed';
        
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }
}, 300);

console.log('%c💕 Would You Be My Valentine? 💕', 'color: #ff69b4; font-size: 30px; font-weight: bold;');
console.log('%cMade with love ❤️', 'color: #ff1493; font-size: 16px;');
