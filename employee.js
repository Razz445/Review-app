document.addEventListener('DOMContentLoaded', () => {
    const reviewsList = document.getElementById('reviewsList');
    const feedbackForm = document.getElementById('feedbackForm');
    const reviewSelect = document.getElementById('reviewSelect');
    const feedbackTextInput = document.getElementById('feedbackText');
  
    // Submit feedback
    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedReview = reviewSelect.value;
      const feedbackText = feedbackTextInput.value;
      // Perform the necessary action to submit feedback
      console.log('Submitting feedback for review', selectedReview, ':', feedbackText);
      reviewSelect.selectedIndex = 0;
      feedbackTextInput.value = '';
    });
  });