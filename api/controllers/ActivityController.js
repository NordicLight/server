/**
 * ActivityController
 *
 * @description :: Server-side logic for managing activities
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 module.exports = {

	//Waterline documentation https://github.com/balderdashy/waterline-docs

	getdevices: function (req, res) {

   Activity.native(function(err, collection) {
    collection.distinct('deviceid', function(err, data) {
      return res.send(data);
    });
   });

 },
 getitems: function (req, res) {

   var param = req.param('timeid');
   param = parseInt(param);
   Activity.find({ timeid: { '>=': param }}).exec(function(err, data){
     return res.send(data);
   });
 }

};

