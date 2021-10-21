const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(cors())
app.use(express.static('./dist/MyMind'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/MyMind/' }),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);