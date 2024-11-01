const readMoreBtn = document.getElementById('readMoreBtn');
    const moreContent = document.getElementById('moreContent');
      
    readMoreBtn.addEventListener('click', function() {
        if (moreContent.style.display === "none" || moreContent.style.display === "") {
            moreContent.style.display = "block";
            readMoreBtn.textContent = "Read Less";
        } else {
            moreContent.style.display = "none";
            readMoreBtn.textContent = "Read More";
        }
});