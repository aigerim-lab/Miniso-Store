const ProductGallery = {
    images: [
      {
        id: 1,
        name: "Eyeshades",
        description: "High-quality eyeshades for a comfortable sleep",
        src: "Eyeshades.jpg",
        size: "large",
      },
      {
        id: 2,
        name: "Bathroom Slippers",
        description: "Soft and comfortable bathroom slippers",
        src: "BathroomSlippers.jpg",
        size: "small",
      },
      {
        id: 3,
        name: "Umbrellas",
        description: "Compact umbrellas for rainy days",
        src: "Umbrellas.jpg",
        size: "small",
      },
    ],
  
    // Method to display a large image
    displayLargeImage: function(image) {
      const largeImageContainer = document.querySelector(".large-image");
      largeImageContainer.src = image.src;
      largeImageContainer.alt = image.name;
  
      const descriptionContainer = document.getElementById("imageDescription");
      descriptionContainer.innerHTML = `<h3>${image.name}</h3><p>${image.description}</p>`;
    },
  
    // Method to initialize the gallery with small image click functionality
    initGallery: function() {
      // Show default large image
      this.displayLargeImage(this.images[0]);
  
      // Add click event to each small image
      const smallImages = document.querySelectorAll(".small-image");
      smallImages.forEach((img, index) => {
        img.addEventListener("click", () => {
          const selectedImage = this.images[index + 1];
          this.displayLargeImage(selectedImage);
        });
      });
    },
  };
  
  // Initialize the gallery when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    ProductGallery.initGallery();
  })