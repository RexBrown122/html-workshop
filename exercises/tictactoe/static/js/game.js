window.onload = function() {
    const clearButton = document.getElementById('clear');
    const results = document.querySelector(".result");

    // Optional: Change the O's to Fros!
    const fro = "<img src='static/media/fro.png'>";

    // Load Audio files
    const youMad = new Audio();
    youMad.src = "static/media/youmad.mp3";
    youMad.load();

    const applause = new Audio();
    applause.src = "static/media/applause.mp3";
    applause.load();

    // Gather all boxes into an array
    const allBoxes = document.querySelectorAll(".box");

    // Create a very simplistic AI opponent
    const opponent = function() {
        // Get a random number from 1-9
        let o = Math.floor( (Math.random() * allBoxes.length) );
        console.log("Rolled a: ", o);
        // Give AI 5 seconds to make a move
        setTimeout(function() {

            if (!allBoxes[o].innerHTML) {
                allBoxes[o].innerHTML = fro;
                allBoxes[o].style.color = "#ffdb00";
            } else {
                // Recursion... start over again
                opponent();
            }
        }, 500);
    };

    // Game loop
    for (let b = 0; b < allBoxes.length; b++) {
        allBoxes[b].onclick = function() {
            if (this.innerHTML === "") {
                this.innerHTML = "X";
                this.style.color = "#06ff18";
            }

            // Check for win conditions
            let b1 = document.querySelector("#b1").innerHTML,
                b2 = document.querySelector("#b2").innerHTML,
                b3 = document.querySelector("#b3").innerHTML,
                b4 = document.querySelector("#b4").innerHTML,
                b5 = document.querySelector("#b5").innerHTML,
                b6 = document.querySelector("#b6").innerHTML,
                b7 = document.querySelector("#b7").innerHTML,
                b8 = document.querySelector("#b8").innerHTML,
                b9 = document.querySelector("#b9").innerHTML;

            if (b1 === "X" && b2 === "X" && b3 === "X" ||
                b1 === "X" && b4 === "X" && b7 === "X" ||
                b1 === "X" && b5 === "X" && b9 === "X" ||
                b1 === "X" && b4 === "X" && b7 === "X" ||
                b4 === "X" && b5 === "X" && b6 === "X" ||
                b7 === "X" && b8 === "X" && b9 === "X" ||
                b7 === "X" && b5 === "X" && b3 === "X" ||
                b2 === "X" && b5 === "X" && b8 === "X" ||
                b3 === "X" && b6 === "X" && b9 === "X" ) {

                results.innerHTML = "WE HAVE A WINNER!";
                applause.play();

            }

            opponent();
            if (b1 === fro && b2 === fro && b3 === fro ||
                b1 === fro && b4 === fro && b7 === fro ||
                b1 === fro && b5 === fro && b9 === fro ||
                b1 === fro && b4 === fro && b7 === fro ||
                b4 === fro && b5 === fro && b6 === fro ||
                b7 === fro && b8 === fro && b9 === fro ||
                b7 === fro && b5 === fro && b3 === fro ||
                b2 === fro && b5 === fro && b8 === fro ||
                b3 === fro && b6 === fro && b9 === fro ) {

                results.innerHTML = "YOU LOSE!";
                youMad.play();
            }

        };
    }

    // Clear the game board and start over
    clearButton.onclick = function() {
        for (let i = 0; i < allBoxes.length; i++) {
            allBoxes[i].innerHTML = "";
            results.innerHTML = "";
        }
    };
};
