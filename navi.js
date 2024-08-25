let c=document.getElementById("search");

c.addEventListener("click", function() {
    var searchBarContainer = document.getElementById("search-bar-container");
    if (searchBarContainer.style.display === "none" || searchBarContainer.style.display === "") {
        searchBarContainer.style.display = "block";
        c.style.display="none";
    } else {
        searchBarContainer.style.display = "none";
        c.style.display="inline"
    }
});