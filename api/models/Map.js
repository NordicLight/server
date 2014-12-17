/**
* Map.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  		timeid: {
  			type: "integer"
  		},
  		timestamp: {
  			type:"string"
  		},
  		deviceid: {
  			type:"string",
  			unique: true,
        required: true
  		},
  		devicename: {
  			type:"string"
  		},
  		lat: {
  			type:"string"
  		},
  		lon: {
  			type:"string"
  		},
  		user: {
  			type:"string"
  		},
      type: {
        type:"string"
      }
  }
  
};

