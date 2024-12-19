document.addEventListener("DOMContentLoaded", () => {
    
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    
    const tableRows = document.querySelectorAll("table tbody tr");
    tableRows.forEach(row => {
        row.addEventListener("mouseenter", () => row.style.backgroundColor = "#fff3f8");
        row.addEventListener("mouseleave", () => row.style.backgroundColor = "");
    });
});