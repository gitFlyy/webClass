
let score = 0;
let arrowFlying = false;

const gameArea = document.getElementById('gameArea');
const arrow = document.getElementById('arrow');
const enemy = document.getElementById('enemy');
const scoreDisplay = document.querySelector('#score div');

gameArea.addEventListener('click', function(e) {
    if (arrowFlying) return;
    
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
