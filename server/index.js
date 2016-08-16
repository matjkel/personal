'use strict';

const express     = require('express');
const app         = express();
const Path        = require('path');
const api         = require('./api/random')
const assetFolder = Path.resolve(__dirname, '../client/');


app.use(express.static(assetFolder));

  app.get("/rando", function(req, res){
    api.getRando()
    .then(function(resp){
      return resp.data;
    })
    .catch(function(err){
      console.error(err)
    })
  });

const port = process.env.PORT || 4000;

app.listen(port, function(){
  console.log("Listening on port", port);
});
