document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            responseMessage.textContent = "Thank you! Your message has been sent.";
            responseMessage.style.color = "green";
            form.reset();
            setTimeout(() => {
                responseMessage.textContent = '';
            }, 1000); // Clear message after 5 seconds
        } else {
            responseMessage.textContent = "Please fill out all fields.";
            responseMessage.style.color = "red";
        }
    });
});
