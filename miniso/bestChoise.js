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
  
  // Loop through the products array
  products.forEach(product => {
    // Create the product item container
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");
  
    // Add the image
    const productImage = document.createElement("img");
    productImage.src = product.img;
    productImage.alt = product.name;
  
    // Add the product name
    const productName = document.createElement("h3");
    productName.textContent = product.name;
  
    // Add the price
    const productPrice = document.createElement("p");
    productPrice.textContent = product.price;
  
    // Append elements to product item
    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);
  
    // Append product item to the grid
    productGrid.appendChild(productItem);
  });