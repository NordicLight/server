/**
 * MapController
 *
 * @description :: Server-side logic for managing maps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


	put: function (req, res) {
    	
    	var timeid = req.body.timeid;
    	var timestamp = req.body.timestamp;
    	var deviceid = req.body.deviceid;
    	var devicename = req.body.devicename;
    	var lat = req.body.lat;
    	var lon = req.body.lon;
    	var user = req.body.user;

    	Map.find({deviceid: deviceid}).exec(function(err, data){
  			
  			if ( data == null || data == undefined || data.length == 0){

  				Map.create({
  					timeid: timeid,
  					timestamp: timestamp,
  					deviceid: deviceid,
  					devicename: devicename,
  					lat: lat,
  					lon: lon,
  					user: user
					})
				.exec(function(err, data) {
					return res.send(data);
				});

  			}else{

  				Map.update({deviceid: deviceid} , {
  					timeid: timeid,
  					timestamp: timestamp,
  					deviceid: deviceid,
  					devicename: devicename,
  					lat: lat,
  					lon: lon,
  					user: user
					})
				.exec(function(err, data) {
					return res.send(data);
				});

  			}
		});
  	}
};

