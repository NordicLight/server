/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  		timeid: {
  			type: "integer"
  		},
  		user: {
  			type:"string",
  			unique: true,
          	required: true
  		},
  		password: {
  			type:"string"
  		},
      type: {
        type:"string"
      },
      logintime: {
        type: "integer"
      }
  }
  
};

