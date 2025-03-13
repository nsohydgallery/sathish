const canvas = document.getElementById("planetCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = 200;

const planets = [];
for (let i = 0; i < 12; i++) {
    planets.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 3,
        speed: Math.random() * 2 + 1
    });
}

function drawPlanets() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    planets.forEach(planet => {
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.fill();
        planet.x += planet.speed;
        if (planet.x > canvas.width) planet.x = 0;
    });
    requestAnimationFrame(drawPlanets);
}
drawPlanets();