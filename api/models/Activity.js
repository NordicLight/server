/**
* Activity.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  		//http://maangalabs.com/blog/2014/07/26/generating-rest-api-with-sails-js-part-2/

  		timeid: {
  			type: "integer"
  		},
  		deviceid: {
  			type:"string"
  		},
  		devicename: {
  			type:"string"
  		},
  		duration: {
  			type:"integer"
  		},
  		awake: {
  			type:"string"
  		},
  		sleep: {
  			type:"string"
  		},
  		user: {
  			type:"string",
        required: true
  		},
      type: {
        type:"string"
      }
  		
  }
};

