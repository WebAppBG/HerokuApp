// Install Express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the 'HerokuApp' directory
app.use(express.static(__dirname + '/HerokuApp'));

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname + '/HerokuApp/index.html'));
});

// Start the app on the default Heroku por or fallback to 8080
app.listen(process.env.PORT || 8080);