document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
  
    // Register
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      // Perform the necessary action to register the user
      console.log('Registering with username:', username, 'and password:', password);
      registerForm.reset();
    });
  });