const bowWrapper = document.getElementById('bowWrapper');
const bow = document.getElementById('bow');
const arrow = document.getElementById('arrow');
const target = document.getElementById('target');
const scoreDisplay = document.getElementById('scoreVal');
const missDisplay = document.getElementById('missVal');
const gameOverScreen = document.getElementById('gameOver');

let score = 0;
let misses = 0;
let isFiring = false;
let targetSpeed = 3;
let targetDir = 1;
let targetY = 50; // Percentage

// 1. Bow Follows Mouse
window.addEventListener('mousemove', (e) => {
    if (misses >= 5) return;
    const yPos = e.clientY;
    bowWrapper.style.top = `${yPos}px`;
});

// 2. Fire Arrow
window.addEventListener('mousedown', () => {
    if (isFiring || misses >= 5) return;
    fireArrow();
});

function fireArrow() {
    isFiring = true;
    arrow.classList.remove('hidden');
    
    let arrowX = 40; // Initial left position
    const arrowY = bowWrapper.offsetTop;

    function animate() {
        arrowX += 25; // Arrow Speed
        arrow.style.left = `${arrowX}px`;

        const aRect = arrow.getBoundingClientRect();
        const tRect = target.getBoundingClientRect();

        // Collision Logic
        if (aRect.right > tRect.left && aRect.left < tRect.right &&
            aRect.bottom > tRect.top && aRect.top < tRect.bottom) {
            handleHit();
            return;
        }

        // Miss Logic
        if (arrowX > window.innerWidth) {
            handleMiss();
            return;
        }

        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

function handleHit() {
    score++;
    scoreDisplay.innerText = score;
    targetSpeed += 0.5; // Difficulty increase
    resetArrow();
    target.classList.add('scale-125', 'bg-yellow-400');
    setTimeout(() => target.classList.remove('scale-125', 'bg-yellow-400'), 100);
}

function handleMiss() {
    misses++;
    missDisplay.innerText = misses;
    if (misses >= 5) {
        document.getElementById('finalScore').innerText = score;
        gameOverScreen.classList.remove('hidden');
    }
    resetArrow();
}

function resetArrow() {
    isFiring = false;
    arrow.classList.add('hidden');
    arrow.style.left = '50%';
}

// 3. Target Movement Loop
function moveTarget() {
    targetY += targetSpeed * targetDir * 0.1;
    if (targetY > 85 || targetY < 15) targetDir *= -1;
    target.style.top = `${targetY}%`;
    requestAnimationFrame(moveTarget);
}

moveTarget();