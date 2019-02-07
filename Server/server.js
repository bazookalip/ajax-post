const wolves = require('../server/Modules/wolves');

let PORT = 5000;

let express = require('express');

let app = express();

app.use(express.static('server/public'));

app.get('/wolves',  (req, res) =>{
    res.send(wolves)
})

app.listen(PORT,  () => {
    console.log('Running on port', PORT);
});

