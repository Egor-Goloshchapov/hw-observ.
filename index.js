document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img.lazy-load");
    const loadButton = document.getElementById("load-images");

    const loadImage = (img) => {
        img.src = img.dataset.src;
        img.onload = () => img.classList.add("loaded");
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                obs.unobserve(entry.target);
            }
        });
    });

    images.forEach(img => observer.observe(img));

    loadButton.addEventListener("click", () => {
        images.forEach(img => {
            loadImage(img);
            observer.unobserve(img);
        });
    });
});
