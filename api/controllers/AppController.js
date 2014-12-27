/**
 * AppController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 module.exports = {

 	getitems: function (req, res) {

 		var param = req.param('timeid');
 		var deviceid = req.param('deviceid');
   		var user = req.param('user');
 		param = parseInt(param);
 		App.find({ timeid: { '>=': param },deviceid:deviceid,user:user}).exec(function(err, data){
 			return res.send(data);
 		});
 	}
 	
 };

