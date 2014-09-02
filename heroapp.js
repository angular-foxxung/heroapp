(function() {
  "use strict";

  var HeroModel = require("models/hero").Model;
  // Initialise a new FoxxApplication.
  var FoxxApplication = require("org/arangodb/foxx").Controller,
  controller = new FoxxApplication(applicationContext);

  var DB = require("internal").db;
  var Heroes = require("repositories/heroes").Repository;
  var heroes = new Heroes(DB._collection("heroes"));

  // install route
  controller.get('/hero/:id', function (req, res) {
    res.json(heroes.byId(req.params("id")).forClient());
  });
  controller.get('/random', function (req, res) {
    res.json(heroes.any());
  });
  controller.put('/hero/:id', function (req, res) {
      var hero = req.params('hero');
      if (!hero.get("comment")) {
        throw new Error("Comment missing");
      }

      heroes.replace(hero);
      res.json(hero.forClient());
  }).bodyParam('hero', 'Hero', HeroModel)
  .errorResponse(Error, 400, "Bad Request");
}());
