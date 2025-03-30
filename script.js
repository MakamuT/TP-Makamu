/* About Tabs */
const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        const activeTab = tabsContainer.querySelector(".active");
        if (activeTab) {
            activeTab.classList.remove("active");
            const activeContent = aboutSection.querySelector(".tab-content.active");
            if (activeContent) {
                activeContent.classList.remove("active");
            }
        }
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        const activeContent = aboutSection.querySelector(".tab-content.active");
        if (activeContent) {
            activeContent.classList.remove("active");
        }
        aboutSection.querySelector(target).classList.add("active");
    }
});