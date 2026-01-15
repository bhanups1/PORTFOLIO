// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Update active nav link
                document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                this.classList.add('active');
            }
        }
    });
});

// Modal functionality for certifications
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".cert-modal");
    const closeBtn = document.querySelector(".close-btn");
    const certItems = document.querySelectorAll(".cert-item");

    if (certItems.length > 0 && modal && closeBtn) {
        certItems.forEach(item => {
            item.addEventListener("click", () => {
                modal.style.display = "block";
            });
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Close modal when clicking outside iframe
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });

        // Close modal on ESC key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                modal.style.display = "none";
            }
        });
    }
});
