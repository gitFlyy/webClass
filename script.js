const bowWrapper = document.getElementById('bowWrapper');
const bow = document.getElementById('bow');
const arrow = document.getElementById('arrow');
const target = document.getElementById('target');
const scoreDisplay = document.getElementById('scoreVal');
const missDisplay = document.getElementById('missVal');
const gameOverScreen = document.getElementById('gameOver');

let score = 0;
let arrowFlying = false;
let timeLeft = 30;
let gameActive = true;

const gameArea = document.getElementById('gameArea');
const arrow = document.getElementById('arrow');
const enemy = document.getElementById('enemy');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const gameOverDiv = document.getElementById('gameOver');
const finalScoreDisplay = document.getElementById('finalScore');
const restartButton = document.getElementById('restart');

// Timer countdown
const timer = setInterval(function() {
    timeLeft = timeLeft - 1;
    timerDisplay.textContent = 'Time: ' + timeLeft;
    
    if (timeLeft <= 0) {
        clearInterval(timer);
        gameActive = false;
        gameArea.style.display = 'none';
        gameOverDiv.classList.remove('hidden');
        finalScoreDisplay.textContent = 'Final Score: ' + score;
    }
}, 1000);

// Restart button
restartButton.addEventListener('click', function() {
    score = 0;
    timeLeft = 30;
    gameActive = true;
    arrowFlying = false;
    
    scoreDisplay.textContent = 'Score: 0';
    timerDisplay.textContent = 'Time: 30';
    gameArea.style.display = 'block';
    gameOverDiv.classList.add('hidden');
    arrow.classList.add('hidden');
    
    const newTimer = setInterval(function() {
        timeLeft = timeLeft - 1;
        timerDisplay.textContent = 'Time: ' + timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(newTimer);
            gameActive = false;
            gameArea.style.display = 'none';
            gameOverDiv.classList.remove('hidden');
            finalScoreDisplay.textContent = 'Final Score: ' + score;
        }
    }, 1000);
});

gameArea.addEventListener('click', function(e) {
    if (arrowFlying || !gameActive) return;
    
    const clickY = e.clientY - gameArea.getBoundingClientRect().top;
    
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