document.addEventListener("DOMContentLoaded", function () {
    const gameScreen = document.querySelector(".game-screen");
    const coinCount = document.getElementById("coin-count");

    let userCoins = 0;

    function createSquare(color) {
        var square = document.createElement("div");
        square.className = "square " + color;
        square.onclick = function() {
            changeColor(this);
        };
        return square;
    }

    function changeColor(element) {
        element.classList.toggle("red");
        userCoins += 1;
        coinCount.textContent = userCoins;
    }

    var map = document.querySelector(".map");

    // Генерируем квадратики внутри элемента с классом "map"
    for (var i = 0; i < 13; i++) {
        var row = document.createElement("div");
        row.className = "row";

        for (var j = 0; j < 15; j++) {
            var yellowSquare = createSquare("yellow");
            row.appendChild(yellowSquare);
        }

        map.appendChild(row);
    }

  

    coinCount.textContent = userCoins;


});
