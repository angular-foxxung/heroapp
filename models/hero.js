(function() {
    "use strict";

    var Foxx = require("org/arangodb/foxx");
    var Hero = Foxx.Model.extend({}, {"attributes":{"name": "string", "comment": "string", "_key": "string", "_id": "string"}});

    exports.Model = Hero;
})();
