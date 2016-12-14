var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('server running..');

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection',function (socket) {
	connections.push(socket);

	//newUsers
	socket.on('newUser', function(data, callback){
		callback(true);
		socket.username = data;
		console.log(data);
		users.push({
				name:socket.username,
				id:socket.id
			});
		updateUsers();
	console.log(users);
	});

	// updateUsers
	function updateUsers(){
		io.sockets.emit('getUsers', users);
	}

	// disconnectUsers
	socket.on('disconnectUser', function(data) {
		users.splice(users.indexOf(socket.username),1);
		updateUsers();
		connections.splice(connections.indexOf(socket,1));
	});

	//sendMessage-privatemessages
	socket.on('sendMessage',function (data) {
		 console.log(data.message);
     console.log(data.to);
		// console.log(data.from);
		 $name="testme";
		//  for (var i in users) {
		//          //var s = io.sockets.connected[i];
		//          if (users[i].name === data.to) {
		// 					 console.log(users[i].id);
		//             io.sockets.connected[users[i].id].emit('newMessage', 'for your eyes only');
		//          }
		//          console.log("User not available");
		//      }

   var id= data.to;
	 users[id] = socket;
	 users[id].emit('newMessage',$name);
	// io.to(id).emit('newMessage',$name);  //no effect
  //socket.to(id).emit('newMessage',$name); //no effect
  
  //  io.sockets.socket[id].emit('newMessage',$name); error
	 //io.sockets.(id).emit('newMessage',$name); error

              //to everyone online
   //socket.broadcast.emit('newMessage',$name ); //works fine
	  //socket.emit('newMessage',$name); //works fine


});


	});
