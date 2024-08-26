let mode = document.getElementById("toggle-switch");
function lightToDark() {
    document.getElementById("navid").classList.toggle("navdark");
    document.getElementById("news1id").classList.toggle("news1dark");
    document.getElementById("news").classList.toggle("newsdark");
    document.getElementById("news2id").classList.toggle("news2dark");
    document.getElementById("body").classList.toggle("bodydark");
    document.getElementById("mode").classList.toggle("modedark");

    // Toggle the moon and sun symbols
    if (document.getElementById("mode").classList.contains("modedark")) {
        document.getElementById("mode").textContent = "☀️"; // Change to sun symbol
    } else {
        document.getElementById("mode").textContent = "☾"; // Change to moon symbol
    }
}

// Ensure the function is assigned as an event handler
mode.onclick = lightToDark;

async function displayNews() {
    console.log("Fetching");
    const apiurl = "https://newsapi.org/v2/everything?q=tesla&from=2024-08-20&sortBy=publishedAt&language=en&apiKey=d6b4f8423f014fc097f66908ba8236d7";
    try {
        const response = await fetch(apiurl);

        if (!response.ok) {
            console.log("couldn't fetch");
            return;
        }

        const data = await response.json();
        console.log(data);
        const articles = data.articles;
        
        let cnt = 1;
        for (let i = 0; i < articles.length; i++) {
            if (cnt > 10) {
                break;
            }
            
            
            if (articles[i].title === "[Removed]") {
                continue; 
            }
            
            
            let cardtitle = "cardtitle" + cnt;
            let card_desc = "card_desc" + cnt;
            let cimage = "img" + cnt;
            
            
            if (document.getElementById(cardtitle) && document.getElementById(card_desc) && document.getElementById(cimage)) {
                document.getElementById(cardtitle).textContent = articles[i].title;
                document.getElementById(card_desc).textContent = articles[i].description;
                document.getElementById(cimage).src = articles[i].urlToImage;
                
                
                cnt++;
            }
        }



    } catch (error) {
        console.error("Error fetching the news:", error);
    }
}


// Call the function after the DOM content is fully loaded
window.addEventListener('DOMContentLoaded', (event) => {
    displayNews();
});


