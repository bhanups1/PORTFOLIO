document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("certModal");
    const openBtn = document.getElementById("openCertBtn");
    const closeBtn = document.getElementById("closeCertBtn");

    if (!modal || !openBtn || !closeBtn) return;

    openBtn.addEventListener("click", () => {
        modal.style.display = "block";
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
});
