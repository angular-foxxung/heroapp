(function() {
    "use strict";

    var Foxx = require("org/arangodb/foxx");
    var Heroes = Foxx.Repository.extend({});

    exports.Repository = Heroes;
})();
