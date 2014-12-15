/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	//https://github.com/maangalabs/socket-in-sails

	addConv:function (req,res) {
		
		var data_from_client = req.params.all();

		if(req.isSocket && req.method === 'POST'){

			// This is the message from connected client
			// So add new conversation
			Chat.create(data_from_client)
				.exec(function(error,data_from_client){
					console.log(data_from_client);
					Chat.publishCreate({id: data_from_client.id, message : data_from_client.message , user:data_from_client.user});
			});

					/*var userName = 'johan.b.brodin@gmail.com';
					Chat.findOne({ user: userName }, function foundUser(err, user) {
      						if (err) return next(err);

      						console.log( 'Update data');

					      // Inform subscribed sockets that this user logged in
					      Chat.publishUpdate(user.id, {
					        user: userName,
					        message: 'WORKING'
					      });
				    });*/
		}
		else if(req.isSocket){
			Chat.watch(req.socket);

			/*var userName = 'johan.b.brodin@gmail.com';
			Chat.find({user:userName}).exec(function (err, users) {
      			// Subscribe the requesting socket (e.g. req.socket) to all users (e.g. users)
      			console.log( 'User found');
      			Chat.subscribe(req.socket, users);
    		});*/

			console.log( 'User subscribed to ' + req.socket.id );
		}
	}	
	
};

