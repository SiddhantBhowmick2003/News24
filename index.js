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




