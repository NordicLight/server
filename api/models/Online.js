/**
* Online.js
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
      type:"string"
    },
    devicename: {
      type:"string"
    },
    user: {
      type:"string",
      required: true
    },
    status: {
      type:"string"
    },
    type: {
        type:"string"
    }
  }

};

