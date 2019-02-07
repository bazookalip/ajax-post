const wolves = require('../server/Modules/wolves');

let PORT = 5000;

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/wolves',  (req, res) =>{
    res.send(wolves)
});

app.post('/new', (req, res) =>{
    req.body
});


app.listen(PORT,  () => {
    console.log('Running on port', PORT);
});

