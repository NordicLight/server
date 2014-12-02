/**
* App.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  		timeid: {
  			type: "integer",
  			required: true
  		},
  		deviceid: {
  			type:"string",
        required: true
  		},
  		devicename: {
  			type:"string"
  		},
  		user: {
  			type:"string",
        required: true
  		},
  		name: {
  			type:"string",
  			required: true
  		},
      runtime: {
        type:"integer",
        required: true
      },
      	type: {
        type:"string"
      }
  }
};

