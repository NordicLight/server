/**
 * OnlineController
 *
 * @description :: Server-side logic for managing onlines
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	put: function (req, res) {

		var timeid = req.body.timeid;
		var timestamp = req.body.timestamp;
    var deviceid = req.body.deviceid;
    var devicename = req.body.devicename;
    var user = req.body.user;
    var status = req.body.status;

		Online.find({deviceid: deviceid})
		.exec(function(err, data){

			if ( data === null || data === undefined || data.length === 0){

				//Create ojbect if we do not have it
  				Online.create({
  					timeid: timeid,
  					timestamp: timestamp,
  					deviceid: deviceid,
  					devicename: devicename,
  					user: user,
  					status: status
					})
  				.exec(function(err, data) {
					return res.send(201);
				});

  			}else{

  				//Update the object
  				Online.update({deviceid: deviceid} , {
  					timeid: timeid,
  					timestamp: timestamp,
  					deviceid: deviceid,
  					devicename: devicename,
  					user: user,
  					status: status
					})
  				.exec(function(err, data) {
					return res.send(201);
				});
  			}

		});
	},

	get: function (req, res) {

		var deviceid = req.param('deviceid');

		Online.find({deviceid: deviceid})
		.exec(function(err, data){
			return res.send(data);
		});

	}

};

