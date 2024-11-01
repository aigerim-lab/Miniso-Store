const notifyButton = document.getElementById('notifyButton');
const notificationSound = document.getElementById('notificationSound');

// Add an event listener to the button
notifyButton.addEventListener('click', function() {
    // Play the notification sound
    notificationSound.play().catch(error => {
        console.error('Error playing sound:', error);
    });
});

// Use Bootstrap's event listener to trigger the modal animation
const modal = document.getElementById('exampleModal');

modal.addEventListener('show.bs.modal', function () {
    const modalContent = modal.querySelector('.modal-content');
    // Add the animation class to trigger CSS transition
    modalContent.classList.add('show');
});

// Optionally, remove the class when the modal is hidden
modal.addEventListener('hidden.bs.modal', function () {
    const modalContent = modal.querySelector('.modal-content');
    modalContent.classList.remove('show');
});