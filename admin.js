document.addEventListener('DOMContentLoaded', () => {
    const employeesList = document.getElementById('employeesList');
    const reviewsList = document.getElementById('reviewsList');
    const addEmployeeForm = document.getElementById('addEmployeeForm');
    const employeeNameInput = document.getElementById('employeeName');
    const addReviewForm = document.getElementById('addReviewForm');
    const reviewNameInput = document.getElementById('reviewName');
    const assignEmployeesForm = document.getElementById('assignEmployeesForm');
    const reviewSelect = document.getElementById('reviewSelect');
    const employeeSelect = document.getElementById('employeeSelect');
  
    // Add an employee
    addEmployeeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const employeeName = employeeNameInput.value;
      // Perform the necessary action to add an employee
      console.log('Adding employee:', employeeName);
      employeeNameInput.value = '';
    });
  
    // Add a performance review
    addReviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const reviewName = reviewNameInput.value;
      // Perform the necessary action to add a performance review
      console.log('Adding performance review:', reviewName);
      reviewNameInput.value = '';
    });
  
    // Assign employees to review
    assignEmployeesForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedReview = reviewSelect.value;
      const selectedEmployee = employeeSelect.value;
      // Perform the necessary action to assign employees to review
      console.log('Assigning employee', selectedEmployee, 'to review', selectedReview);
      reviewSelect.selectedIndex = 0;
      employeeSelect.selectedIndex = 0;
    });
  });