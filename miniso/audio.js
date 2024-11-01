document.addEventListener('DOMContentLoaded', () => {
    const notifyButton = document.getElementById('notifyButton');
    const notificationSound = document.getElementById('notificationSound');

    notifyButton.addEventListener('click', () => {
    // plays the audio
   notificationSound.play();

   // shows the modal
   const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
   myModal.show();
  });
});