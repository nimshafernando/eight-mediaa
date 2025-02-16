document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");
    const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

    let lastScrollTop = 0;
    let sidebarOpen = false;

    // Hides navbar on scroll
    window.addEventListener("scroll", () => {
        if (sidebarOpen) return;

        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        navbar.style.top = scrollTop > lastScrollTop ? "-80px" : "0";
        lastScrollTop = scrollTop;
    });

    // Opens sidebar when clicking hamburger
    hamburger.addEventListener("click", () => {
        sidebar.classList.add("active");
        sidebarOpen = true;
        navbar.style.top = "0"; // Keeps navbar visible when sidebar is open
    });

    // Closes sidebar when clicking close button
    closeBtn.addEventListener("click", () => {
        closeSidebar();
    });

    // Closes sidebar when clicking a link
    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeSidebar();
        });
    });

    // Closes sidebar when clicking outside
    document.addEventListener("click", (event) => {
        if (sidebarOpen && !sidebar.contains(event.target) && !hamburger.contains(event.target)) {
            closeSidebar();
        }
    });

    // Function to close sidebar
    function closeSidebar() {
        sidebar.classList.remove("active");
        sidebarOpen = false;
    }
});
