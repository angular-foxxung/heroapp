(function() {
  "use strict";

  var HeroModel = require("models/hero").Model;
  // Initialise a new FoxxApplication.
  var FoxxApplication = require("org/arangodb/foxx").Controller,
  controller = new FoxxApplication(applicationContext);

  var DB = require("internal").db;
  var Heroes = require("repositories/heroes").Repository;
  var heroes = new Heroes(DB._collection("marvel_vertices"));

  // install route
  controller.get('/hero/:id', function (req, res) {
    res.json(heroes.byId(req.params("id")).forClient());
  });
}());
