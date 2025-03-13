// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let query = document.getElementById("query").value;

    if (name && email && mobile && query) {
        alert("Thank you for reaching out! We will contact you soon.");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});

// Visitor Counter
let count = localStorage.getItem("visitorCount") || 0;
count++;
localStorage.setItem("visitorCount", count);
document.getElementById("visitorCount").innerText = count;

// Image Slider
let index = 0;
function slideImages() {
    let images = document.querySelectorAll(".slider img");
    images.forEach(img => img.style.transform = `translateX(-${index * 100}%)`);
    index = (index + 1) % images.length;
}
setInterval(slideImages, 3000);

4. Planetary Animation Code (planets.js)

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
