const express = require('express');
const app = express();
const port = 80;



app.get('/', (req, res) => {
    const data = {
        message: "My name is Gibson",
        timestamp: new Date().getTime()
    };
    JSON.stringify(JSON.parse(data));
});



app.listen(port, () => {
    console.log('Server started on port ' + port + '...');
});