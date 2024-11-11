const products = [
  { img: "StorageBag.jpg", name: "Storage Bag", price: "$21.00" },
  { img: "TableWare.jpg", name: "Table Ware", price: "$13.00" },
  { img: "FoodContainer.jpg", name: "Food Container", price: "$10.00" },
  { img: "CardBag.jpg", name: "Card Bag", price: "$9.00" },
  { img: "DeodorantSprayer.jpg", name: "Deodorant Sprayer", price: "$21.00" },
  { img: "Mask.jpg", name: "Mask", price: "$13.00" },
  { img: "GirlPerfume.jpg", name: "Girl Perfume", price: "$10.00" },
  { img: "LiquidLipstick.jpg", name: "Liquid Lipstick", price: "$9.00" },
  { img: "Eyeshade.jpg", name: "Eyeshade", price: "$21.00" },
  { img: "BathSlippers.jpg", name: "BathSlippers", price: "$13.00" },
  { img: "CottonEyeMask.jpg", name: "Cotton Eye Mask", price: "$10.00" }
];

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
