/**
 * ActivityController
 *
 * @description :: Server-side logic for managing activities
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 module.exports = {

	//Waterline documentation https://github.com/balderdashy/waterline-docs

	getdevices: function (req, res) {

   var user = req.param('user');

   Activity.native(function(err, collection) {
    collection.distinct('deviceid', function(err, data) {

      var devices = [];
      var count = 0;

      for(var i=0;i<data.length;i++){
        var  deviceid = data[i];

        //Find one matching device id record so that we can return the complete info to the client
        Activity.find({where: {deviceid:deviceid,user:user},limit: 1}).exec(function(err, datadevice){
            count++;
            if(datadevice.length>0){
              devices.push(datadevice[0]); 
            }
            if(i === count){
               return res.send(devices);
            }
        });
      }

    });
   });
 },
 getitems: function (req, res) {
   var param = req.param('timeid');
   var deviceid = req.param('deviceid');
   var user = req.param('user');
   param = parseInt(param);
   Activity.find({ timeid: { '>=': param },deviceid:deviceid,user:user}).exec(function(err, data){
     return res.send(data);
   });
 }

};

