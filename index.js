const express = require('express');
const app = express();
const port = 80;



app.get('/', (req, res) => {
    const data = {
        message: "My name is Gibson",
        timestamp: new Date().getTime(),
        message2: "Hello world!",
        message3: "foo"
    };
    res.send(JSON.stringify(data));
});



app.listen(port, () => {
    console.log('Server started on port ' + port + '...');
});