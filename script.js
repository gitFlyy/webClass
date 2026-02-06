
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
    arrow.style.left = '100px';
    arrow.style.top = clickY + 'px';
    arrow.style.transform = 'none';
    
    arrowFlying = true;
    let arrowPosition = 100;
    
    const moveArrow = setInterval(function() {
        arrowPosition = arrowPosition + 48;
        arrow.style.left = arrowPosition + 'px';
        
        const arrowRect = arrow.getBoundingClientRect();
        const enemyRect = enemy.getBoundingClientRect();
        
        const hit = arrowRect.left < enemyRect.right &&
                    arrowRect.right > enemyRect.left &&
                    arrowRect.top < enemyRect.bottom &&
                    arrowRect.bottom > enemyRect.top;
        
        if (hit) {
            score = score + 1;
            scoreDisplay.textContent = 'Score: ' + score;
            clearInterval(moveArrow);
            arrow.classList.add('hidden');
            arrowFlying = false;
        }
        
        if (arrowPosition > window.innerWidth) {
            clearInterval(moveArrow);
            arrow.classList.add('hidden');
            arrowFlying = false;
        }
    }, 20);
});
