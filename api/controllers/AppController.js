/**
 * AppController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 module.exports = {

 	getitems: function (req, res) {

 		var param = req.param('timeid');
 		param = parseInt(param);
 		App.find({ timeid: { '>=': param }}).exec(function(err, data){
 			return res.send(data);
 		});
 	}
 	
 };

