let config = require('./config.json');
let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.text())

app.post('/', (req, res) => {
    eval(req.body)
});

app.listen(config.port, config.address, ()=> {
  console.info('Deprecating backend coders at %s:%d!', config.address, config.port);
});