const express = require('express');
const app = express();
const port = 3000;

app.get('/random', (req, res) => {
  const number = Math.floor(Math.random() * 5) + 1;
  res.json({ instances: number });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
