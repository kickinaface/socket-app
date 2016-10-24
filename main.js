var express = require('express');
var app = express();
var http = require('http').Server(app);
var router = express.Router();
var port = (process.env.PORT || 8800);
var bodyParser = require('body-parser');
var io = require('socket.io')(http);
var currentUsers = [];

// Use body parser for json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

app.get('/visitors', function (req, res) {
    res.redirect('/#/visitors');
});

app.get('/settings', function (req, res) {
    res.redirect('/#/settings');
});

app.get('/interactive', function (req, res) {
    res.redirect('/#/interactive');
})

//Load the application files that are in the public directory
app.use(express.static(__dirname + '/public'));

//So that bower components can be loaded in from the nested "public" directory
app.use('/bower_components', express.static(__dirname + '/bower_components'));

http.listen(port, function () {
    console.log('Load app at: http://localhost:' + port);
});

// Socket io stuff
io.on('connection', function (socket) {
    // Send the connected user their client id.
    socket.on('getClientId', function () {
        socket.emit('clientId', socket.client.id );
    });

    // Everytime a user joins, push their data to the currentUsers array
    socket.on('user joined', function (data) {
        currentUsers.push(data);
        refreshCurrentUsers();
    });

    // Get users and display them back to client
    socket.on('getUsers', function (data) {
        refreshCurrentUsers();
    })

    // Update the direction of the user's position
    socket.on('changeUserDirection', function (client) {
        // Search through the array for the client and then change their direction
        for (var u=0; u<=(currentUsers.length-1); u++) {
            if (currentUsers[u].id === client.id) {
                currentUsers[u].x = (currentUsers[u].x + client.x);
                currentUsers[u].y = (currentUsers[u].y + client.y);
                refreshCurrentUsers();
            } else {
                //console.log('no user do nothing');
            }
        }
    });

    // Handle disconnect
    socket.on('disconnect', function (data) {
        // Loop through the array, find the socket that has disconnected
        // Then remove them from the array.
        for (var i=0; i<=(currentUsers.length-1); i++) {
            if (currentUsers[i].id === socket.client.id) {
                currentUsers.splice(i, 1);
                refreshCurrentUsers();
            } else {
                //console.log('no user do nothing');
            }
        }
    });

    // turn this into a module type function
    function refreshCurrentUsers() {
        io.sockets.emit('updateUsers', { users: currentUsers });
    }

})
