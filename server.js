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
  // Return whatever was sent in the request body
  console.log(JSON.stringify(res.json({ received: req.body }), null, 2);
  const number = Math.floor(Math.random() * 5) + 1;
  res.json({ instances: number });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
