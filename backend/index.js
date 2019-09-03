const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8000;
const app = express();
const Router = require('./routes'); 

app.use('/static', express.static('static'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

Router(app);

app.listen(port, () => {
  console.log('Server berjalan pada port: ' + port );
})
