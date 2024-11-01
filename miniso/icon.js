var icon = document.getElementById("icon");
var currentTheme = localStorage.getItem("theme") || "light"; 


if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
    icon.src = "sun.png"; 
} else {
    icon.src = "moon.png"; 
}

// Toggle theme on icon click
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "sun.png"; 
        localStorage.setItem("theme", "dark"); 
    } else {
        icon.src = "moon.png"; 
        localStorage.setItem("theme", "light"); 
    }
};
