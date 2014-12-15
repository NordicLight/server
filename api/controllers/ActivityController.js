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

      for(var i=0;i<data.length;i++){
        var  deviceid = data[i];

        Activity.find({deviceid: deviceid}).exec(function(err, data){
            if(data.length>0){
              return res.send(data[0]);
            }
        });

      }

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

