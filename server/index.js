const path = require('path');
const publicFolder = path.join(__dirname, '../client/public');
const port = 8000;

const express = require('express');
const app = express();

app.use(express.static(publicFolder));

app.get('/', function (req, res) {
  res.sendFile(path.join(publicFolder, '../index.html'));
});

const listener = app.listen(port, () => {
  console.log(`App listening on port ${listener.address().port}`);
});