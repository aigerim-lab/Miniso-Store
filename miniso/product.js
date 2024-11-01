function filterProductsByCategory(category) {
  const products = document.querySelectorAll('.product-item');

  products.forEach(product => {
      if (category === "all" || product.getAttribute('data-category') === category) {
          product.style.display = 'block'; // Show the product
      } else {
          product.style.display = 'none'; // Hide the product
      }
  });

  // Save the selected category in local storage
  localStorage.setItem('selectedCategory', category);
}

// Add event listeners to each category
document.querySelectorAll('.category-container div').forEach(categoryDiv => {
  categoryDiv.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      filterProductsByCategory(category);  // Call the filter function with the selected category
  });
});

// Add event listener to the categories header
document.getElementById("categoriesHeader").addEventListener("click", () => {
  filterProductsByCategory("all"); // Show all products when clicking on the header
});

// Retrieve the selected category from local storage and apply the filter
document.addEventListener('DOMContentLoaded', () => {
  const savedCategory = localStorage.getItem('selectedCategory') || 'all'; // Default to 'all' if none saved
  filterProductsByCategory(savedCategory);
});