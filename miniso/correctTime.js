document.getElementById("showTimeBtn").addEventListener("click", function() {
    const currentTime = new Date().toLocaleTimeString(); // Get current time
    document.getElementById("timeDisplay").textContent = "Current Time: " + currentTime;});