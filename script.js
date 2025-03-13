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




