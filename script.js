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

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        e.preventDefault();
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
        document.querySelector(".portfolio-popup").scrollTo(0, 0);
    }
});
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out")
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);
function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src =
        portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
        portfolioItem.querySelector(".portfolio-item-title").innerHTML;
    
    document.querySelector(".pp-body").innerHTML =
        portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}