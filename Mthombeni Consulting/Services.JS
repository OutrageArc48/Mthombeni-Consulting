document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service");

    services.forEach(service => {
        service.style.opacity = "0";
        service.style.transform = "translateY(20px)";
        setTimeout(() => {
            service.style.opacity = "1";
            service.style.transform = "translateY(0)";
            service.style.transition = "all 0.6s ease-in-out";
        }, 300);
    });
});
