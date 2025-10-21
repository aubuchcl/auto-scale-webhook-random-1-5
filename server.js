const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON and text bodies
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// Existing random endpoint
app.get('/random', (req, res) => {
  const number = Math.floor(Math.random() * 5) + 1;
  res.json({ instances: number });
});

// New /print endpoint
app.post('/print', (req, res) => {
  // Log the request body in formatted JSON
  console.log(JSON.stringify(req.body, null, 2));

  // Generate a random number between 1 and 5
  const number = Math.floor(Math.random() * 5) + 1;

  // Send response
  res.json({ instances: number });
});

app.get('/print', (req, res) => {
  // Log the request body in formatted JSON
  console.log(JSON.stringify(req.body, null, 2));

  // Generate a random number between 1 and 5
  const number = Math.floor(Math.random() * 5) + 1;

  // Send response
  res.json({ instances: number });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
