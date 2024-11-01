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
  alert("Form submitted successfully!");
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









