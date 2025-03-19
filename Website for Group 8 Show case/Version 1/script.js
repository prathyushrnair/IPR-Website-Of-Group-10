// Pre-Order Form Submission
document.getElementById("preorder-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let message = document.getElementById("preorder-message");
    message.innerText = "Thank you for pre-ordering!";
    message.style.color = "#00ffcc";
    message.style.textShadow = "0 0 10px #00ffff";
});

// Newsletter Subscription
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let message = document.getElementById("newsletter-message");
    message.innerText = "Subscribed successfully!";
    message.style.color = "#ff00ff";
    message.style.textShadow = "0 0 10px #ff00ff";
});
