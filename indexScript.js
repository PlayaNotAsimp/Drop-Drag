var score = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data).cloneNode(true);

    // Adjust the ID to ensure it's unique
    var newID = data + new Date().getTime();
    draggedElement.setAttribute("id", newID);

    ev.target.appendChild(draggedElement);

    // Update score
    score += 10;
    document.getElementById("score").innerText = "Score: " + score;

    // Hide the original dragged element
    document.getElementById(data).style.display = "none";

    // Add bouncing animation
    animateBounce(draggedElement);
}

function animateBounce(element) {
    var position = 0;
    var interval = setInterval(frame, 5);

    function frame() {
        if (position == 20) {
            clearInterval(interval);
        } else {
            position++;
            element.style.top = position + "px";
        }
    }
}

function resetGame() {
    score = 0;
    document.getElementById("score").innerText = "Score: 0";

    // Show all hidden cars in div1
    var div1Cars = document.getElementById("div1").getElementsByTagName("img");
    for (var i = 0; i < div1Cars.length; i++) {
        div1Cars[i].style.display = "inline-block";
    }

    // Remove all cars from div2
    var div2 = document.getElementById("div2");
    while (div2.firstChild) {
        div2.removeChild(div2.firstChild);
    }
}

