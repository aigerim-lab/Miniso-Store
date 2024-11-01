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