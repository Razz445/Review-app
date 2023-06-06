document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
  
    // Login
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      // Perform the necessary action to log in the user
      console.log('Logging in with username:', username, 'and password:', password);
    //  loginForm.reset();
    });
  });