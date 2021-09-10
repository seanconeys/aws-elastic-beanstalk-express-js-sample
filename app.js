const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Sean, was up baby! On vacation staying lazy. trying not to go crazy. too much jack, rooms hazy.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
