document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const loginForm = document.getElementById('loginForm');
    const submitLogin = document.getElementById('submitLogin');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const logoutButton = document.getElementById('logoutButton');
  
    // Show login form when "Log In" button is clicked
    loginButton.addEventListener('click', () => {
      loginForm.classList.remove('hidden');
      loginButton.classList.add('hidden');
    });
  
    // Handle login
    submitLogin.addEventListener('click', () => {
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password_login').value.trim();
  
      if (username && password) {
        localStorage.setItem('username', username);
        displayWelcomeMessage(username);
      } else {
        alert('Please enter both username and password');
      }
    });
  
    // Display welcome message if user is logged in
    function displayWelcomeMessage(username) {
      userNameDisplay.textContent = username;
      loginForm.classList.add('hidden');
      welcomeMessage.classList.remove('hidden');
      loginButton.classList.add('hidden');
    }
  
    // Check if user is logged in on page load
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      displayWelcomeMessage(storedUsername);
    }
  
    // Handle logout
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('username');
      welcomeMessage.classList.add('hidden');
      loginButton.classList.remove('hidden');
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
    });
  });