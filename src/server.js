const app = require('express')();
const lib = require('./lib');

app.get('/ping', (req, res) => {
    const text = lib.ping();
    return res.send({ messgae: text });
});

app.listen(3000, () => console.log('Listening to port 3000!'));
