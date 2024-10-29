document.getElementById("faq-heading").addEventListener("click", function() {
    const faqSection = document.getElementById("faq-questions");
    faqSection.style.display = (faqSection.style.display === "block") ? "none" : "block";
  });

  // Get all elements with the class "faq-question" and add toggle functionality
  const faqQuestions = document.querySelectorAll('.faq-question');

  // Loop through each question and add a click event listener to toggle answers
  faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling; // The next sibling element is the answer
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
  });