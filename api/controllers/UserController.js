/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	//http://localhost:1337/user/updatelogintime?user=johan.b.brodin@gmail.com&logintime=112233
	updatelogintime: function (req, res) {

    	var user = req.param('user');
    	var logintime = req.param('logintime');

    	//Update the object
  		User.update({user: user} , {
  			logintime: logintime
		}).exec(function(err, data) {
			return res.send(201);
		});

  },

};

