'use strict';

const request = require('request');
const Rando   = module.exports;


Rando.getRando = function(){
  let options = {
    'url': '',
    'headers': {}
  },
  return new Promise(function(resolve, reject){
    request.get(options, function(err, resp, body){
      if(err){
        reject(err);
        return;
      }
      resolve(body, resp);
    });
  });
};
