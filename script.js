let score=0;
document.addEventListener('click', function() {
    score++;
    scoreCont.textContent = 'Your Score: ' + score;
    console.log('Screen tapped! Current score: ' + score);
})