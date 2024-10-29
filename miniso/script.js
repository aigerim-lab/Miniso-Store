function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const errorMessage = document.getElementById('errorMessage');
  
  errorMessage.textContent = '';

  if (name === '' || email === '' || password === '' || confirmPassword === '') {
    errorMessage.textContent = 'All fields are required!';
    return false; 
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    return false;
  }

  if (password.length < 6) {
    errorMessage.textContent = 'Password must be at least 6 characters long.';
    return false;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = 'Passwords do not match.';
    return false;
  }

  return true;
}
//FAQ icon
document.getElementById("faq-icon").addEventListener("click", function() {
  const faqSection = document.getElementById("faq-section");
  faqSection.style.display = (faqSection.style.display === "block") ? "none" : "block";
});

//FAQ  question toggle
const faqQuestions = document.querySelectorAll('.faq-question');
  
faqQuestions.forEach(function(question) {
  question.addEventListener('click', function() {
  const answer = this.nextElementSibling; 
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});


//data
   function updateDateTime() {
    const dateElement = document.getElementById("currentDate");
    const timeElement = document.getElementById("currentTime");
    
//get the current date and time
    const now = new Date();
    
//format date as Day, Month Date, Year
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    
// format time 
    const formattedTime = now.toLocaleTimeString('en-US', {hour12:true});

// display the date and time
    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

// update the time every second
  setInterval(updateDateTime, 1000);

// display date & time immediately when the page loads
  updateDateTime();



document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Create a FormData object from the form
  const formData = new FormData(this);

  // Use Fetch API to submit the form data asynchronously
  fetch("https://example.com/submit", {
      method: "POST",
      body: formData,
  })
  .then(response => {
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
      return response.json();
  })
  .then(data => {
      // Show a success message
      const responseMessage = document.getElementById("responseMessage");
      responseMessage.textContent = "Thank you for your message!";
      responseMessage.style.display = "block";
      // Clear the form
      this.reset();
  })
  .catch(error => {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
      const responseMessage = document.getElementById("responseMessage");
      responseMessage.textContent = "An error occurred. Please try again.";
      responseMessage.style.display = "block";
      responseMessage.style.color = "red"; // Change color for error message
  });
});






