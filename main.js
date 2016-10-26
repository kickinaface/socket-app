const express = require('express');
const app = express();
const http = require('http').Server(app);
const router = express.Router();
const port = (process.env.PORT || 8800);
const bodyParser = require('body-parser');
const io = require('socket.io')(http);
const ioHelper = require('./helpers/socket.io.helper');

/*
    Use bodyParser to handle JSON for future DB CRUD operations.
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
    Use /api for future API routes: router.get('/someGet', function (data) {});
 */
app.use('/api', router);

/*
    Handle routing. Redirect users who access with the /tabName to use the hash tag
    for navigating to the right location. Otherwise, the page will not load
 */
app.get('/visitors', function (req, res) {
    res.redirect('/#/visitors');
});

app.get('/settings', function (req, res) {
    res.redirect('/#/settings');
});

app.get('/interactive', function (req, res) {
    res.redirect('/#/interactive');
});

app.get('/messages', function (req, res) {
    res.redirect('/#/messages');
})

/*
    Serve the web app in the public directory.
 */
app.use(express.static(__dirname + '/public'));

/*
    So that bower components can be loaded in from the nested "public" directory
 */
app.use('/bower_components', express.static(__dirname + '/bower_components'));

/*
    Serve the application
 */
http.listen(port, function () {
    console.log('Load app at: http://localhost:' + port);
});

/*
    Socket io stuff
 */
 ioHelper.manageSocketIO(io);
