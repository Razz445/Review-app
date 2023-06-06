const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let admin_username='admin'
let admin_pass='admin@123'

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); // Serve static files from the 'public' folder

// Routes
app.get('/', (req, res) => {
  console.log('home')
   res.sendFile(__dirname + '/login.html');

//res.sendFile(__dirname + '/employee.html');
});

app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/admin.html');
});

app.get('/employee', (req, res) => {
  res.sendFile(__dirname + '/employee.html');
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  console.log("hiii")
  
  if (username===admin_username&&password===admin_pass) {
    res.redirect('/admin');
  } else {
    console.log(username)
    res.redirect('/employee'); 
  }


});

// Register route
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  // Perform the necessary action to register a new employee
  res.redirect('/'); // Redirect to the login page after registration
});

// API endpoints for data manipulation (add/update/remove employees, reviews, etc.)
app.post('/api/add-employee', (req, res) => {
  const { employeeName } = req.body;
  // Perform the necessary action to add an employee
  res.sendStatus(200);
});

app.post('/api/add-review', (req, res) => {
  const { reviewName } = req.body;
  // Perform the necessary action to add a performance review
  res.sendStatus(200);
});

app.post('/api/assign-employee', (req, res) => {
  const { reviewId, employeeId } = req.body;
  // Perform the necessary action to assign an employee to a performance review
  res.sendStatus(200);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

