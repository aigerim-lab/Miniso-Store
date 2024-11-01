 // Select the message paragraph
 const message = document.getElementById('message');
  
 // Event listeners for each button
 document.getElementById('greetBtn').addEventListener('click', () => {
     message.textContent = "Hello! Hope you're having a great day!";
 });

 document.getElementById('thankBtn').addEventListener('click', () => {
     message.innerHTML = "<strong>Thank you!</strong> We appreciate your feedback.";
 });

 document.getElementById('warnBtn').addEventListener('click', () => {
     message.innerText = "Warning! Please proceed with caution.";
 });