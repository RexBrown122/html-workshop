/**
 * Memory Game
 *
 * Design a simple memory game.
 *  - Must have at least 16 cards (8 matches)
 *  - Cards are matched in pairs
 *  - Player can turn turnover 1 card at a time
 *  - Only 2 cards can be face-up at once.
 */
 var images = document.querySelectorAll("img");
 var selectedNum = 0;

window.onload = function() {
    
}

function select(n) {
    selectedNum++;
    if (selectedNum < 3) {
        images[n].style.filter = "brightness(100%)";
    }
    else {
        for (let i = 0; i < images.length; i++) {
            images[i].style.filter = "brightness(0%)";
        }
        selectedNum = 0;
    }
}