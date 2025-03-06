document.addEventListener("scroll", () => {
    const aboutSection = document.querySelector(".about div");
    if (window.scrollY > 100) {
        aboutSection.style.opacity = "1";
        aboutSection.style.transform = "translateY(0)";
        aboutSection.style.transition = "all 0.8s ease-in-out";
    }
});
