const snowContainer = document.getElementById("snow-container");
const flakes = [];

function createSnowflake() {
    const flake = document.createElement("div");
    flake.classList.add("snowflake");

    // random size
    const size = 4 + Math.random() * 4;
    flake.style.width = size + "px";
    flake.style.height = size + "px";

    // start position
    flake.x = Math.random() * window.innerWidth;
    flake.y = -20; // start offscreen

    flake.style.left = flake.x + "px";
    flake.style.top = flake.y + "px";

    // random fall speed
    flake.speed = 5;

    snowContainer.appendChild(flake);
    flakes.push(flake);
}

function updateSnow() {
    for (let flake of flakes) {
        // Move down
        flake.y += flake.speed;

        // Update position
        flake.style.top = flake.y + "px";

        // STOP at bottom (no removing)
        if (flake.y + flake.offsetHeight >= window.innerHeight) {
            flake.speed = 0; // stops moving
            flake.style.display = "none";
        }
    }

    requestAnimationFrame(updateSnow);
}

// create new flakes every 120ms
setInterval(createSnowflake, 1);

// start the loop
updateSnow();
