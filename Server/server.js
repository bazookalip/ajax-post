const wolves = require('../server/Modules/wolves');

let express = require('express');

let app = express();

app.use(express.static('server/public'))

app.get('/wolves', function (req, res) {
    res.send(wolves)
})


app.listen(5000, function () {
    console.log('Running on port 5000');
});

