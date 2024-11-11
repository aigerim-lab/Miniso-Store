const productItems = document.querySelectorAll('.product-item');
      
productItems.forEach(item => {
    const stars = item.querySelectorAll('.star');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            // Remove the selected class from all stars within this product item
            stars.forEach(s => s.classList.remove('selected'));
            
            // Add the selected class to the clicked star and all preceding stars
            for (let i = 0; i < this.dataset.value; i++) {
                stars[i].classList.add('selected');
            }
        });
    });
});
const productGrid = document.getElementById("section4");

// Function to save rating in local storage
function saveRating(productName, rating) {
  localStorage.setItem(`rating-${productName}`, rating);
}

// Function to get saved rating from local storage
function getRating(productName) {
  return localStorage.getItem(`rating-${productName}`) || 0;
}

// Create product elements with rating stars
products.forEach(product => {
  const productItem = document.createElement("div");
  productItem.classList.add("product-item");

  const productImage = document.createElement("img");
  productImage.src = product.img;
  productImage.alt = product.name;

  const productName = document.createElement("h3");
  productName.textContent = product.name;

  const productPrice = document.createElement("p");
  productPrice.textContent = product.price;

  const ratingContainer = document.createElement("div");
  ratingContainer.classList.add("rating");

  // Create stars
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.classList.add("star");
    star.dataset.value = i;
    star.innerHTML = "&#9733;";
    ratingContainer.appendChild(star);
  }

  productItem.appendChild(productImage);
  productItem.appendChild(productName);
  productItem.appendChild(productPrice);
  productItem.appendChild(ratingContainer);
  productGrid.appendChild(productItem);

  // Apply saved rating on page load
  const savedRating = getRating(product.name);
  if (savedRating) {
    const stars = ratingContainer.querySelectorAll('.star');
    for (let i = 0; i < savedRating; i++) {
      stars[i].classList.add('selected');
    }
  }
});

// Add interactive rating with persistence in local storage
document.querySelectorAll('.product-item').forEach(item => {
  const stars = item.querySelectorAll('.star');
  const productName = item.querySelector("h3").textContent;

  stars.forEach(star => {
    star.addEventListener('click', function() {
      // Get the selected rating value
      const ratingValue = this.dataset.value;

      // Remove the selected class from all stars
      stars.forEach(s => s.classList.remove('selected'));

      // Add the selected class to clicked star and all preceding stars
      for (let i = 0; i < ratingValue; i++) {
        stars[i].classList.add('selected');
      }

      // Save the selected rating to local storage
      saveRating(productName, ratingValue);
    });
  });
});