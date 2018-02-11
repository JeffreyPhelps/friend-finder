// Jeffrey Phelps - DU Web Dev Bootcamp 2017/2018 - Mod 13 Homework (Friend Finder)


//Dependencies
var path = require('path');

//ROUTING

module.exports = function(app){
  //default GET route that leads to home.html - displays home page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  //a USE route to home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};

