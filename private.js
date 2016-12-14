 $('#send').submit(function(e){
    	e.preventDefault();
        var $data=
        { 
            to :'',
            from:'',
            message:$('#msg').val();

        }

    	socket.emit('sendMessage', $data);
    	$('#msg').val('');
    });

    socket.on('newMessage', function(data){


    	//$('#chatBox').append(); adding to previous chat list 
    });


//client side 





function message(socket){
  socket.on('sendMessage', function(data){
    var from = data.from;
    var to =data.to;
    
    clients[data.to].emit('newMessage', data.message);
  });
}
//server
