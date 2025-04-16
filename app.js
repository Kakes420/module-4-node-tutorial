const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.status(200).sendFile('./views/about.html', { root: __dirname });
});

app.get('/about-us', (req, res) => {
  res.redirect(301, '/about');
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
