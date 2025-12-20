const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve mockups directory
app.use('/mockups', express.static(path.join(__dirname, 'mockups')));

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Catch-all for mockup routes
app.get('/mockups/*', (req, res) => {
  const mockupPath = req.path.replace('/mockups/', '');
  res.sendFile(path.join(__dirname, 'mockups', mockupPath, 'index.html'), (err) => {
    if (err) {
      res.sendFile(path.join(__dirname, 'mockups', `${mockupPath}.html`), (err2) => {
        if (err2) {
          res.status(404).send('Mockup not found');
        }
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Mockup server running at http://localhost:${PORT}`);
});
